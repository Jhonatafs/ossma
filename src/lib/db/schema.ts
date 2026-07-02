export const DATABASE_NAME = 'ossma_local_db';
export const DATABASE_VERSION = 1;

export const TABLE_NAMES = {
	professionals: 'professionals',
	clients: 'clients',
	assessments: 'assessments',
	settings: 'settings'
} as const;

export const VERSION_1_STORES = {
	[TABLE_NAMES.professionals]: 'id, localIdentifier, status, createdAt, updatedAt',
	[TABLE_NAMES.clients]: 'id, fullName, status, createdAt, updatedAt',
	[TABLE_NAMES.assessments]: 'id, clientId, professionalId, status, type, evaluatedAt, updatedAt',
	[TABLE_NAMES.settings]: 'id'
} as const;
