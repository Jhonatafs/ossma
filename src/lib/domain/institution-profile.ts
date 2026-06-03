import type { Address, EntityId, EntityTimestamps, ImageReference, PhoneContact } from './shared';

export type InstitutionType = 'gym' | 'clinic' | 'sports-center' | 'studio' | 'school' | 'other';

export type InstitutionContact = PhoneContact & {
	email?: string;
	websiteOrSocialPage?: string;
};

export type InstitutionAddress = Address & {
	city: string;
	country: string;
};

export type InstitutionReportHeaderData = {
	useInstitutionDataInReportHeaders: boolean;
	showDisplayNameInReports?: boolean;
	showLegalNameInReports?: boolean;
	showPhoneInReports?: boolean;
	showMessagingAppPhoneInReports?: boolean;
	showEmailInReports?: boolean;
	showWebsiteOrSocialPageInReports?: boolean;
	showAddressInReports?: boolean;
	reportHeaderNote?: string;
};

export type InstitutionProfile = EntityTimestamps & {
	id: EntityId;
	legalName: string;
	displayName: string;
	institutionType: InstitutionType;
	otherInstitutionType?: string;
	businessRegistrationNumber?: string;
	shortDescription?: string;
	contact: InstitutionContact;
	address: InstitutionAddress;
	reportHeaderData: InstitutionReportHeaderData;
	institutionLogo?: ImageReference;
	institutionInformationConfirmed: boolean;
};
