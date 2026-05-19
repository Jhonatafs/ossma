import { db } from '$lib/db/database';
import { createBaseEntityFields, createTimestamp } from '$lib/db/timestamps';
import type { EntityId, Professional } from '$lib/db/types';

import type {
	CreateProfessionalInput,
	GetProfessionalOptions,
	UpdateProfessionalPatch
} from './professional-types';

function isActiveProfessional(professional: Professional): boolean {
	return !professional.deletedAt;
}

function sortProfessionalsByName(
	firstProfessional: Professional,
	secondProfessional: Professional
): number {
	const nameComparison = firstProfessional.fullName.localeCompare(
		secondProfessional.fullName,
		undefined,
		{
			sensitivity: 'base'
		}
	);

	if (nameComparison !== 0) {
		return nameComparison;
	}

	return firstProfessional.createdAt.localeCompare(secondProfessional.createdAt);
}

export async function createProfessional(input: CreateProfessionalInput): Promise<Professional> {
	const professional: Professional = {
		...createBaseEntityFields(),
		...input
	};

	await db.professionals.put(professional);

	return professional;
}

export async function getProfessionalById(
	id: EntityId,
	options: GetProfessionalOptions = {}
): Promise<Professional | undefined> {
	const professional = await db.professionals.get(id);

	if (!professional) {
		return undefined;
	}

	if (!options.includeDeleted && !isActiveProfessional(professional)) {
		return undefined;
	}

	return professional;
}

export async function listProfessionals(): Promise<Professional[]> {
	const professionals = await db.professionals.toArray();

	return professionals.filter(isActiveProfessional).sort(sortProfessionalsByName);
}

export async function updateProfessional(
	id: EntityId,
	patch: UpdateProfessionalPatch
): Promise<Professional | undefined> {
	const existingProfessional = await getProfessionalById(id);

	if (!existingProfessional) {
		return undefined;
	}

	const updatedProfessional: Professional = {
		...existingProfessional,
		...patch,
		id: existingProfessional.id,
		createdAt: existingProfessional.createdAt,
		deletedAt: existingProfessional.deletedAt,
		updatedAt: createTimestamp()
	};

	await db.professionals.put(updatedProfessional);

	return updatedProfessional;
}

export async function softDeleteProfessional(id: EntityId): Promise<Professional | undefined> {
	const existingProfessional = await getProfessionalById(id, { includeDeleted: true });

	if (!existingProfessional) {
		return undefined;
	}

	if (existingProfessional.deletedAt) {
		return existingProfessional;
	}

	const timestamp = createTimestamp();
	const deletedProfessional: Professional = {
		...existingProfessional,
		deletedAt: timestamp,
		updatedAt: timestamp
	};

	await db.professionals.put(deletedProfessional);

	return deletedProfessional;
}
