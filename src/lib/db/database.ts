import Dexie, { type Table } from 'dexie';

import { DATABASE_NAME, DATABASE_SCHEMA_VERSION_1, DATABASE_VERSION } from './schema';
import type {
	Anamnesis,
	AnamnesisHistoryEntry,
	AppMetadata,
	BackupMetadata,
	Client,
	EntityId,
	Evaluation,
	Institution,
	Professional,
	Report,
	ReportSnapshot
} from './types';

export class OssmaDatabase extends Dexie {
	appMetadata!: Table<AppMetadata, EntityId>;
	professionals!: Table<Professional, EntityId>;
	institutions!: Table<Institution, EntityId>;
	clients!: Table<Client, EntityId>;
	anamneses!: Table<Anamnesis, EntityId>;
	anamnesisHistory!: Table<AnamnesisHistoryEntry, EntityId>;
	evaluations!: Table<Evaluation, EntityId>;
	reports!: Table<Report, EntityId>;
	reportSnapshots!: Table<ReportSnapshot, EntityId>;
	backupMetadata!: Table<BackupMetadata, EntityId>;

	constructor() {
		super(DATABASE_NAME);

		this.version(DATABASE_VERSION).stores(DATABASE_SCHEMA_VERSION_1);
	}
}

export const db = new OssmaDatabase();
