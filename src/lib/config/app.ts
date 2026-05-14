export type SupportedLanguage = 'en' | 'pt-BR';

export type SupportedTheme = 'light' | 'dark';

export type EvaluatedPersonTerm = 'client' | 'student' | 'patient' | 'athlete' | 'evaluated';

type AppConfig = {
	name: string;
	shortName: string;
	description: string;
	version: string;
	supportedLanguages: readonly SupportedLanguage[];
	defaultLanguage: SupportedLanguage;
	supportedThemes: readonly SupportedTheme[];
	defaultTheme: SupportedTheme;
	defaultEvaluatedPersonTerm: EvaluatedPersonTerm;
};

export const APP_CONFIG = {
	name: 'OSSMA',
	shortName: 'OSSMA',
	description: 'Offline-first professional assessment app for sport and health professionals.',
	version: '0.0.1',
	supportedLanguages: ['en', 'pt-BR'],
	defaultLanguage: 'en',
	supportedThemes: ['light', 'dark'],
	defaultTheme: 'light',
	defaultEvaluatedPersonTerm: 'client'
} as const satisfies AppConfig;
