import { afterAll, afterEach, beforeEach, describe, expect, it } from 'vitest';

import { db } from '$lib/db/database';

import {
	createInstitution,
	getInstitutionById,
	listInstitutions,
	softDeleteInstitution,
	updateInstitution
} from './institution-repository';

async function clearInstitutionRepositoryStores() {
	await db.open();
	await db.institutions.clear();
}

function waitForTimestampTick() {
	return new Promise((resolve) => setTimeout(resolve, 5));
}

describe('institution repository', () => {
	beforeEach(async () => {
		await clearInstitutionRepositoryStores();
	});

	afterEach(async () => {
		await clearInstitutionRepositoryStores();
	});

	afterAll(() => {
		db.close();
	});

	it('creates an institution with id and timestamps', async () => {
		const institution = await createInstitution({ name: 'OSSMA Clinic' });

		expect(institution.id).toBeTruthy();
		expect(institution.name).toBe('OSSMA Clinic');
		expect(institution.createdAt).toBeTruthy();
		expect(institution.updatedAt).toBe(institution.createdAt);
	});

	it('gets a created institution by id', async () => {
		const institution = await createInstitution({ name: 'Movement Lab' });

		const foundInstitution = await getInstitutionById(institution.id);

		expect(foundInstitution?.id).toBe(institution.id);
		expect(foundInstitution?.name).toBe('Movement Lab');
	});

	it('lists active institutions ordered by name', async () => {
		await createInstitution({ name: 'Beta Clinic' });
		await createInstitution({ name: 'Alpha Clinic' });

		const institutions = await listInstitutions();

		expect(institutions.map((institution) => institution.name)).toEqual([
			'Alpha Clinic',
			'Beta Clinic'
		]);
	});

	it('updates allowed fields and preserves id and createdAt', async () => {
		const institution = await createInstitution({
			name: 'Original Name',
			notes: 'Initial note'
		});
		await waitForTimestampTick();

		const updatedInstitution = await updateInstitution(institution.id, {
			name: 'Updated Name',
			notes: 'Updated note',
			footerText: 'Prepared by OSSMA'
		});

		expect(updatedInstitution?.id).toBe(institution.id);
		expect(updatedInstitution?.createdAt).toBe(institution.createdAt);
		expect(updatedInstitution?.name).toBe('Updated Name');
		expect(updatedInstitution?.notes).toBe('Updated note');
		expect(updatedInstitution?.footerText).toBe('Prepared by OSSMA');
		expect(updatedInstitution?.updatedAt).not.toBe(institution.updatedAt);
	});

	it('soft deletes an institution', async () => {
		const institution = await createInstitution({ name: 'Deleted Institution' });

		const deletedInstitution = await softDeleteInstitution(institution.id);

		expect(deletedInstitution?.id).toBe(institution.id);
		expect(deletedInstitution?.deletedAt).toBeTruthy();
		expect(deletedInstitution?.updatedAt).toBe(deletedInstitution?.deletedAt);
	});

	it('does not list or return soft deleted institutions by default', async () => {
		const activeInstitution = await createInstitution({ name: 'Active Institution' });
		const deletedInstitution = await createInstitution({ name: 'Deleted Institution' });

		await softDeleteInstitution(deletedInstitution.id);

		const institutions = await listInstitutions();
		const foundDeletedInstitution = await getInstitutionById(deletedInstitution.id);
		const foundDeletedInstitutionWithOption = await getInstitutionById(deletedInstitution.id, {
			includeDeleted: true
		});

		expect(institutions.map((institution) => institution.id)).toEqual([activeInstitution.id]);
		expect(foundDeletedInstitution).toBeUndefined();
		expect(foundDeletedInstitutionWithOption?.id).toBe(deletedInstitution.id);
	});
});
