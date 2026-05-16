import { describe, expect, it } from 'vitest';

import { APP_CONFIG } from './app';

describe('APP_CONFIG', () => {
	it('defines the application identity', () => {
		expect(APP_CONFIG.name).toBe('OSSMA');
		expect(APP_CONFIG.shortName).toBeTruthy();
		expect(APP_CONFIG.description).toContain('Offline-first');
	});

	it('defines default localization settings', () => {
		expect(APP_CONFIG.defaultLanguage).toBe('en');
		expect(APP_CONFIG.supportedLanguages).toContain('en');
		expect(APP_CONFIG.supportedLanguages).toContain('pt-BR');
	});

	it('defines default theme settings', () => {
		expect(APP_CONFIG.defaultTheme).toBe('light');
		expect(APP_CONFIG.supportedThemes).toContain('light');
		expect(APP_CONFIG.supportedThemes).toContain('dark');
		expect(APP_CONFIG.supportedThemes).toContain('dracula');
		expect(APP_CONFIG.supportedThemes).toContain('gruvbox');
	});

	it('defines the default evaluated person term', () => {
		expect(APP_CONFIG.defaultEvaluatedPersonTerm).toBe('client');
	});
});
