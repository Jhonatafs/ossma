import { afterAll, afterEach, beforeEach, describe, expect, it } from 'vitest';

import { db } from '$lib/db/database';

import {
	addAnamnesisHistoryEntry,
	createAnamnesisForClient,
	getAnamnesisByClientId,
	listAnamnesisHistory,
	updateAnamnesis
} from './anamnesis-repository';

async function clearAnamnesisRepositoryStores() {
	await db.open();
	await db.anamnesisHistory.clear();
	await db.anamneses.clear();
	await db.clients.clear();
}

function waitForTimestampTick() {
	return new Promise((resolve) => setTimeout(resolve, 5));
}

describe('anamnesis repository', () => {
	beforeEach(async () => {
		await clearAnamnesisRepositoryStores();
	});

	afterEach(async () => {
		await clearAnamnesisRepositoryStores();
	});

	afterAll(() => {
		db.close();
	});

	it('creates an anamnesis linked to a client', async () => {
		const anamnesis = await createAnamnesisForClient('client-1', {
			chiefComplaint: 'Initial complaint'
		});

		expect(anamnesis.id).toBeTruthy();
		expect(anamnesis.clientId).toBe('client-1');
		expect(anamnesis.chiefComplaint).toBe('Initial complaint');
		expect(anamnesis.createdAt).toBeTruthy();
		expect(anamnesis.updatedAt).toBe(anamnesis.createdAt);
	});

	it('does not create duplicated anamnesis records for the same client', async () => {
		const firstAnamnesis = await createAnamnesisForClient('client-1', {
			chiefComplaint: 'First complaint'
		});
		const secondAnamnesis = await createAnamnesisForClient('client-1', {
			chiefComplaint: 'Second complaint'
		});

		const count = await db.anamneses.where('clientId').equals('client-1').count();

		expect(secondAnamnesis.id).toBe(firstAnamnesis.id);
		expect(secondAnamnesis.chiefComplaint).toBe('First complaint');
		expect(count).toBe(1);
	});

	it('gets anamnesis by client id', async () => {
		const anamnesis = await createAnamnesisForClient('client-1');

		const foundAnamnesis = await getAnamnesisByClientId('client-1');

		expect(foundAnamnesis?.id).toBe(anamnesis.id);
	});

	it('updates anamnesis and preserves id, clientId, and createdAt', async () => {
		const anamnesis = await createAnamnesisForClient('client-1', {
			chiefComplaint: 'Before'
		});
		await waitForTimestampTick();

		const updatedAnamnesis = await updateAnamnesis('client-1', {
			chiefComplaint: 'After',
			goals: 'Improve mobility'
		});

		expect(updatedAnamnesis.id).toBe(anamnesis.id);
		expect(updatedAnamnesis.clientId).toBe(anamnesis.clientId);
		expect(updatedAnamnesis.createdAt).toBe(anamnesis.createdAt);
		expect(updatedAnamnesis.chiefComplaint).toBe('After');
		expect(updatedAnamnesis.goals).toBe('Improve mobility');
		expect(updatedAnamnesis.updatedAt).not.toBe(anamnesis.updatedAt);
	});

	it('records anamnesis history when updating by default', async () => {
		const anamnesis = await createAnamnesisForClient('client-1', {
			chiefComplaint: 'Before'
		});

		await updateAnamnesis(
			'client-1',
			{ chiefComplaint: 'After' },
			{ changedByProfessionalId: 'professional-1', changeReason: 'Routine review' }
		);

		const history = await listAnamnesisHistory('client-1');

		expect(history).toHaveLength(1);
		expect(history[0]?.anamnesisId).toBe(anamnesis.id);
		expect(history[0]?.changedByProfessionalId).toBe('professional-1');
		expect(history[0]?.changeReason).toBe('Routine review');
		expect(history[0]?.snapshot.chiefComplaint).toBe('Before');
	});

	it('lists anamnesis history from newest to oldest and respects limit', async () => {
		const anamnesis = await createAnamnesisForClient('client-1');

		await addAnamnesisHistoryEntry({
			anamnesisId: anamnesis.id,
			clientId: 'client-1',
			changedAt: '2026-05-18T12:00:00.000Z',
			snapshot: { chiefComplaint: 'Old' }
		});
		await addAnamnesisHistoryEntry({
			anamnesisId: anamnesis.id,
			clientId: 'client-1',
			changedAt: '2026-05-18T12:10:00.000Z',
			snapshot: { chiefComplaint: 'New' }
		});
		await addAnamnesisHistoryEntry({
			anamnesisId: anamnesis.id,
			clientId: 'client-1',
			changedAt: '2026-05-18T12:05:00.000Z',
			snapshot: { chiefComplaint: 'Middle' }
		});

		const history = await listAnamnesisHistory('client-1', { limit: 2 });

		expect(history).toHaveLength(2);
		expect(history.map((entry) => entry.snapshot.chiefComplaint)).toEqual(['New', 'Middle']);
	});

	it('can update anamnesis without recording history', async () => {
		await createAnamnesisForClient('client-1', {
			chiefComplaint: 'Before'
		});

		await updateAnamnesis('client-1', { chiefComplaint: 'After' }, { saveHistory: false });

		const history = await listAnamnesisHistory('client-1');

		expect(history).toEqual([]);
	});
});
