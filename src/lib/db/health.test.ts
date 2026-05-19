import { describe, expect, it, vi } from 'vitest';

import { checkDatabaseHealth, type DatabaseHealthConnection } from './health';
import { DATABASE_NAME, DATABASE_VERSION } from './schema';

describe('checkDatabaseHealth', () => {
	it('returns a successful result when the database opens', async () => {
		const close = vi.fn();
		const database: DatabaseHealthConnection = {
			open: () => Promise.resolve(),
			close
		};

		const result = await checkDatabaseHealth(database);

		expect(result).toEqual({
			ok: true,
			databaseName: DATABASE_NAME,
			databaseVersion: DATABASE_VERSION
		});
		expect(close).toHaveBeenCalledTimes(1);
	});

	it('returns a failed result when the database cannot open', async () => {
		const close = vi.fn();
		const database: DatabaseHealthConnection = {
			open: () => Promise.reject(new Error('IndexedDB unavailable')),
			close
		};

		const result = await checkDatabaseHealth(database);

		expect(result).toEqual({
			ok: false,
			databaseName: DATABASE_NAME,
			databaseVersion: DATABASE_VERSION,
			message: 'IndexedDB unavailable'
		});
		expect(close).toHaveBeenCalledTimes(1);
	});
});
