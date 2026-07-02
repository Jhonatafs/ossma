import type {
	ArchivableStatus,
	DateOnlyString,
	EntityId,
	IsoDateTimeString,
	Phone
} from './shared';

export type ClientStatus = ArchivableStatus;
export type BiologicalSex = 'male' | 'female';

export type EmergencyContact = {
	fullName: string;
	relationship?: string;
	phone: Phone;
};

export type LegalGuardian = {
	fullName: string;
	relationship?: string;
	phone?: Phone;
	reason?: string;
};

export type Client = {
	id: EntityId;
	fullName: string;
	dateOfBirth: DateOnlyString;
	biologicalSex: BiologicalSex;
	primaryPhone: Phone;
	email?: string;
	emergencyContact?: EmergencyContact;
	legalGuardian?: LegalGuardian;
	status: ClientStatus;
	createdAt: IsoDateTimeString;
	updatedAt: IsoDateTimeString;
};
