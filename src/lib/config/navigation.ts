export type DesktopNavigationPosition = 'top';

export type NavigationMessageKey =
	| 'nav_home'
	| 'nav_clients'
	| 'nav_profile'
	| 'nav_backups'
	| 'nav_faqs'
	| 'nav_documentation'
	| 'nav_settings';

export type NavigationDescriptionMessageKey =
	| 'home_description'
	| 'page_clients_description'
	| 'page_profile_description'
	| 'page_backups_description'
	| 'page_faqs_description'
	| 'page_docs_description'
	| 'page_settings_description';

export type NavigationItem = {
	id: string;
	href: string;
	icon: string;
	labelKey: NavigationMessageKey;
	descriptionKey: NavigationDescriptionMessageKey;
};

export const DEFAULT_DESKTOP_NAVIGATION_POSITION: DesktopNavigationPosition = 'top';

export const NAVIGATION_ITEMS = [
	{
		id: 'home',
		href: '/',
		icon: '⌂',
		labelKey: 'nav_home',
		descriptionKey: 'home_description'
	},
	{
		id: 'clients',
		href: '/clients',
		icon: '◉',
		labelKey: 'nav_clients',
		descriptionKey: 'page_clients_description'
	},
	{
		id: 'profile',
		href: '/profile',
		icon: '◌',
		labelKey: 'nav_profile',
		descriptionKey: 'page_profile_description'
	},
	{
		id: 'backups',
		href: '/backups',
		icon: '⇅',
		labelKey: 'nav_backups',
		descriptionKey: 'page_backups_description'
	},
	{
		id: 'faqs',
		href: '/faqs',
		icon: '?',
		labelKey: 'nav_faqs',
		descriptionKey: 'page_faqs_description'
	},
	{
		id: 'docs',
		href: '/docs',
		icon: '§',
		labelKey: 'nav_documentation',
		descriptionKey: 'page_docs_description'
	},
	{
		id: 'settings',
		href: '/settings',
		icon: '⚙',
		labelKey: 'nav_settings',
		descriptionKey: 'page_settings_description'
	}
] as const satisfies readonly NavigationItem[];

export const MAIN_AREA_NAVIGATION_ITEMS = NAVIGATION_ITEMS.filter((item) => item.id !== 'home');
