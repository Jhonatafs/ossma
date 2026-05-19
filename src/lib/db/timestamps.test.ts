import { describe, expect, it } from 'vitest';

import { createBaseEntityFields, createTimestamp, touchEntity } from './timestamps';
import type { BaseEntity } from './types';

describe('timestamp utilities', () => {
	it('creates ISO timestamps', () => {
		const timestamp = createTimestamp(new Date('2026-05-18T12:00:00.000Z'));

		expect(timestamp).toBe('2026-05-18T12:00:00.000Z');
		expect(Number.isNaN(Date.parse(timestamp))).toBe(false);
	});

	it('creates base entity fields', () => {
		const fields = createBaseEntityFields('2026-05-18T12:00:00.000Z');

		expect(fields.id).toBeTruthy();
		expect(fields.createdAt).toBe('2026-05-18T12:00:00.000Z');
		expect(fields.updatedAt).toBe('2026-05-18T12:00:00.000Z');
	});

	it('touches an entity without changing createdAt', () => {
		const entity: BaseEntity = {
			id: 'client-1',
			createdAt: '2026-05-18T12:00:00.000Z',
			updatedAt: '2026-05-18T12:00:00.000Z'
		};

		const touchedEntity = touchEntity(entity, '2026-05-18T12:05:00.000Z');

		expect(touchedEntity.id).toBe(entity.id);
		expect(touchedEntity.createdAt).toBe(entity.createdAt);
		expect(touchedEntity.updatedAt).toBe('2026-05-18T12:05:00.000Z');
	});
});
