import { afterAll, afterEach, beforeEach, describe, expect, it } from 'vitest';

import { db } from '$lib/db/database';

import {
	createClient,
	getClientById,
	listClients,
	softDeleteClient,
	updateClient
} from './client-repository';

async function clearClientRepositoryStores() {
	await db.open();
	await db.anamnesisHistory.clear();
	await db.anamneses.clear();
	await db.clients.clear();
}

function waitForTimestampTick() {
	return new Promise((resolve) => setTimeout(resolve, 5));
}

describe('client repository', () => {
	beforeEach(async () => {
		await clearClientRepositoryStores();
	});

	afterEach(async () => {
		await clearClientRepositoryStores();
	});

	afterAll(() => {
		db.close();
	});

	it('creates a client with id and timestamps', async () => {
		const client = await createClient({ fullName: 'Ada Lovelace' });

		expect(client.id).toBeTruthy();
		expect(client.fullName).toBe('Ada Lovelace');
		expect(client.createdAt).toBeTruthy();
		expect(client.updatedAt).toBe(client.createdAt);
	});

	it('gets a created client by id', async () => {
		const client = await createClient({ fullName: 'Grace Hopper' });

		const foundClient = await getClientById(client.id);

		expect(foundClient?.id).toBe(client.id);
		expect(foundClient?.fullName).toBe('Grace Hopper');
	});

	it('lists active clients ordered by full name', async () => {
		await createClient({ fullName: 'Beta Client' });
		await createClient({ fullName: 'Alpha Client' });

		const clients = await listClients();

		expect(clients.map((client) => client.fullName)).toEqual(['Alpha Client', 'Beta Client']);
	});

	it('updates allowed fields and preserves id and createdAt', async () => {
		const client = await createClient({ fullName: 'Original Name', notes: 'Initial note' });
		await waitForTimestampTick();

		const updatedClient = await updateClient(client.id, {
			fullName: 'Updated Name',
			notes: 'Updated note'
		});

		expect(updatedClient?.id).toBe(client.id);
		expect(updatedClient?.createdAt).toBe(client.createdAt);
		expect(updatedClient?.fullName).toBe('Updated Name');
		expect(updatedClient?.notes).toBe('Updated note');
		expect(updatedClient?.updatedAt).not.toBe(client.updatedAt);
	});

	it('soft deletes a client', async () => {
		const client = await createClient({ fullName: 'Deleted Client' });

		const deletedClient = await softDeleteClient(client.id);

		expect(deletedClient?.id).toBe(client.id);
		expect(deletedClient?.deletedAt).toBeTruthy();
		expect(deletedClient?.updatedAt).toBe(deletedClient?.deletedAt);
	});

	it('does not list or return soft deleted clients by default', async () => {
		const activeClient = await createClient({ fullName: 'Active Client' });
		const deletedClient = await createClient({ fullName: 'Deleted Client' });

		await softDeleteClient(deletedClient.id);

		const clients = await listClients();
		const foundDeletedClient = await getClientById(deletedClient.id);
		const foundDeletedClientWithOption = await getClientById(deletedClient.id, {
			includeDeleted: true
		});

		expect(clients.map((client) => client.id)).toEqual([activeClient.id]);
		expect(foundDeletedClient).toBeUndefined();
		expect(foundDeletedClientWithOption?.id).toBe(deletedClient.id);
	});
});
