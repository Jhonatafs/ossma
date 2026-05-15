import { describe, expect, it } from 'vitest';

import {
	getDefaultInterfacePreferences,
	normalizeInterfacePreferences,
	normalizeLanguage,
	normalizeTheme
} from './interface-preferences';

describe('interface preferences', () => {
	it('defines default interface preferences', () => {
		expect(getDefaultInterfacePreferences()).toEqual({
			language: 'en',
			theme: 'light'
		});
	});

	it('normalizes supported languages', () => {
		expect(normalizeLanguage('en')).toBe('en');
		expect(normalizeLanguage('pt-BR')).toBe('pt-BR');
	});

	it('falls back to the default language for unsupported values', () => {
		expect(normalizeLanguage('es')).toBe('en');
		expect(normalizeLanguage(null)).toBe('en');
	});

	it('normalizes supported themes', () => {
		expect(normalizeTheme('light')).toBe('light');
		expect(normalizeTheme('dark')).toBe('dark');
	});

	it('falls back to the default theme for unsupported values', () => {
		expect(normalizeTheme('system')).toBe('light');
		expect(normalizeTheme(undefined)).toBe('light');
	});

	it('normalizes partially invalid preferences', () => {
		expect(
			normalizeInterfacePreferences({
				language: 'pt-BR',
				theme: 'system'
			})
		).toEqual({
			language: 'pt-BR',
			theme: 'light'
		});
	});

	it('preserves complete valid preferences', () => {
		expect(
			normalizeInterfacePreferences({
				language: 'pt-BR',
				theme: 'dark'
			})
		).toEqual({
			language: 'pt-BR',
			theme: 'dark'
		});
	});
});
