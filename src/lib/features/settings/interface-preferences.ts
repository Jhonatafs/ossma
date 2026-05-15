import { browser } from '$app/environment';
import { setLocale } from '$lib/paraglide/runtime';
import { APP_CONFIG, type SupportedLanguage, type SupportedTheme } from '$lib/config/app';

export type ParaglideLocale = 'en' | 'pt-br';

export type UserInterfacePreferences = {
	language: SupportedLanguage;
	theme: SupportedTheme;
};

export const INTERFACE_PREFERENCES_STORAGE_KEY = 'ossma.interfacePreferences';

export function getDefaultInterfacePreferences(): UserInterfacePreferences {
	return {
		language: APP_CONFIG.defaultLanguage,
		theme: APP_CONFIG.defaultTheme
	};
}

export function normalizeLanguage(value: unknown): SupportedLanguage {
	if (value === 'en') {
		return 'en';
	}

	if (value === 'pt-BR' || value === 'pt-br') {
		return 'pt-BR';
	}

	return getDefaultInterfacePreferences().language;
}

export function normalizeTheme(value: unknown): SupportedTheme {
	if (value === 'light' || value === 'dark') {
		return value;
	}

	return getDefaultInterfacePreferences().theme;
}

export function normalizeInterfacePreferences(value: unknown): UserInterfacePreferences {
	const defaults = getDefaultInterfacePreferences();

	if (!value || typeof value !== 'object') {
		return defaults;
	}

	const preferences = value as Partial<UserInterfacePreferences>;

	return {
		language: normalizeLanguage(preferences.language),
		theme: normalizeTheme(preferences.theme)
	};
}

export function toParaglideLocale(language: SupportedLanguage): ParaglideLocale {
	return language === 'pt-BR' ? 'pt-br' : 'en';
}

export function loadInterfacePreferences(): UserInterfacePreferences {
	if (!browser) {
		return getDefaultInterfacePreferences();
	}

	try {
		const storedPreferences = localStorage.getItem(INTERFACE_PREFERENCES_STORAGE_KEY);

		if (!storedPreferences) {
			return getDefaultInterfacePreferences();
		}

		return normalizeInterfacePreferences(JSON.parse(storedPreferences));
	} catch {
		return getDefaultInterfacePreferences();
	}
}

export function saveInterfacePreferences(
	preferences: UserInterfacePreferences
): UserInterfacePreferences {
	const normalizedPreferences = normalizeInterfacePreferences(preferences);

	if (browser) {
		localStorage.setItem(INTERFACE_PREFERENCES_STORAGE_KEY, JSON.stringify(normalizedPreferences));
	}

	return normalizedPreferences;
}

export function applyTheme(theme: SupportedTheme): SupportedTheme {
	const normalizedTheme = normalizeTheme(theme);

	if (browser) {
		document.documentElement.dataset.theme = normalizedTheme;
	}

	return normalizedTheme;
}

export function applyLanguage(language: SupportedLanguage): SupportedLanguage {
	const normalizedLanguage = normalizeLanguage(language);

	if (browser) {
		setLocale(toParaglideLocale(normalizedLanguage), { reload: false });
		document.documentElement.lang = normalizedLanguage;
		document.documentElement.dir = 'ltr';
	}

	return normalizedLanguage;
}

export function applyInterfacePreferences(
	preferences: UserInterfacePreferences
): UserInterfacePreferences {
	const normalizedPreferences = normalizeInterfacePreferences(preferences);

	applyLanguage(normalizedPreferences.language);
	applyTheme(normalizedPreferences.theme);

	return normalizedPreferences;
}

export function updateInterfacePreferences(
	partialPreferences: Partial<UserInterfacePreferences>
): UserInterfacePreferences {
	const preferences = normalizeInterfacePreferences({
		...loadInterfacePreferences(),
		...partialPreferences
	});

	saveInterfacePreferences(preferences);
	applyInterfacePreferences(preferences);

	return preferences;
}
