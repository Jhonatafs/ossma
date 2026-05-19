export type EntityId = string;

export interface BaseEntity {
	id: EntityId;
	createdAt: string;
	updatedAt: string;
	deletedAt?: string;
}

export interface AuditableEntity extends BaseEntity {
	createdByProfessionalId?: EntityId;
	updatedByProfessionalId?: EntityId;
}

export interface MeasurementValue {
	value: number;
	unit: string;
}

export interface LocalizedText {
	en: string;
	'pt-BR': string;
}

export interface AppMetadata extends BaseEntity {
	key: string;
	value: unknown;
}

export interface Professional extends BaseEntity {
	fullName: string;
	displayName?: string;
	profession?: string;
	education?: string;
	specialty?: string;
	professionalRegistry?: string;
	phone?: string;
	email?: string;
	address?: string;
	logoUri?: string;
	signatureUri?: string;
	notes?: string;
	isActive?: boolean;
}

export interface Institution extends BaseEntity {
	name: string;
	tradeName?: string;
	document?: string;
	phone?: string;
	email?: string;
	address?: string;
	logoUri?: string;
	footerText?: string;
	notes?: string;
	isActive?: boolean;
}

export type BiologicalSex = 'female' | 'male' | 'other' | 'notInformed';

export interface LegalGuardian {
	fullName: string;
	relationship?: string;
	phone?: string;
	document?: string;
	notes?: string;
}

export interface Client extends BaseEntity {
	fullName: string;
	preferredName?: string;
	birthDate?: string;
	biologicalSex?: BiologicalSex;
	phone?: string;
	email?: string;
	document?: string;
	address?: string;
	occupation?: string;
	legalGuardian?: LegalGuardian;
	notes?: string;
}

export interface Anamnesis extends BaseEntity {
	clientId: EntityId;
	chiefComplaint?: string;
	healthHistory?: string;
	injuryHistory?: string;
	surgeryHistory?: string;
	medicationHistory?: string;
	familyHistory?: string;
	lifestyleHabits?: string;
	physicalActivityHistory?: string;
	dietaryNotes?: string;
	sleepNotes?: string;
	occupationalNotes?: string;
	goals?: string;
	restrictions?: string;
	generalNotes?: string;
}

export interface AnamnesisHistoryEntry extends BaseEntity {
	anamnesisId: EntityId;
	clientId: EntityId;
	changedByProfessionalId?: EntityId;
	changedAt: string;
	changeReason?: string;
	snapshot: Partial<Anamnesis>;
}

export type EvaluationType = 'postural' | 'anthropometric' | 'nutritional' | 'kinanthropometric';

export type EvaluationStatus = 'draft' | 'completed' | 'issued' | 'archived';

export interface ComputedResult {
	id: EntityId;
	key: string;
	label: string;
	value: number | string | boolean | null;
	unit?: string;
	formulaId?: string;
	formulaVersion?: string;
	protocolId?: string;
	protocolVersion?: string;
	inputs?: Record<string, unknown>;
	warnings?: string[];
	computedAt: string;
}

export interface Evaluation extends BaseEntity {
	clientId: EntityId;
	professionalId: EntityId;
	institutionId?: EntityId;
	type: EvaluationType;
	status: EvaluationStatus;
	evaluationDate: string;
	rawData: unknown;
	computedResults?: ComputedResult[];
	professionalInterpretation?: string;
	recommendations?: string;
	notes?: string;
}

export interface Report extends BaseEntity {
	evaluationId: EntityId;
	clientId: EntityId;
	professionalId: EntityId;
	institutionId?: EntityId;
	reportType: EvaluationType;
	issueDate: string;
	title?: string;
	technicalDisclaimer: string;
	snapshotId?: EntityId;
	pdfUri?: string;
	notes?: string;
}

export interface ReportSnapshot extends BaseEntity {
	reportId: EntityId;
	evaluationId: EntityId;
	clientData: unknown;
	professionalData: unknown;
	institutionData?: unknown;
	rawData: unknown;
	computedResults?: ComputedResult[];
	professionalInterpretation?: string;
	recommendations?: string;
	protocolVersions?: Record<string, string>;
	appVersion: string;
}

export type BackupOperation = 'export' | 'import';

export interface BackupMetadata extends BaseEntity {
	operation: BackupOperation;
	fileName?: string;
	formatVersion: string;
	appVersion: string;
	databaseVersion: number;
	performedAt: string;
	notes?: string;
}
