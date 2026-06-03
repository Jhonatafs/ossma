import type {
	Address,
	EntityId,
	EntityTimestamps,
	ISODateString,
	ImageReference,
	PhoneContact,
	YesNoAnswer,
	YesNoUnknownAnswer
} from './shared';

export type BiologicalSex = 'female' | 'male' | 'intersex' | 'not-informed';

export type ClientMainGoal =
	| 'general-health'
	| 'weight-loss'
	| 'hypertrophy'
	| 'physical-conditioning'
	| 'sport-performance'
	| 'rehabilitation-return'
	| 'pain-discomfort'
	| 'posture'
	| 'nutrition-follow-up'
	| 'aesthetics'
	| 'quality-of-life'
	| 'other';

export type ClientPriority =
	| 'health'
	| 'performance'
	| 'aesthetics'
	| 'pain-control'
	| 'routine-adherence'
	| 'other';

export type ClientContact = PhoneContact & {
	email?: string;
	address?: Address;
	addressText?: string;
};

export type LegalResponsible = {
	fullName: string;
	phone: string;
};

export type EmergencyContact = {
	name: string;
	phone: string;
};

export type ClientConsent = {
	truthDeclarationAccepted: boolean;
	dataUseAccepted: boolean;
	professionalJudgmentAccepted: boolean;
	contactAuthorizationAccepted: boolean;
	legalResponsibleAwarenessAccepted?: boolean;
	confirmationDate: ISODateString;
	registrationResponsibleProfessionalId: EntityId;
};

export type ClientGoalInformation = {
	mainGoals: ClientMainGoal[];
	otherMainGoalDescription?: string;
	targetEventOrDeadline?: string;
	clientPriority?: ClientPriority;
};

export type ClientGeneralHealth = {
	hasDiagnosedHealthCondition: YesNoAnswer;
	diagnosedHealthConditionDetails?: string;
	hasPhysicalActivityRestriction: YesNoAnswer;
	physicalActivityRestrictionDetails?: string;
	hasCardiovascularCondition: YesNoUnknownAnswer;
	cardiovascularConditionDetails?: string;
	hasDiabetesOrGlycemicCondition: YesNoUnknownAnswer;
	diabetesOrGlycemicConditionDetails?: string;
	hasRenalHepaticRespiratoryMetabolicCondition: YesNoUnknownAnswer;
	renalHepaticRespiratoryMetabolicConditionDetails?: string;
	hasCancerAutoimmuneNeurologicalCondition: YesNoAnswer;
	cancerAutoimmuneNeurologicalConditionDetails?: string;
	hasImportantSurgery: YesNoAnswer;
	importantSurgeryDetails?: string;
	hasCurrentProfessionalFollowUp: YesNoAnswer;
	currentProfessionalFollowUpDetails?: string;
	hasEarlyCardiovascularFamilyHistory: YesNoUnknownAnswer;
	hasMetabolicFamilyHistory: YesNoUnknownAnswer;
	hasOtherRelevantFamilyHistory: YesNoUnknownAnswer;
	familyHistoryDetails?: string;
};

export type ClientWarningSigns = {
	hasChestPain: YesNoAnswer;
	hasDisproportionateShortnessOfBreath: YesNoAnswer;
	hasFaintingOrFrequentDizziness: YesNoAnswer;
	hasUnexplainedPalpitations: YesNoAnswer;
	hasStrongRecentOrProgressivePain: YesNoAnswer;
	hasRecentLimitingInjury: YesNoAnswer;
	hasAcuteConditionNow: YesNoAnswer;
	hasKnownActivityRestriction: YesNoAnswer;
	warningSignDetails?: string;
};

export type ClientMedicationsAllergiesRestrictions = {
	usesCurrentMedication: YesNoAnswer;
	currentMedicationDetails?: string;
	usesSupplement: YesNoAnswer;
	supplementDetails?: string;
	hasAllergy: YesNoAnswer;
	allergyDetails?: string;
	hasFoodRestriction: YesNoAnswer;
	foodRestrictionDetails?: string;
	hasExerciseDietSupplementAdverseReaction: YesNoAnswer;
	adverseReactionDetails?: string;
};

export type PainFrequency = 'eventual' | 'frequent' | 'constant';

export type ClientPainInjuriesLimitations = {
	hasCurrentPain: YesNoAnswer;
	currentPainLocation?: string;
	currentPainIntensity?: number;
	currentPainFrequency?: PainFrequency;
	painWorseningFactors?: string;
	painImprovingFactors?: string;
	painLimitsDailyLife?: YesNoAnswer;
	painLimitationDetails?: string;
	hasPreviousRelevantInjury: YesNoAnswer;
	previousInjuryDetails?: string;
	hasKnownMovementLimitation: YesNoAnswer;
	knownMovementLimitationDetails?: string;
	usesAssistiveDevice: YesNoAnswer;
	assistiveDeviceDetails?: string;
};

export type PerceivedExerciseIntensity = 'light' | 'moderate' | 'intense';

export type SmokingStatus = 'never' | 'former-smoker' | 'smoker';

export type AlcoholConsumption = 'none' | 'occasional' | 'frequent';

export type SleepQuality = 'good' | 'regular' | 'poor';

export type PerceivedStressLevel = 'low' | 'moderate' | 'high';

export type ClientPhysicalActivityRoutine = {
	currentlyPracticesPhysicalActivity: YesNoAnswer;
	physicalActivityType?: string;
	weeklyPhysicalActivityFrequency?: number;
	averageSessionDurationMinutes?: number;
	perceivedExerciseIntensity?: PerceivedExerciseIntensity;
	physicalActivityPracticeTime?: string;
	hasPreviousTrainingExperience: YesNoAnswer;
	previousTrainingExperienceDetails?: string;
	smokingStatus: SmokingStatus;
	alcoholConsumption: AlcoholConsumption;
	averageSleepHours?: number;
	sleepQuality: SleepQuality;
	perceivedStressLevel: PerceivedStressLevel;
	hasSedentaryWorkRoutine: YesNoAnswer;
	routineObservations?: string;
};

export type NutritionFollowUpStatus = YesNoUnknownAnswer;

export type ClientNutritionHydration = {
	mealRoutine?: string;
	dailyWaterIntake?: string;
	nutritionFollowUpStatus?: NutritionFollowUpStatus;
};

export type ReproductiveSectionApplicability = 'yes' | 'no' | 'prefers-not-to-answer';

export type MenstrualCycleRegularity = YesNoAnswer | 'not-applicable';

export type ClientReproductiveHealth = {
	reproductiveSectionApplies: ReproductiveSectionApplicability;
	isPregnantOrSuspectsPregnancy?: YesNoUnknownAnswer;
	isPostpartum?: YesNoAnswer;
	isBreastfeeding?: YesNoAnswer;
	hasRegularMenstrualCycle?: MenstrualCycleRegularity;
	usesHormonalContraceptiveOrIud?: YesNoAnswer;
	reproductiveHealthNotes?: string;
};

export type ClientTruthConfirmation = {
	finalTruthConfirmationAccepted: boolean;
	professionalReviewConfirmationAccepted: boolean;
	truthConfirmationDate: ISODateString;
};

export type ClientGeneralAnamnesis = {
	consent: ClientConsent;
	goalInformation: ClientGoalInformation;
	generalHealth: ClientGeneralHealth;
	warningSigns: ClientWarningSigns;
	medicationsAllergiesRestrictions: ClientMedicationsAllergiesRestrictions;
	painInjuriesLimitations: ClientPainInjuriesLimitations;
	physicalActivityRoutine: ClientPhysicalActivityRoutine;
	nutritionHydration: ClientNutritionHydration;
	reproductiveHealth: ClientReproductiveHealth;
	generalAnamnesisNotes?: string;
	truthConfirmation: ClientTruthConfirmation;
};

export type Client = EntityTimestamps & {
	id: EntityId;
	fullName: string;
	preferredName?: string;
	dateOfBirth: ISODateString;
	biologicalSex: BiologicalSex;
	contact: ClientContact;
	occupation?: string;
	photo?: ImageReference;
	legalResponsible?: LegalResponsible;
	emergencyContact: EmergencyContact;
	generalAnamnesis: ClientGeneralAnamnesis;
};
