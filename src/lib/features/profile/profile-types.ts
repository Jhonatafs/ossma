import type { ContactType } from '$lib/db/types';
import * as m from '$lib/paraglide/messages';
import type { StaticMessage } from '$lib/shared/utils/i18n';

export const CONTACT_TYPE_OPTIONS = [
	{ value: 'phone', label: m.contact_phone },
	{ value: 'email', label: m.contact_email },
	{ value: 'website', label: m.contact_website },
	{ value: 'instagram', label: m.contact_instagram },
	{ value: 'linkedin', label: m.contact_linkedin },
	{ value: 'whatsapp', label: m.contact_whatsapp },
	{ value: 'telegram', label: m.contact_telegram },
	{ value: 'facebook', label: m.contact_facebook },
	{ value: 'youtube', label: m.contact_youtube },
	{ value: 'other', label: m.contact_other }
] as const satisfies readonly { value: ContactType; label: StaticMessage }[];

export function getContactTypeMessage(type: ContactType): StaticMessage {
	return CONTACT_TYPE_OPTIONS.find((option) => option.value === type)?.label ?? m.contact_other;
}

export function getInitials(value: string): string {
	const words = value.trim().split(/\s+/).filter(Boolean);

	if (words.length === 0) {
		return 'OS';
	}

	return words
		.slice(0, 2)
		.map((word) => word[0]?.toUpperCase())
		.join('');
}
