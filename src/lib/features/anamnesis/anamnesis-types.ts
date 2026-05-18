import type { Anamnesis, EntityId } from '$lib/db/types';

export type CreateAnamnesisInput = Partial<
	Omit<Anamnesis, 'id' | 'clientId' | 'createdAt' | 'updatedAt' | 'deletedAt'>
>;

export type UpdateAnamnesisPatch = CreateAnamnesisInput;

export interface UpdateAnamnesisOptions {
	changedByProfessionalId?: EntityId;
	changeReason?: string;
	saveHistory?: boolean;
}

export interface AddAnamnesisHistoryInput {
	anamnesisId: EntityId;
	clientId: EntityId;
	changedByProfessionalId?: EntityId;
	changedAt?: string;
	changeReason?: string;
	snapshot: Partial<Anamnesis>;
}

export interface ListAnamnesisHistoryOptions {
	limit?: number;
}
