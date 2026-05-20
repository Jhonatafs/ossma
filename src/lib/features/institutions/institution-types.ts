import type { ContactEntry } from '$lib/db/types';

export interface CreateInstitutionInput {
	name: string;
	tradeName?: string;
	document?: string;
	phone?: string;
	email?: string;
	address?: string;
	logoDataUrl?: string;
	photoDataUrl?: string;
	logoUri?: string;
	contacts?: ContactEntry[];
	footerText?: string;
	notes?: string;
	isActive?: boolean;
}

export type UpdateInstitutionPatch = Partial<CreateInstitutionInput>;

export interface GetInstitutionOptions {
	includeDeleted?: boolean;
}
