import type { BiologicalSex } from '$lib/db/types';

export interface CreateClientInput {
	fullName: string;
	preferredName?: string;
	birthDate?: string;
	biologicalSex?: BiologicalSex;
	phone?: string;
	email?: string;
	document?: string;
	address?: string;
	occupation?: string;
	notes?: string;
}

export type UpdateClientPatch = Partial<CreateClientInput>;

export interface GetClientOptions {
	includeDeleted?: boolean;
}
