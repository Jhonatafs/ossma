import { describe, expect, it } from 'vitest';
import { DATABASE_NAME, DATABASE_VERSION, TABLE_NAMES, VERSION_1_STORES } from './schema';

describe('database schema', () => {
	it('defines the initial OSSMA database stores', () => {
		expect(DATABASE_NAME).toBe('ossma_local_db');
		expect(DATABASE_VERSION).toBe(1);
		expect(Object.keys(VERSION_1_STORES)).toEqual(Object.values(TABLE_NAMES));
		expect(VERSION_1_STORES).toHaveProperty('professionals');
		expect(VERSION_1_STORES).toHaveProperty('clients');
		expect(VERSION_1_STORES).toHaveProperty('assessments');
		expect(VERSION_1_STORES).toHaveProperty('settings');
	});
});
