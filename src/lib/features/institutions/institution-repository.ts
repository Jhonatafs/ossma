import { db } from '$lib/db/database';
import { createBaseEntityFields, createTimestamp } from '$lib/db/timestamps';
import type { EntityId, Institution } from '$lib/db/types';

import type {
	CreateInstitutionInput,
	GetInstitutionOptions,
	UpdateInstitutionPatch
} from './institution-types';

function isActiveInstitution(institution: Institution): boolean {
	return !institution.deletedAt;
}

function sortInstitutionsByName(firstInstitution: Institution, secondInstitution: Institution) {
	const nameComparison = firstInstitution.name.localeCompare(secondInstitution.name, undefined, {
		sensitivity: 'base'
	});

	if (nameComparison !== 0) {
		return nameComparison;
	}

	return firstInstitution.createdAt.localeCompare(secondInstitution.createdAt);
}

export async function createInstitution(input: CreateInstitutionInput): Promise<Institution> {
	const institution: Institution = {
		...createBaseEntityFields(),
		...input
	};

	await db.institutions.put(institution);

	return institution;
}

export async function getInstitutionById(
	id: EntityId,
	options: GetInstitutionOptions = {}
): Promise<Institution | undefined> {
	const institution = await db.institutions.get(id);

	if (!institution) {
		return undefined;
	}

	if (!options.includeDeleted && !isActiveInstitution(institution)) {
		return undefined;
	}

	return institution;
}

export async function listInstitutions(): Promise<Institution[]> {
	const institutions = await db.institutions.toArray();

	return institutions.filter(isActiveInstitution).sort(sortInstitutionsByName);
}

export async function updateInstitution(
	id: EntityId,
	patch: UpdateInstitutionPatch
): Promise<Institution | undefined> {
	const existingInstitution = await getInstitutionById(id);

	if (!existingInstitution) {
		return undefined;
	}

	const updatedInstitution: Institution = {
		...existingInstitution,
		...patch,
		id: existingInstitution.id,
		createdAt: existingInstitution.createdAt,
		deletedAt: existingInstitution.deletedAt,
		updatedAt: createTimestamp()
	};

	await db.institutions.put(updatedInstitution);

	return updatedInstitution;
}

export async function softDeleteInstitution(id: EntityId): Promise<Institution | undefined> {
	const existingInstitution = await getInstitutionById(id, { includeDeleted: true });

	if (!existingInstitution) {
		return undefined;
	}

	if (existingInstitution.deletedAt) {
		return existingInstitution;
	}

	const timestamp = createTimestamp();
	const deletedInstitution: Institution = {
		...existingInstitution,
		deletedAt: timestamp,
		updatedAt: timestamp
	};

	await db.institutions.put(deletedInstitution);

	return deletedInstitution;
}
