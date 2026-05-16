import type { SupportedLanguage } from '$lib/config/app';
import {
	toParaglideLocale,
	type ParaglideLocale
} from '$lib/features/settings/interface-preferences';

export type StaticMessage = (
	inputs?: Record<string, never>,
	options?: { locale?: ParaglideLocale }
) => string;

export function translate(message: StaticMessage, language: SupportedLanguage): string {
	return message({}, { locale: toParaglideLocale(language) });
}
