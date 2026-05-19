export const DATABASE_NAME = 'ossma-local-database';
export const DATABASE_VERSION = 1;

export const DATABASE_STORES = {
	appMetadata: 'appMetadata',
	professionals: 'professionals',
	institutions: 'institutions',
	clients: 'clients',
	anamneses: 'anamneses',
	anamnesisHistory: 'anamnesisHistory',
	evaluations: 'evaluations',
	reports: 'reports',
	reportSnapshots: 'reportSnapshots',
	backupMetadata: 'backupMetadata'
} as const;

export const DATABASE_SCHEMA_VERSION_1 = {
	appMetadata: 'id, key',
	professionals: 'id, fullName, isActive, createdAt, updatedAt',
	institutions: 'id, name, tradeName, isActive, createdAt, updatedAt',
	clients: 'id, fullName, birthDate, createdAt, updatedAt',
	anamneses: 'id, clientId, updatedAt',
	anamnesisHistory: 'id, anamnesisId, clientId, changedAt',
	evaluations:
		'id, clientId, professionalId, institutionId, type, status, evaluationDate, createdAt, updatedAt, [clientId+type], [clientId+evaluationDate]',
	reports:
		'id, evaluationId, clientId, professionalId, institutionId, reportType, issueDate, createdAt',
	reportSnapshots: 'id, reportId, evaluationId, createdAt',
	backupMetadata: 'id, operation, performedAt, createdAt'
} as const;
