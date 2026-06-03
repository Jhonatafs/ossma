export type EntityId = string;

// Stored as YYYY-MM-DD.
export type ISODateString = string;

// Stored as an ISO 8601 date-time string.
export type ISODateTimeString = string;

export type YesNoAnswer = 'yes' | 'no';

export type YesNoUnknownAnswer = YesNoAnswer | 'unknown';

export type PhoneContact = {
	phone: string;
	primaryPhoneUsedForMessagingApps: boolean;
	messagingAppPhone?: string;
};

export type ImageReference = {
	id?: EntityId;
	fileName: string;
	mimeType: string;
	sizeInBytes: number;
	altText?: string;
	createdAt?: ISODateTimeString;
};

export type Address = {
	streetAddress?: string;
	addressNumber?: string;
	addressComplement?: string;
	neighborhood?: string;
	city?: string;
	stateOrRegion?: string;
	postalCode?: string;
	country?: string;
};

export type EntityTimestamps = {
	createdAt: ISODateTimeString;
	updatedAt: ISODateTimeString;
};
