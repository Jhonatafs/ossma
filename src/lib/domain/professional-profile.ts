import type { EntityId, EntityTimestamps, ImageReference, PhoneContact } from './shared';

export type ProfessionalContact = PhoneContact & {
	email: string;
	websiteOrPortfolio?: string;
};

export type ProfessionalReportStampData = {
	useContactDataInReports: boolean;
	showPhoneInReports?: boolean;
	showMessagingAppPhoneInReports?: boolean;
	showEmailInReports?: boolean;
	showWebsiteOrPortfolioInReports?: boolean;
	reportStampNote?: string;
};

export type ProfessionalProfile = EntityTimestamps & {
	id: EntityId;
	fullName: string;
	professionalName?: string;
	profession: string;
	professionalRegistry: string;
	registryRegion?: string;
	shortBio?: string;
	contact: ProfessionalContact;
	linkedInstitutionId?: EntityId;
	reportStampData: ProfessionalReportStampData;
	professionalImage?: ImageReference;
	technicalResponsibilityConfirmed: boolean;
};
