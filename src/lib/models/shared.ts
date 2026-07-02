export type EntityId = string;

/** Calendar date without time or timezone, formatted as YYYY-MM-DD. */
export type DateOnlyString = string;

/** ISO 8601 date and time stored in UTC. */
export type IsoDateTimeString = string;

export type ArchivableStatus = 'active' | 'archived';

export type Phone = {
	countryCode: string;
	areaCode: string;
	number: string;
	clean: string;
};
