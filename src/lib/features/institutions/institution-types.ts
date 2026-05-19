export interface CreateInstitutionInput {
	name: string;
	tradeName?: string;
	document?: string;
	phone?: string;
	email?: string;
	address?: string;
	logoUri?: string;
	footerText?: string;
	notes?: string;
	isActive?: boolean;
}

export type UpdateInstitutionPatch = Partial<CreateInstitutionInput>;

export interface GetInstitutionOptions {
	includeDeleted?: boolean;
}
