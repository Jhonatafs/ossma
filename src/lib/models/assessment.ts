import type { EntityId, IsoDateTimeString } from './shared';

export type AssessmentType = 'basicAnthropometric';
export type AssessmentStatus = 'draft' | 'completed' | 'voided';

export type Assessment = {
	id: EntityId;
	type: AssessmentType;
	clientId: EntityId;
	professionalId: EntityId;
	status: AssessmentStatus;
	evaluatedAt: IsoDateTimeString;
	completedAt?: IsoDateTimeString;
	anamnesisSnapshot?: unknown;
	collectedData?: unknown;
	calculationContext?: unknown;
	derivedResultsSnapshot?: unknown;
	reportSnapshot?: unknown;
	createdAt: IsoDateTimeString;
	updatedAt: IsoDateTimeString;
};
