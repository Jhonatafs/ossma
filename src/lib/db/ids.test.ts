import { describe, expect, it } from 'vitest';

import { createEntityId } from './ids';

describe('createEntityId', () => {
	it('returns a non-empty string', () => {
		const id = createEntityId();

		expect(typeof id).toBe('string');
		expect(id.length).toBeGreaterThan(0);
	});

	it('creates different IDs in sequence', () => {
		const firstId = createEntityId();
		const secondId = createEntityId();

		expect(secondId).not.toBe(firstId);
	});
});
