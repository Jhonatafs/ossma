import type { IconName } from '$lib/shared/components/icons/icon-types';

export type DesktopNavigationPosition = 'side';

export type NavigationMessageKey =
	| 'nav_home'
	| 'nav_clients'
	| 'nav_assessments'
	| 'nav_profile'
	| 'nav_backups'
	| 'nav_faqs'
	| 'nav_documentation'
	| 'nav_settings'
	| 'nav_more';

export type NavigationDescriptionMessageKey =
	| 'home_description'
	| 'page_clients_description'
	| 'page_assessments_description'
	| 'page_profile_description'
	| 'page_backups_description'
	| 'page_faqs_description'
	| 'page_docs_description'
	| 'page_settings_description';

export type NavigationItem = {
	id: string;
	href: string;
	icon: IconName;
	labelKey: NavigationMessageKey;
	descriptionKey: NavigationDescriptionMessageKey;
};

export const DEFAULT_DESKTOP_NAVIGATION_POSITION: DesktopNavigationPosition = 'side';

export const NAVIGATION_ITEMS = [
	{
		id: 'home',
		href: '/',
		icon: 'home',
		labelKey: 'nav_home',
		descriptionKey: 'home_description'
	},
	{
		id: 'clients',
		href: '/clients',
		icon: 'users',
		labelKey: 'nav_clients',
		descriptionKey: 'page_clients_description'
	},
	{
		id: 'profile',
		href: '/profile',
		icon: 'user-round',
		labelKey: 'nav_profile',
		descriptionKey: 'page_profile_description'
	},
	{
		id: 'backups',
		href: '/backups',
		icon: 'archive',
		labelKey: 'nav_backups',
		descriptionKey: 'page_backups_description'
	},
	{
		id: 'faqs',
		href: '/faqs',
		icon: 'circle-help',
		labelKey: 'nav_faqs',
		descriptionKey: 'page_faqs_description'
	},
	{
		id: 'docs',
		href: '/docs',
		icon: 'book-open',
		labelKey: 'nav_documentation',
		descriptionKey: 'page_docs_description'
	},
	{
		id: 'settings',
		href: '/settings',
		icon: 'settings',
		labelKey: 'nav_settings',
		descriptionKey: 'page_settings_description'
	}
] as const satisfies readonly NavigationItem[];

export const MAIN_AREA_NAVIGATION_ITEMS = NAVIGATION_ITEMS.filter((item) => item.id !== 'home');

export const MOBILE_PRIMARY_NAVIGATION_ITEMS = [
	NAVIGATION_ITEMS[0],
	NAVIGATION_ITEMS[1],
	{
		id: 'assessments',
		href: '/assessments',
		icon: 'clipboard-check',
		labelKey: 'nav_assessments',
		descriptionKey: 'page_assessments_description'
	},
	NAVIGATION_ITEMS[2]
] as const satisfies readonly NavigationItem[];

export const MOBILE_MORE_NAVIGATION_ITEMS = NAVIGATION_ITEMS.filter((item) =>
	['backups', 'faqs', 'docs', 'settings'].includes(item.id)
);
