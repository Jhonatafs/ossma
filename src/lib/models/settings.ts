import type { EntityId, IsoDateTimeString } from './shared';

export type Locale = 'pt-BR' | 'en';

export type Settings = {
	id: EntityId;
	locale: Locale;
	defaultProfessionalId?: EntityId;
	dateFormat?: string;
	timeFormat?: string;
	defaultCountry?: string;
	defaultPhoneCountryCode?: string;
	lastBackupAt?: IsoDateTimeString;
	createdAt: IsoDateTimeString;
	updatedAt: IsoDateTimeString;
};
