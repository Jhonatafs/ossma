import type { ContactEntry, EntityId } from '$lib/db/types';

export interface CreateProfessionalInput {
	fullName: string;
	prefix?: string;
	displayName?: string;
	profession?: string;
	education?: string;
	specialty?: string;
	professionalRegistry?: string;
	phone?: string;
	email?: string;
	address?: string;
	photoDataUrl?: string;
	logoUri?: string;
	signatureUri?: string;
	institutionId?: EntityId;
	contacts?: ContactEntry[];
	notes?: string;
	isActive?: boolean;
}

export type UpdateProfessionalPatch = Partial<CreateProfessionalInput>;

export interface GetProfessionalOptions {
	includeDeleted?: boolean;
}
