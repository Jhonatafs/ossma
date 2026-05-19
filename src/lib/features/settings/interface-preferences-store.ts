import { get, writable } from 'svelte/store';

import type { SupportedLanguage, SupportedTheme } from '$lib/config/app';
import type { EntityId } from '$lib/db/types';

import {
	applyInterfacePreferences,
	getDefaultInterfacePreferences,
	loadInterfacePreferences,
	updateInterfacePreferences,
	type MenuLabelMode,
	type UserInterfacePreferences
} from './interface-preferences';

export const interfacePreferences = writable<UserInterfacePreferences>(
	getDefaultInterfacePreferences()
);

export function initializeInterfacePreferences(): UserInterfacePreferences {
	const preferences = loadInterfacePreferences();

	interfacePreferences.set(preferences);
	applyInterfacePreferences(preferences);

	return preferences;
}

export function setInterfaceLanguage(language: SupportedLanguage): UserInterfacePreferences {
	const preferences = updateInterfacePreferences({
		...get(interfacePreferences),
		language
	});

	interfacePreferences.set(preferences);

	return preferences;
}

export function setInterfaceTheme(theme: SupportedTheme): UserInterfacePreferences {
	const preferences = updateInterfacePreferences({
		...get(interfacePreferences),
		theme
	});

	interfacePreferences.set(preferences);

	return preferences;
}

export function setMenuLabelMode(menuLabelMode: MenuLabelMode): UserInterfacePreferences {
	const preferences = updateInterfacePreferences({
		...get(interfacePreferences),
		menuLabelMode
	});

	interfacePreferences.set(preferences);

	return preferences;
}

export function setActiveProfessionalId(activeProfessionalId?: EntityId): UserInterfacePreferences {
	const preferences = updateInterfacePreferences({
		...get(interfacePreferences),
		activeProfessionalId
	});

	interfacePreferences.set(preferences);

	return preferences;
}

export function setActiveInstitutionId(activeInstitutionId?: EntityId): UserInterfacePreferences {
	const preferences = updateInterfacePreferences({
		...get(interfacePreferences),
		activeInstitutionId
	});

	interfacePreferences.set(preferences);

	return preferences;
}
