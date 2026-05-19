export interface CreateProfessionalInput {
	fullName: string;
	displayName?: string;
	profession?: string;
	education?: string;
	specialty?: string;
	professionalRegistry?: string;
	phone?: string;
	email?: string;
	address?: string;
	logoUri?: string;
	signatureUri?: string;
	notes?: string;
	isActive?: boolean;
}

export type UpdateProfessionalPatch = Partial<CreateProfessionalInput>;

export interface GetProfessionalOptions {
	includeDeleted?: boolean;
}
