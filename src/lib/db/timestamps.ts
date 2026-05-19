import type { BaseEntity } from './types';
import { createEntityId } from './ids';

export type BaseEntityFields = Pick<BaseEntity, 'id' | 'createdAt' | 'updatedAt'>;

export function createTimestamp(date = new Date()): string {
	return date.toISOString();
}

export function createBaseEntityFields(timestamp = createTimestamp()): BaseEntityFields {
	return {
		id: createEntityId(),
		createdAt: timestamp,
		updatedAt: timestamp
	};
}

export function touchEntity<T extends BaseEntity>(entity: T, timestamp = createTimestamp()): T {
	return {
		...entity,
		updatedAt: timestamp
	};
}
