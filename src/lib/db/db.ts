import Dexie, { type Table } from 'dexie';
import type { Assessment } from '$lib/models/assessment';
import type { Client } from '$lib/models/client';
import type { Professional } from '$lib/models/professional';
import type { Settings } from '$lib/models/settings';
import type { EntityId } from '$lib/models/shared';
import { DATABASE_NAME, DATABASE_VERSION, VERSION_1_STORES } from './schema';

export class OssmaDatabase extends Dexie {
	professionals!: Table<Professional, EntityId>;
	clients!: Table<Client, EntityId>;
	assessments!: Table<Assessment, EntityId>;
	settings!: Table<Settings, EntityId>;

	constructor() {
		super(DATABASE_NAME);
		this.version(DATABASE_VERSION).stores(VERSION_1_STORES);
	}
}

export const db = new OssmaDatabase();
