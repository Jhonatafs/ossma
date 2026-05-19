import { afterAll, afterEach, beforeEach, describe, expect, it } from 'vitest';

import { db } from '$lib/db/database';

import {
	createProfessional,
	getProfessionalById,
	listProfessionals,
	softDeleteProfessional,
	updateProfessional
} from './professional-repository';

async function clearProfessionalRepositoryStores() {
	await db.open();
	await db.professionals.clear();
}

function waitForTimestampTick() {
	return new Promise((resolve) => setTimeout(resolve, 5));
}

describe('professional repository', () => {
	beforeEach(async () => {
		await clearProfessionalRepositoryStores();
	});

	afterEach(async () => {
		await clearProfessionalRepositoryStores();
	});

	afterAll(() => {
		db.close();
	});

	it('creates a professional with id and timestamps', async () => {
		const professional = await createProfessional({ fullName: 'Ada Lovelace' });

		expect(professional.id).toBeTruthy();
		expect(professional.fullName).toBe('Ada Lovelace');
		expect(professional.createdAt).toBeTruthy();
		expect(professional.updatedAt).toBe(professional.createdAt);
	});

	it('gets a created professional by id', async () => {
		const professional = await createProfessional({ fullName: 'Grace Hopper' });

		const foundProfessional = await getProfessionalById(professional.id);

		expect(foundProfessional?.id).toBe(professional.id);
		expect(foundProfessional?.fullName).toBe('Grace Hopper');
	});

	it('lists active professionals ordered by full name', async () => {
		await createProfessional({ fullName: 'Beta Professional' });
		await createProfessional({ fullName: 'Alpha Professional' });

		const professionals = await listProfessionals();

		expect(professionals.map((professional) => professional.fullName)).toEqual([
			'Alpha Professional',
			'Beta Professional'
		]);
	});

	it('updates allowed fields and preserves id and createdAt', async () => {
		const professional = await createProfessional({
			fullName: 'Original Name',
			notes: 'Initial note'
		});
		await waitForTimestampTick();

		const updatedProfessional = await updateProfessional(professional.id, {
			fullName: 'Updated Name',
			notes: 'Updated note',
			specialty: 'Physiology'
		});

		expect(updatedProfessional?.id).toBe(professional.id);
		expect(updatedProfessional?.createdAt).toBe(professional.createdAt);
		expect(updatedProfessional?.fullName).toBe('Updated Name');
		expect(updatedProfessional?.notes).toBe('Updated note');
		expect(updatedProfessional?.specialty).toBe('Physiology');
		expect(updatedProfessional?.updatedAt).not.toBe(professional.updatedAt);
	});

	it('soft deletes a professional', async () => {
		const professional = await createProfessional({ fullName: 'Deleted Professional' });

		const deletedProfessional = await softDeleteProfessional(professional.id);

		expect(deletedProfessional?.id).toBe(professional.id);
		expect(deletedProfessional?.deletedAt).toBeTruthy();
		expect(deletedProfessional?.updatedAt).toBe(deletedProfessional?.deletedAt);
	});

	it('does not list or return soft deleted professionals by default', async () => {
		const activeProfessional = await createProfessional({ fullName: 'Active Professional' });
		const deletedProfessional = await createProfessional({ fullName: 'Deleted Professional' });

		await softDeleteProfessional(deletedProfessional.id);

		const professionals = await listProfessionals();
		const foundDeletedProfessional = await getProfessionalById(deletedProfessional.id);
		const foundDeletedProfessionalWithOption = await getProfessionalById(deletedProfessional.id, {
			includeDeleted: true
		});

		expect(professionals.map((professional) => professional.id)).toEqual([activeProfessional.id]);
		expect(foundDeletedProfessional).toBeUndefined();
		expect(foundDeletedProfessionalWithOption?.id).toBe(deletedProfessional.id);
	});
});
