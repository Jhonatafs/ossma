import { db } from '$lib/db/database';
import type { Anamnesis, AnamnesisHistoryEntry, EntityId } from '$lib/db/types';
import { createBaseEntityFields, createTimestamp } from '$lib/db/timestamps';

import type {
	AddAnamnesisHistoryInput,
	CreateAnamnesisInput,
	ListAnamnesisHistoryOptions,
	UpdateAnamnesisOptions,
	UpdateAnamnesisPatch
} from './anamnesis-types';

const DEFAULT_HISTORY_LIMIT = 10;

function isActiveAnamnesis(anamnesis: Anamnesis): boolean {
	return !anamnesis.deletedAt;
}

function sortHistoryByChangedAtDesc(
	firstEntry: AnamnesisHistoryEntry,
	secondEntry: AnamnesisHistoryEntry
): number {
	const changedAtComparison = secondEntry.changedAt.localeCompare(firstEntry.changedAt);

	if (changedAtComparison !== 0) {
		return changedAtComparison;
	}

	return secondEntry.createdAt.localeCompare(firstEntry.createdAt);
}

export async function createAnamnesisForClient(
	clientId: EntityId,
	input: CreateAnamnesisInput = {}
): Promise<Anamnesis> {
	const existingAnamnesis = await getAnamnesisByClientId(clientId);

	if (existingAnamnesis) {
		return existingAnamnesis;
	}

	const anamnesis: Anamnesis = {
		...createBaseEntityFields(),
		clientId,
		...input
	};

	await db.anamneses.put(anamnesis);

	return anamnesis;
}

export async function getAnamnesisByClientId(clientId: EntityId): Promise<Anamnesis | undefined> {
	const anamneses = await db.anamneses.where('clientId').equals(clientId).toArray();

	return anamneses.find(isActiveAnamnesis);
}

export async function updateAnamnesis(
	clientId: EntityId,
	patch: UpdateAnamnesisPatch,
	options: UpdateAnamnesisOptions = {}
): Promise<Anamnesis> {
	const existingAnamnesis = await getAnamnesisByClientId(clientId);

	if (!existingAnamnesis) {
		return createAnamnesisForClient(clientId, patch);
	}

	return db.transaction('rw', db.anamneses, db.anamnesisHistory, async () => {
		const updatedAnamnesis: Anamnesis = {
			...existingAnamnesis,
			...patch,
			id: existingAnamnesis.id,
			clientId: existingAnamnesis.clientId,
			createdAt: existingAnamnesis.createdAt,
			deletedAt: existingAnamnesis.deletedAt,
			updatedAt: createTimestamp()
		};

		if (options.saveHistory !== false) {
			await addAnamnesisHistoryEntry({
				anamnesisId: existingAnamnesis.id,
				clientId: existingAnamnesis.clientId,
				changedByProfessionalId: options.changedByProfessionalId,
				changeReason: options.changeReason,
				snapshot: existingAnamnesis
			});
		}

		await db.anamneses.put(updatedAnamnesis);

		return updatedAnamnesis;
	});
}

export async function addAnamnesisHistoryEntry(
	input: AddAnamnesisHistoryInput
): Promise<AnamnesisHistoryEntry> {
	const timestamp = createTimestamp();
	const historyEntry: AnamnesisHistoryEntry = {
		...createBaseEntityFields(timestamp),
		anamnesisId: input.anamnesisId,
		clientId: input.clientId,
		changedByProfessionalId: input.changedByProfessionalId,
		changedAt: input.changedAt ?? timestamp,
		changeReason: input.changeReason,
		snapshot: input.snapshot
	};

	await db.anamnesisHistory.put(historyEntry);

	return historyEntry;
}

export async function listAnamnesisHistory(
	clientId: EntityId,
	options: ListAnamnesisHistoryOptions = {}
): Promise<AnamnesisHistoryEntry[]> {
	const limit = options.limit ?? DEFAULT_HISTORY_LIMIT;
	const historyEntries = await db.anamnesisHistory.where('clientId').equals(clientId).toArray();

	return historyEntries.sort(sortHistoryByChangedAtDesc).slice(0, limit);
}
