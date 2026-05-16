import { describe, expect, it } from 'vitest';

import {
	getDefaultInterfacePreferences,
	normalizeInterfacePreferences,
	normalizeLanguage,
	normalizeMenuLabelMode,
	normalizeTheme
} from './interface-preferences';

describe('interface preferences', () => {
	it('defines default interface preferences', () => {
		expect(getDefaultInterfacePreferences()).toEqual({
			language: 'en',
			theme: 'light',
			menuLabelMode: 'iconAndText'
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
		expect(normalizeTheme('dracula')).toBe('dracula');
		expect(normalizeTheme('gruvbox')).toBe('gruvbox');
	});

	it('falls back to the default theme for unsupported values', () => {
		expect(normalizeTheme('system')).toBe('light');
		expect(normalizeTheme(undefined)).toBe('light');
	});

	it('normalizes supported menu label modes', () => {
		expect(normalizeMenuLabelMode('iconAndText')).toBe('iconAndText');
		expect(normalizeMenuLabelMode('iconOnly')).toBe('iconOnly');
	});

	it('falls back to the default menu label mode for unsupported values', () => {
		expect(normalizeMenuLabelMode('textOnly')).toBe('iconAndText');
		expect(normalizeMenuLabelMode(undefined)).toBe('iconAndText');
	});

	it('adds the default menu label mode to older preferences', () => {
		expect(
			normalizeInterfacePreferences({
				language: 'pt-BR',
				theme: 'dark'
			})
		).toEqual({
			language: 'pt-BR',
			theme: 'dark',
			menuLabelMode: 'iconAndText'
		});
	});

	it('normalizes partially invalid preferences', () => {
		expect(
			normalizeInterfacePreferences({
				language: 'pt-BR',
				theme: 'system',
				menuLabelMode: 'textOnly'
			})
		).toEqual({
			language: 'pt-BR',
			theme: 'light',
			menuLabelMode: 'iconAndText'
		});
	});

	it('preserves complete valid preferences', () => {
		expect(
			normalizeInterfacePreferences({
				language: 'pt-BR',
				theme: 'gruvbox',
				menuLabelMode: 'iconOnly'
			})
		).toEqual({
			language: 'pt-BR',
			theme: 'gruvbox',
			menuLabelMode: 'iconOnly'
		});
	});
});
