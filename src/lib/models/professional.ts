import type { ArchivableStatus, EntityId, IsoDateTimeString, Phone } from './shared';

export type ProfessionalStatus = ArchivableStatus;

export type ProfessionalRegistration = {
	organization?: string;
	number?: string;
	country?: string;
	region?: string;
	category?: string;
	showInReports: boolean;
};

export type Professional = {
	id: EntityId;
	localIdentifier: string;
	fullName: string;
	displayName: string;
	professionName: string;
	professionalTitle: string;
	registration?: ProfessionalRegistration;
	phone?: Phone;
	email?: string;
	status: ProfessionalStatus;
	createdAt: IsoDateTimeString;
	updatedAt: IsoDateTimeString;
};
