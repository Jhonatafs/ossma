import { describe, expect, it } from 'vitest';

import { MAIN_AREA_NAVIGATION_ITEMS, NAVIGATION_ITEMS } from './navigation';

describe('NAVIGATION_ITEMS', () => {
	it('defines the main navigation routes', () => {
		expect(NAVIGATION_ITEMS.map((item) => item.href)).toEqual([
			'/',
			'/clients',
			'/profile',
			'/backups',
			'/faqs',
			'/docs',
			'/settings'
		]);
	});

	it('defines labels for every navigation item', () => {
		expect(NAVIGATION_ITEMS.every((item) => Boolean(item.labelKey))).toBe(true);
	});

	it('defines icons for every navigation item', () => {
		expect(NAVIGATION_ITEMS.every((item) => Boolean(item.icon))).toBe(true);
	});

	it('defines descriptions for every navigation item', () => {
		expect(NAVIGATION_ITEMS.every((item) => Boolean(item.descriptionKey))).toBe(true);
	});

	it('defines hrefs for every navigation item', () => {
		expect(NAVIGATION_ITEMS.every((item) => item.href.startsWith('/'))).toBe(true);
	});

	it('uses internal destinations as home main areas', () => {
		expect(MAIN_AREA_NAVIGATION_ITEMS.map((item) => item.id)).toEqual([
			'clients',
			'profile',
			'backups',
			'faqs',
			'docs',
			'settings'
		]);
	});
});
