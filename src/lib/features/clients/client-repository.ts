import { db } from '$lib/db/database';
import type { Client, EntityId } from '$lib/db/types';
import { createBaseEntityFields, createTimestamp } from '$lib/db/timestamps';

import type { CreateClientInput, GetClientOptions, UpdateClientPatch } from './client-types';

function isActiveClient(client: Client): boolean {
	return !client.deletedAt;
}

function sortClientsByName(firstClient: Client, secondClient: Client): number {
	const nameComparison = firstClient.fullName.localeCompare(secondClient.fullName, undefined, {
		sensitivity: 'base'
	});

	if (nameComparison !== 0) {
		return nameComparison;
	}

	return firstClient.createdAt.localeCompare(secondClient.createdAt);
}

export async function createClient(input: CreateClientInput): Promise<Client> {
	const client: Client = {
		...createBaseEntityFields(),
		...input
	};

	await db.clients.put(client);

	return client;
}

export async function getClientById(
	id: EntityId,
	options: GetClientOptions = {}
): Promise<Client | undefined> {
	const client = await db.clients.get(id);

	if (!client) {
		return undefined;
	}

	if (!options.includeDeleted && !isActiveClient(client)) {
		return undefined;
	}

	return client;
}

export async function listClients(): Promise<Client[]> {
	const clients = await db.clients.toArray();

	return clients.filter(isActiveClient).sort(sortClientsByName);
}

export async function updateClient(
	id: EntityId,
	patch: UpdateClientPatch
): Promise<Client | undefined> {
	const existingClient = await getClientById(id);

	if (!existingClient) {
		return undefined;
	}

	const updatedClient: Client = {
		...existingClient,
		...patch,
		id: existingClient.id,
		createdAt: existingClient.createdAt,
		deletedAt: existingClient.deletedAt,
		updatedAt: createTimestamp()
	};

	await db.clients.put(updatedClient);

	return updatedClient;
}

export async function softDeleteClient(id: EntityId): Promise<Client | undefined> {
	const existingClient = await getClientById(id, { includeDeleted: true });

	if (!existingClient) {
		return undefined;
	}

	if (existingClient.deletedAt) {
		return existingClient;
	}

	const timestamp = createTimestamp();
	const deletedClient: Client = {
		...existingClient,
		deletedAt: timestamp,
		updatedAt: timestamp
	};

	await db.clients.put(deletedClient);

	return deletedClient;
}
