<script lang="ts">
	import { resolve } from '$app/paths';

	let clientDateOfBirth = $state('');
	let primaryPhoneUsedForMessaging = $state(true);
	let selectedMainGoals = $state<string[]>([]);

	let hasDiagnosedHealthCondition = $state('');
	let hasPhysicalActivityRestriction = $state('');
	let hasCardiovascularCondition = $state('');
	let hasDiabetesOrGlycemicCondition = $state('');
	let hasRenalHepaticRespiratoryMetabolicCondition = $state('');
	let hasCancerAutoimmuneNeurologicalCondition = $state('');
	let hasImportantSurgery = $state('');
	let hasCurrentProfessionalFollowUp = $state('');
	let hasEarlyCardiovascularFamilyHistory = $state('');
	let hasMetabolicFamilyHistory = $state('');
	let hasOtherRelevantFamilyHistory = $state('');

	let hasChestPain = $state('');
	let hasDisproportionateShortnessOfBreath = $state('');
	let hasFaintingOrFrequentDizziness = $state('');
	let hasUnexplainedPalpitations = $state('');
	let hasStrongRecentOrProgressivePain = $state('');
	let hasRecentLimitingInjury = $state('');
	let hasAcuteConditionNow = $state('');
	let hasKnownActivityRestriction = $state('');

	let usesCurrentMedication = $state('');
	let usesSupplement = $state('');
	let hasAllergy = $state('');
	let hasFoodRestriction = $state('');
	let hasExerciseDietSupplementAdverseReaction = $state('');

	let hasCurrentPain = $state('');
	let painLimitsDailyLife = $state('');
	let hasPreviousRelevantInjury = $state('');
	let hasKnownMovementLimitation = $state('');
	let usesAssistiveDevice = $state('');

	let currentlyPracticesPhysicalActivity = $state('');
	let hasPreviousTrainingExperience = $state('');
	let hasSedentaryWorkRoutine = $state('');

	let reproductiveSectionApplies = $state('');
	let isPregnantOrSuspectsPregnancy = $state('');
	let isPostpartum = $state('');
	let isBreastfeeding = $state('');
	let hasRegularMenstrualCycle = $state('');
	let usesHormonalContraceptiveOrIud = $state('');

	const clientAgeInYears = $derived(calculateAgeInYears(clientDateOfBirth));
	const isMinorClient = $derived(clientAgeInYears !== null && clientAgeInYears < 18);
	const mainGoalOtherSelected = $derived(selectedMainGoals.includes('other'));

	const familyHistoryNeedsDetails = $derived(
		[
			hasEarlyCardiovascularFamilyHistory,
			hasMetabolicFamilyHistory,
			hasOtherRelevantFamilyHistory
		].some(shouldShowDetails)
	);

	const warningSignsNeedDetails = $derived(
		[
			hasChestPain,
			hasDisproportionateShortnessOfBreath,
			hasFaintingOrFrequentDizziness,
			hasUnexplainedPalpitations,
			hasStrongRecentOrProgressivePain,
			hasRecentLimitingInjury,
			hasAcuteConditionNow,
			hasKnownActivityRestriction
		].some(shouldShowDetails)
	);

	const reproductiveQuestionsVisible = $derived(reproductiveSectionApplies === 'yes');
	const reproductiveNotesVisible = $derived(
		reproductiveQuestionsVisible &&
			[
				isPregnantOrSuspectsPregnancy,
				isPostpartum,
				isBreastfeeding,
				usesHormonalContraceptiveOrIud
			].some(shouldShowDetails)
	);

	function calculateAgeInYears(dateOfBirth: string): number | null {
		if (!dateOfBirth) {
			return null;
		}

		const birthDate = new Date(`${dateOfBirth}T00:00:00`);

		if (Number.isNaN(birthDate.getTime())) {
			return null;
		}

		const today = new Date();
		let ageInYears = today.getFullYear() - birthDate.getFullYear();
		const birthdayHasNotOccurredThisYear =
			today.getMonth() < birthDate.getMonth() ||
			(today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate());

		if (birthdayHasNotOccurredThisYear) {
			ageInYears -= 1;
		}

		return ageInYears;
	}

	function shouldShowDetails(answer: string): boolean {
		return answer === 'yes' || answer === 'unknown';
	}
</script>

<h1>New client</h1>

<p>
	This form defines the Client registration and general anamnesis structure. It does not save data
	yet.
</p>

<form aria-describedby="static-form-notice">
	<p id="static-form-notice">
		Conditional fields appear only when the current answer requires additional information.
		Persistence will be added in a later milestone.
	</p>

	<fieldset>
		<legend>1. Client data</legend>

		<p>
			<label for="clientFullName">Full name</label>
			<input id="clientFullName" name="clientFullName" type="text" autocomplete="name" required />
		</p>

		<p>
			<label for="clientPreferredName">Social name or preferred name</label>
			<input id="clientPreferredName" name="clientPreferredName" type="text" />
		</p>

		<p>
			<label for="clientDateOfBirth">Date of birth</label>
			<input
				id="clientDateOfBirth"
				name="clientDateOfBirth"
				type="date"
				bind:value={clientDateOfBirth}
				required
			/>
		</p>

		<p>
			<label for="clientBiologicalSex">Biological sex</label>
			<select id="clientBiologicalSex" name="clientBiologicalSex" required>
				<option value="">Select one option</option>
				<option value="female">Female</option>
				<option value="male">Male</option>
				<option value="intersex">Intersex</option>
				<option value="not-informed">Prefer not to inform</option>
			</select>
		</p>

		<p>
			<label for="clientPhone">Phone</label>
			<input id="clientPhone" name="clientPhone" type="tel" autocomplete="tel" required />
		</p>

		<p>
			<label for="primaryPhoneUsedForMessaging">
				<input
					id="primaryPhoneUsedForMessaging"
					name="primaryPhoneUsedForMessaging"
					type="checkbox"
					bind:checked={primaryPhoneUsedForMessaging}
				/>
				Primary phone is also used in messaging apps.
			</label>
		</p>

		{#if !primaryPhoneUsedForMessaging}
			<p>
				<label for="messagingAppPhone">Messaging app phone</label>
				<input id="messagingAppPhone" name="messagingAppPhone" type="tel" required />
			</p>
		{/if}

		<p>
			<label for="clientEmail">Email</label>
			<input id="clientEmail" name="clientEmail" type="email" autocomplete="email" />
		</p>

		<p>
			<label for="clientAddress">Address and city</label>
			<textarea id="clientAddress" name="clientAddress" rows="3" autocomplete="street-address"
			></textarea>
		</p>

		<p>
			<label for="clientOccupation">Profession or occupation</label>
			<input
				id="clientOccupation"
				name="clientOccupation"
				type="text"
				autocomplete="organization-title"
			/>
		</p>

		<p>
			<label for="clientPhoto">Client photo</label>
			<input id="clientPhoto" name="clientPhoto" type="file" accept="image/*" />
		</p>

		<p>Maximum image size will be 2MB. Upload and persistence are not implemented yet.</p>
	</fieldset>

	<fieldset>
		<legend>2. Responsible person and emergency</legend>

		{#if isMinorClient}
			<p>
				<label for="legalResponsibleName">Legal responsible name</label>
				<input id="legalResponsibleName" name="legalResponsibleName" type="text" required />
			</p>

			<p>
				<label for="legalResponsiblePhone">Legal responsible phone</label>
				<input id="legalResponsiblePhone" name="legalResponsiblePhone" type="tel" required />
			</p>
		{/if}

		<p>
			<label for="emergencyContactName">Emergency contact name</label>
			<input id="emergencyContactName" name="emergencyContactName" type="text" required />
		</p>

		<p>
			<label for="emergencyContactPhone">Emergency contact phone</label>
			<input id="emergencyContactPhone" name="emergencyContactPhone" type="tel" required />
		</p>
	</fieldset>

	<fieldset>
		<legend>3. Consent</legend>

		<p>
			<label for="truthDeclarationAccepted">
				<input
					id="truthDeclarationAccepted"
					name="truthDeclarationAccepted"
					type="checkbox"
					required
				/>
				Client declares that the provided information is true and complete to the best of their knowledge.
			</label>
		</p>

		<p>
			<label for="dataUseAccepted">
				<input id="dataUseAccepted" name="dataUseAccepted" type="checkbox" required />
				Client authorizes data use for registration, assessments, follow-up, and professional reports.
			</label>
		</p>

		<p>
			<label for="professionalJudgmentAccepted">
				<input
					id="professionalJudgmentAccepted"
					name="professionalJudgmentAccepted"
					type="checkbox"
					required
				/>
				Client understands that this anamnesis does not replace medical, physiotherapeutic, nutritional,
				or other qualified professional assessment when needed.
			</label>
		</p>

		<p>
			<label for="contactAuthorizationAccepted">
				<input
					id="contactAuthorizationAccepted"
					name="contactAuthorizationAccepted"
					type="checkbox"
				/>
				Client authorizes contact for matters related to care.
			</label>
		</p>

		{#if isMinorClient}
			<p>
				<label for="guardianConsentAccepted">
					<input
						id="guardianConsentAccepted"
						name="guardianConsentAccepted"
						type="checkbox"
						required
					/>
					Legal responsible confirms awareness.
				</label>
			</p>
		{/if}

		<p>
			<label for="consentConfirmationDate">Confirmation date</label>
			<input id="consentConfirmationDate" name="consentConfirmationDate" type="date" required />
		</p>

		<p>
			<label for="registrationResponsibleProfessional">
				Professional responsible for registration
			</label>
			<select
				id="registrationResponsibleProfessional"
				name="registrationResponsibleProfessional"
				required
			>
				<option value="">Select a professional</option>
				<option value="example-professional">Example professional</option>
			</select>
		</p>
	</fieldset>

	<fieldset>
		<legend>4. Main goal</legend>

		<p>Select all main goals that apply.</p>

		<ul>
			<li>
				<label for="mainGoalGeneralHealth">
					<input
						id="mainGoalGeneralHealth"
						name="mainGoal"
						type="checkbox"
						value="general-health"
						bind:group={selectedMainGoals}
					/>
					General health
				</label>
			</li>
			<li>
				<label for="mainGoalWeightLoss">
					<input
						id="mainGoalWeightLoss"
						name="mainGoal"
						type="checkbox"
						value="weight-loss"
						bind:group={selectedMainGoals}
					/>
					Weight loss
				</label>
			</li>
			<li>
				<label for="mainGoalHypertrophy">
					<input
						id="mainGoalHypertrophy"
						name="mainGoal"
						type="checkbox"
						value="hypertrophy"
						bind:group={selectedMainGoals}
					/>
					Hypertrophy or muscle gain
				</label>
			</li>
			<li>
				<label for="mainGoalPhysicalConditioning">
					<input
						id="mainGoalPhysicalConditioning"
						name="mainGoal"
						type="checkbox"
						value="physical-conditioning"
						bind:group={selectedMainGoals}
					/>
					Physical conditioning
				</label>
			</li>
			<li>
				<label for="mainGoalSportPerformance">
					<input
						id="mainGoalSportPerformance"
						name="mainGoal"
						type="checkbox"
						value="sport-performance"
						bind:group={selectedMainGoals}
					/>
					Sport performance
				</label>
			</li>
			<li>
				<label for="mainGoalRehabilitationReturn">
					<input
						id="mainGoalRehabilitationReturn"
						name="mainGoal"
						type="checkbox"
						value="rehabilitation-return"
						bind:group={selectedMainGoals}
					/>
					Rehabilitation or return to activity
				</label>
			</li>
			<li>
				<label for="mainGoalPainDiscomfort">
					<input
						id="mainGoalPainDiscomfort"
						name="mainGoal"
						type="checkbox"
						value="pain-discomfort"
						bind:group={selectedMainGoals}
					/>
					Pain or discomfort
				</label>
			</li>
			<li>
				<label for="mainGoalPosture">
					<input
						id="mainGoalPosture"
						name="mainGoal"
						type="checkbox"
						value="posture"
						bind:group={selectedMainGoals}
					/>
					Postural improvement
				</label>
			</li>
			<li>
				<label for="mainGoalNutritionFollowUp">
					<input
						id="mainGoalNutritionFollowUp"
						name="mainGoal"
						type="checkbox"
						value="nutrition-follow-up"
						bind:group={selectedMainGoals}
					/>
					Nutritional follow-up
				</label>
			</li>
			<li>
				<label for="mainGoalAesthetics">
					<input
						id="mainGoalAesthetics"
						name="mainGoal"
						type="checkbox"
						value="aesthetics"
						bind:group={selectedMainGoals}
					/>
					Aesthetics
				</label>
			</li>
			<li>
				<label for="mainGoalQualityOfLife">
					<input
						id="mainGoalQualityOfLife"
						name="mainGoal"
						type="checkbox"
						value="quality-of-life"
						bind:group={selectedMainGoals}
					/>
					Quality of life
				</label>
			</li>
			<li>
				<label for="mainGoalOther">
					<input
						id="mainGoalOther"
						name="mainGoal"
						type="checkbox"
						value="other"
						bind:group={selectedMainGoals}
					/>
					Other
				</label>
			</li>
		</ul>

		{#if mainGoalOtherSelected}
			<p>
				<label for="mainGoalOtherDescription">Other main goal description</label>
				<textarea id="mainGoalOtherDescription" name="mainGoalOtherDescription" rows="3" required
				></textarea>
			</p>
		{/if}

		<p>
			<label for="targetEventOrDeadline">Deadline or target event</label>
			<input id="targetEventOrDeadline" name="targetEventOrDeadline" type="text" />
		</p>

		<p>
			<label for="clientPriority">Client priority</label>
			<select id="clientPriority" name="clientPriority">
				<option value="">Select one option</option>
				<option value="health">Health</option>
				<option value="performance">Performance</option>
				<option value="aesthetics">Aesthetics</option>
				<option value="pain-control">Pain control</option>
				<option value="routine-adherence">Routine adherence</option>
				<option value="other">Other</option>
			</select>
		</p>
	</fieldset>

	<fieldset>
		<legend>5. General health</legend>

		<p>
			<label for="hasDiagnosedHealthCondition">
				Has any diagnosed disease or health condition?
			</label>
			<select
				id="hasDiagnosedHealthCondition"
				name="hasDiagnosedHealthCondition"
				bind:value={hasDiagnosedHealthCondition}
				required
			>
				<option value="">Select one option</option>
				<option value="yes">Yes</option>
				<option value="no">No</option>
			</select>
		</p>

		{#if shouldShowDetails(hasDiagnosedHealthCondition)}
			<p>
				<label for="diagnosedHealthConditionDetails">Diagnosed condition details</label>
				<textarea
					id="diagnosedHealthConditionDetails"
					name="diagnosedHealthConditionDetails"
					rows="3"
					required
				></textarea>
			</p>
		{/if}

		<p>
			<label for="hasPhysicalActivityRestriction">
				Has a doctor or health professional advised avoiding or limiting physical activity?
			</label>
			<select
				id="hasPhysicalActivityRestriction"
				name="hasPhysicalActivityRestriction"
				bind:value={hasPhysicalActivityRestriction}
				required
			>
				<option value="">Select one option</option>
				<option value="yes">Yes</option>
				<option value="no">No</option>
			</select>
		</p>

		{#if shouldShowDetails(hasPhysicalActivityRestriction)}
			<p>
				<label for="physicalActivityRestrictionDetails">Physical activity restriction details</label
				>
				<textarea
					id="physicalActivityRestrictionDetails"
					name="physicalActivityRestrictionDetails"
					rows="3"
					required
				></textarea>
			</p>
		{/if}

		<p>
			<label for="hasCardiovascularCondition">
				Has heart disease, high blood pressure, arrhythmia, or cardiovascular history?
			</label>
			<select
				id="hasCardiovascularCondition"
				name="hasCardiovascularCondition"
				bind:value={hasCardiovascularCondition}
				required
			>
				<option value="">Select one option</option>
				<option value="yes">Yes</option>
				<option value="no">No</option>
				<option value="unknown">I do not know</option>
			</select>
		</p>

		{#if shouldShowDetails(hasCardiovascularCondition)}
			<p>
				<label for="cardiovascularConditionDetails">Cardiovascular details</label>
				<textarea
					id="cardiovascularConditionDetails"
					name="cardiovascularConditionDetails"
					rows="3"
					required
				></textarea>
			</p>
		{/if}

		<p>
			<label for="hasDiabetesOrGlycemicCondition">
				Has diabetes, insulin resistance, or glycemic alteration?
			</label>
			<select
				id="hasDiabetesOrGlycemicCondition"
				name="hasDiabetesOrGlycemicCondition"
				bind:value={hasDiabetesOrGlycemicCondition}
				required
			>
				<option value="">Select one option</option>
				<option value="yes">Yes</option>
				<option value="no">No</option>
				<option value="unknown">I do not know</option>
			</select>
		</p>

		{#if shouldShowDetails(hasDiabetesOrGlycemicCondition)}
			<p>
				<label for="diabetesOrGlycemicConditionDetails">Glycemic condition details</label>
				<textarea
					id="diabetesOrGlycemicConditionDetails"
					name="diabetesOrGlycemicConditionDetails"
					rows="3"
					required
				></textarea>
			</p>
		{/if}

		<p>
			<label for="hasRenalHepaticRespiratoryMetabolicCondition">
				Has renal, hepatic, respiratory, or metabolic disease?
			</label>
			<select
				id="hasRenalHepaticRespiratoryMetabolicCondition"
				name="hasRenalHepaticRespiratoryMetabolicCondition"
				bind:value={hasRenalHepaticRespiratoryMetabolicCondition}
				required
			>
				<option value="">Select one option</option>
				<option value="yes">Yes</option>
				<option value="no">No</option>
				<option value="unknown">I do not know</option>
			</select>
		</p>

		{#if shouldShowDetails(hasRenalHepaticRespiratoryMetabolicCondition)}
			<p>
				<label for="renalHepaticRespiratoryMetabolicConditionDetails">
					Renal, hepatic, respiratory, or metabolic details
				</label>
				<textarea
					id="renalHepaticRespiratoryMetabolicConditionDetails"
					name="renalHepaticRespiratoryMetabolicConditionDetails"
					rows="3"
					required
				></textarea>
			</p>
		{/if}

		<p>
			<label for="hasCancerAutoimmuneNeurologicalCondition">
				Has or had cancer, autoimmune disease, neurological disease, or another relevant condition?
			</label>
			<select
				id="hasCancerAutoimmuneNeurologicalCondition"
				name="hasCancerAutoimmuneNeurologicalCondition"
				bind:value={hasCancerAutoimmuneNeurologicalCondition}
				required
			>
				<option value="">Select one option</option>
				<option value="yes">Yes</option>
				<option value="no">No</option>
			</select>
		</p>

		{#if shouldShowDetails(hasCancerAutoimmuneNeurologicalCondition)}
			<p>
				<label for="cancerAutoimmuneNeurologicalConditionDetails">
					Cancer, autoimmune, neurological, or other condition details
				</label>
				<textarea
					id="cancerAutoimmuneNeurologicalConditionDetails"
					name="cancerAutoimmuneNeurologicalConditionDetails"
					rows="3"
					required
				></textarea>
			</p>
		{/if}

		<p>
			<label for="hasImportantSurgery">Has had an important surgery?</label>
			<select
				id="hasImportantSurgery"
				name="hasImportantSurgery"
				bind:value={hasImportantSurgery}
				required
			>
				<option value="">Select one option</option>
				<option value="yes">Yes</option>
				<option value="no">No</option>
			</select>
		</p>

		{#if shouldShowDetails(hasImportantSurgery)}
			<p>
				<label for="importantSurgeryDetails">Surgery details and date</label>
				<textarea id="importantSurgeryDetails" name="importantSurgeryDetails" rows="3" required
				></textarea>
			</p>
		{/if}

		<p>
			<label for="hasCurrentProfessionalFollowUp">
				Currently has medical, physiotherapeutic, nutritional, or psychological follow-up?
			</label>
			<select
				id="hasCurrentProfessionalFollowUp"
				name="hasCurrentProfessionalFollowUp"
				bind:value={hasCurrentProfessionalFollowUp}
				required
			>
				<option value="">Select one option</option>
				<option value="yes">Yes</option>
				<option value="no">No</option>
			</select>
		</p>

		{#if shouldShowDetails(hasCurrentProfessionalFollowUp)}
			<p>
				<label for="currentProfessionalFollowUpDetails">
					Current professional follow-up details
				</label>
				<textarea
					id="currentProfessionalFollowUpDetails"
					name="currentProfessionalFollowUpDetails"
					rows="3"
					required
				></textarea>
			</p>
		{/if}

		<h2>Family history</h2>

		<p>
			<label for="hasEarlyCardiovascularFamilyHistory">
				Family history of early cardiovascular disease?
			</label>
			<select
				id="hasEarlyCardiovascularFamilyHistory"
				name="hasEarlyCardiovascularFamilyHistory"
				bind:value={hasEarlyCardiovascularFamilyHistory}
				required
			>
				<option value="">Select one option</option>
				<option value="yes">Yes</option>
				<option value="no">No</option>
				<option value="unknown">I do not know</option>
			</select>
		</p>

		<p>
			<label for="hasMetabolicFamilyHistory">
				Family history of hypertension, diabetes, or dyslipidemia?
			</label>
			<select
				id="hasMetabolicFamilyHistory"
				name="hasMetabolicFamilyHistory"
				bind:value={hasMetabolicFamilyHistory}
				required
			>
				<option value="">Select one option</option>
				<option value="yes">Yes</option>
				<option value="no">No</option>
				<option value="unknown">I do not know</option>
			</select>
		</p>

		<p>
			<label for="hasOtherRelevantFamilyHistory">
				Family history of obesity, cancer, renal disease, or other important conditions?
			</label>
			<select
				id="hasOtherRelevantFamilyHistory"
				name="hasOtherRelevantFamilyHistory"
				bind:value={hasOtherRelevantFamilyHistory}
				required
			>
				<option value="">Select one option</option>
				<option value="yes">Yes</option>
				<option value="no">No</option>
				<option value="unknown">I do not know</option>
			</select>
		</p>

		{#if familyHistoryNeedsDetails}
			<p>
				<label for="familyHistoryDetails">Family history details</label>
				<textarea id="familyHistoryDetails" name="familyHistoryDetails" rows="3" required
				></textarea>
			</p>
		{/if}
	</fieldset>

	<fieldset>
		<legend>6. Warning signs</legend>

		<p>
			<label for="hasChestPain">Chest pain or tightness at rest or during effort?</label>
			<select id="hasChestPain" name="hasChestPain" bind:value={hasChestPain} required>
				<option value="">Select one option</option>
				<option value="yes">Yes</option>
				<option value="no">No</option>
			</select>
		</p>

		<p>
			<label for="hasDisproportionateShortnessOfBreath">
				Disproportionate shortness of breath during effort?
			</label>
			<select
				id="hasDisproportionateShortnessOfBreath"
				name="hasDisproportionateShortnessOfBreath"
				bind:value={hasDisproportionateShortnessOfBreath}
				required
			>
				<option value="">Select one option</option>
				<option value="yes">Yes</option>
				<option value="no">No</option>
			</select>
		</p>

		<p>
			<label for="hasFaintingOrFrequentDizziness">
				Fainting, loss of consciousness, or frequent dizziness?
			</label>
			<select
				id="hasFaintingOrFrequentDizziness"
				name="hasFaintingOrFrequentDizziness"
				bind:value={hasFaintingOrFrequentDizziness}
				required
			>
				<option value="">Select one option</option>
				<option value="yes">Yes</option>
				<option value="no">No</option>
			</select>
		</p>

		<p>
			<label for="hasUnexplainedPalpitations">
				Palpitations, irregular heartbeat, or unexplained tachycardia?
			</label>
			<select
				id="hasUnexplainedPalpitations"
				name="hasUnexplainedPalpitations"
				bind:value={hasUnexplainedPalpitations}
				required
			>
				<option value="">Select one option</option>
				<option value="yes">Yes</option>
				<option value="no">No</option>
			</select>
		</p>

		<p>
			<label for="hasStrongRecentOrProgressivePain">
				Strong, recent, or progressive pain in joints, muscles, spine, or tendons?
			</label>
			<select
				id="hasStrongRecentOrProgressivePain"
				name="hasStrongRecentOrProgressivePain"
				bind:value={hasStrongRecentOrProgressivePain}
				required
			>
				<option value="">Select one option</option>
				<option value="yes">Yes</option>
				<option value="no">No</option>
			</select>
		</p>

		<p>
			<label for="hasRecentLimitingInjury">
				Injury in the last 12 months that limits movement or exercise?
			</label>
			<select
				id="hasRecentLimitingInjury"
				name="hasRecentLimitingInjury"
				bind:value={hasRecentLimitingInjury}
				required
			>
				<option value="">Select one option</option>
				<option value="yes">Yes</option>
				<option value="no">No</option>
			</select>
		</p>

		<p>
			<label for="hasAcuteConditionNow">
				Fever, infection, important malaise, or acute condition at this moment?
			</label>
			<select
				id="hasAcuteConditionNow"
				name="hasAcuteConditionNow"
				bind:value={hasAcuteConditionNow}
				required
			>
				<option value="">Select one option</option>
				<option value="yes">Yes</option>
				<option value="no">No</option>
			</select>
		</p>

		<p>
			<label for="hasKnownActivityRestriction">
				Any activity the client knows they should not perform?
			</label>
			<select
				id="hasKnownActivityRestriction"
				name="hasKnownActivityRestriction"
				bind:value={hasKnownActivityRestriction}
				required
			>
				<option value="">Select one option</option>
				<option value="yes">Yes</option>
				<option value="no">No</option>
			</select>
		</p>

		{#if warningSignsNeedDetails}
			<p>
				<label for="warningSignDetails">Warning sign or limitation details</label>
				<textarea id="warningSignDetails" name="warningSignDetails" rows="4" required></textarea>
			</p>
		{/if}
	</fieldset>

	<fieldset>
		<legend>7. Medications, allergies and restrictions</legend>

		<p>
			<label for="usesCurrentMedication">Uses medication currently?</label>
			<select
				id="usesCurrentMedication"
				name="usesCurrentMedication"
				bind:value={usesCurrentMedication}
				required
			>
				<option value="">Select one option</option>
				<option value="yes">Yes</option>
				<option value="no">No</option>
			</select>
		</p>

		{#if shouldShowDetails(usesCurrentMedication)}
			<p>
				<label for="currentMedicationDetails">Medication, dose, and frequency</label>
				<textarea id="currentMedicationDetails" name="currentMedicationDetails" rows="4" required
				></textarea>
			</p>
		{/if}

		<p>
			<label for="usesSupplement">Uses dietary supplement?</label>
			<select id="usesSupplement" name="usesSupplement" bind:value={usesSupplement} required>
				<option value="">Select one option</option>
				<option value="yes">Yes</option>
				<option value="no">No</option>
			</select>
		</p>

		{#if shouldShowDetails(usesSupplement)}
			<p>
				<label for="supplementDetails">Supplement details</label>
				<textarea id="supplementDetails" name="supplementDetails" rows="3" required></textarea>
			</p>
		{/if}

		<p>
			<label for="hasAllergy">
				Has allergy to medication, food, latex, adhesive, or another item?
			</label>
			<select id="hasAllergy" name="hasAllergy" bind:value={hasAllergy} required>
				<option value="">Select one option</option>
				<option value="yes">Yes</option>
				<option value="no">No</option>
			</select>
		</p>

		{#if shouldShowDetails(hasAllergy)}
			<p>
				<label for="allergyDetails">Allergy details and reaction</label>
				<textarea id="allergyDetails" name="allergyDetails" rows="4" required></textarea>
			</p>
		{/if}

		<p>
			<label for="hasFoodRestriction">
				Has food restriction by health, religion, preference, or intolerance?
			</label>
			<select
				id="hasFoodRestriction"
				name="hasFoodRestriction"
				bind:value={hasFoodRestriction}
				required
			>
				<option value="">Select one option</option>
				<option value="yes">Yes</option>
				<option value="no">No</option>
			</select>
		</p>

		{#if shouldShowDetails(hasFoodRestriction)}
			<p>
				<label for="foodRestrictionDetails">Food restriction details</label>
				<textarea id="foodRestrictionDetails" name="foodRestrictionDetails" rows="4" required
				></textarea>
			</p>
		{/if}

		<p>
			<label for="hasExerciseDietSupplementAdverseReaction">
				Has had adverse reaction during exercise, diet, supplement, or treatment?
			</label>
			<select
				id="hasExerciseDietSupplementAdverseReaction"
				name="hasExerciseDietSupplementAdverseReaction"
				bind:value={hasExerciseDietSupplementAdverseReaction}
				required
			>
				<option value="">Select one option</option>
				<option value="yes">Yes</option>
				<option value="no">No</option>
			</select>
		</p>

		{#if shouldShowDetails(hasExerciseDietSupplementAdverseReaction)}
			<p>
				<label for="adverseReactionDetails">Adverse reaction details</label>
				<textarea id="adverseReactionDetails" name="adverseReactionDetails" rows="4" required
				></textarea>
			</p>
		{/if}
	</fieldset>

	<fieldset>
		<legend>8. Pain, injuries and limitations</legend>

		<p>
			<label for="hasCurrentPain">Has current pain?</label>
			<select id="hasCurrentPain" name="hasCurrentPain" bind:value={hasCurrentPain} required>
				<option value="">Select one option</option>
				<option value="yes">Yes</option>
				<option value="no">No</option>
			</select>
		</p>

		{#if shouldShowDetails(hasCurrentPain)}
			<p>
				<label for="currentPainLocation">Pain location</label>
				<input id="currentPainLocation" name="currentPainLocation" type="text" required />
			</p>

			<p>
				<label for="currentPainIntensity">Pain intensity from 0 to 10</label>
				<input
					id="currentPainIntensity"
					name="currentPainIntensity"
					type="number"
					min="0"
					max="10"
					step="1"
					required
				/>
			</p>

			<p>
				<label for="currentPainFrequency">Pain frequency</label>
				<select id="currentPainFrequency" name="currentPainFrequency" required>
					<option value="">Select one option</option>
					<option value="eventual">Eventual</option>
					<option value="frequent">Frequent</option>
					<option value="constant">Constant</option>
				</select>
			</p>

			<p>
				<label for="painWorseningFactors">What worsens the pain?</label>
				<textarea id="painWorseningFactors" name="painWorseningFactors" rows="3"></textarea>
			</p>

			<p>
				<label for="painImprovingFactors">What improves the pain?</label>
				<textarea id="painImprovingFactors" name="painImprovingFactors" rows="3"></textarea>
			</p>

			<p>
				<label for="painLimitsDailyLife">
					Does pain limit work, training, sleep, or daily activities?
				</label>
				<select
					id="painLimitsDailyLife"
					name="painLimitsDailyLife"
					bind:value={painLimitsDailyLife}
					required
				>
					<option value="">Select one option</option>
					<option value="yes">Yes</option>
					<option value="no">No</option>
				</select>
			</p>

			{#if shouldShowDetails(painLimitsDailyLife)}
				<p>
					<label for="painLimitationDetails">Pain limitation details</label>
					<textarea id="painLimitationDetails" name="painLimitationDetails" rows="3" required
					></textarea>
				</p>
			{/if}
		{/if}

		<p>
			<label for="hasPreviousRelevantInjury">
				Has had fracture, sprain, dislocation, hernia, muscle, ligament, or tendon injury?
			</label>
			<select
				id="hasPreviousRelevantInjury"
				name="hasPreviousRelevantInjury"
				bind:value={hasPreviousRelevantInjury}
				required
			>
				<option value="">Select one option</option>
				<option value="yes">Yes</option>
				<option value="no">No</option>
			</select>
		</p>

		{#if shouldShowDetails(hasPreviousRelevantInjury)}
			<p>
				<label for="previousInjuryDetails">Injury details and approximate date</label>
				<textarea id="previousInjuryDetails" name="previousInjuryDetails" rows="4" required
				></textarea>
			</p>
		{/if}

		<p>
			<label for="hasKnownMovementLimitation">Has known movement limitation?</label>
			<select
				id="hasKnownMovementLimitation"
				name="hasKnownMovementLimitation"
				bind:value={hasKnownMovementLimitation}
				required
			>
				<option value="">Select one option</option>
				<option value="yes">Yes</option>
				<option value="no">No</option>
			</select>
		</p>

		{#if shouldShowDetails(hasKnownMovementLimitation)}
			<p>
				<label for="knownMovementLimitationDetails">Known movement limitation details</label>
				<textarea
					id="knownMovementLimitationDetails"
					name="knownMovementLimitationDetails"
					rows="3"
					required
				></textarea>
			</p>
		{/if}

		<p>
			<label for="usesAssistiveDevice">
				Uses orthosis, insole, cane, crutch, or another support?
			</label>
			<select
				id="usesAssistiveDevice"
				name="usesAssistiveDevice"
				bind:value={usesAssistiveDevice}
				required
			>
				<option value="">Select one option</option>
				<option value="yes">Yes</option>
				<option value="no">No</option>
			</select>
		</p>

		{#if shouldShowDetails(usesAssistiveDevice)}
			<p>
				<label for="assistiveDeviceDetails">Support device details</label>
				<textarea id="assistiveDeviceDetails" name="assistiveDeviceDetails" rows="3" required
				></textarea>
			</p>
		{/if}
	</fieldset>

	<fieldset>
		<legend>9. Physical activity and routine</legend>

		<p>
			<label for="currentlyPracticesPhysicalActivity">
				Currently practices physical activity?
			</label>
			<select
				id="currentlyPracticesPhysicalActivity"
				name="currentlyPracticesPhysicalActivity"
				bind:value={currentlyPracticesPhysicalActivity}
				required
			>
				<option value="">Select one option</option>
				<option value="yes">Yes</option>
				<option value="no">No</option>
			</select>
		</p>

		{#if shouldShowDetails(currentlyPracticesPhysicalActivity)}
			<p>
				<label for="physicalActivityType">Type of activity</label>
				<textarea id="physicalActivityType" name="physicalActivityType" rows="3" required
				></textarea>
			</p>

			<p>
				<label for="weeklyPhysicalActivityFrequency">Weekly frequency</label>
				<input
					id="weeklyPhysicalActivityFrequency"
					name="weeklyPhysicalActivityFrequency"
					type="number"
					min="0"
					step="1"
					required
				/>
			</p>

			<p>
				<label for="averageSessionDurationMinutes">Average session duration in minutes</label>
				<input
					id="averageSessionDurationMinutes"
					name="averageSessionDurationMinutes"
					type="number"
					min="0"
					step="1"
					required
				/>
			</p>

			<p>
				<label for="perceivedExerciseIntensity">Perceived intensity</label>
				<select id="perceivedExerciseIntensity" name="perceivedExerciseIntensity" required>
					<option value="">Select one option</option>
					<option value="light">Light</option>
					<option value="moderate">Moderate</option>
					<option value="intense">Intense</option>
				</select>
			</p>

			<p>
				<label for="physicalActivityPracticeTime">How long has the client practiced?</label>
				<input id="physicalActivityPracticeTime" name="physicalActivityPracticeTime" type="text" />
			</p>
		{/if}

		<p>
			<label for="hasPreviousTrainingExperience">Has trained before?</label>
			<select
				id="hasPreviousTrainingExperience"
				name="hasPreviousTrainingExperience"
				bind:value={hasPreviousTrainingExperience}
				required
			>
				<option value="">Select one option</option>
				<option value="yes">Yes</option>
				<option value="no">No</option>
			</select>
		</p>

		{#if shouldShowDetails(hasPreviousTrainingExperience)}
			<p>
				<label for="previousTrainingExperienceDetails">Previous training experience details</label>
				<textarea
					id="previousTrainingExperienceDetails"
					name="previousTrainingExperienceDetails"
					rows="3"
					required
				></textarea>
			</p>
		{/if}

		<p>
			<label for="smokingStatus">Smoking status</label>
			<select id="smokingStatus" name="smokingStatus" required>
				<option value="">Select one option</option>
				<option value="never">Never</option>
				<option value="former-smoker">Former smoker</option>
				<option value="smoker">Smoker</option>
			</select>
		</p>

		<p>
			<label for="alcoholConsumption">Alcohol consumption</label>
			<select id="alcoholConsumption" name="alcoholConsumption" required>
				<option value="">Select one option</option>
				<option value="none">No</option>
				<option value="occasional">Occasional</option>
				<option value="frequent">Frequent</option>
			</select>
		</p>

		<p>
			<label for="averageSleepHours">Average sleep per night in hours</label>
			<input id="averageSleepHours" name="averageSleepHours" type="number" min="0" step="0.5" />
		</p>

		<p>
			<label for="sleepQuality">Sleep quality</label>
			<select id="sleepQuality" name="sleepQuality" required>
				<option value="">Select one option</option>
				<option value="good">Good</option>
				<option value="regular">Regular</option>
				<option value="poor">Poor</option>
			</select>
		</p>

		<p>
			<label for="perceivedStressLevel">Perceived stress level</label>
			<select id="perceivedStressLevel" name="perceivedStressLevel" required>
				<option value="">Select one option</option>
				<option value="low">Low</option>
				<option value="moderate">Moderate</option>
				<option value="high">High</option>
			</select>
		</p>

		<p>
			<label for="hasSedentaryWorkRoutine">
				Does work or routine involve long periods sitting?
			</label>
			<select
				id="hasSedentaryWorkRoutine"
				name="hasSedentaryWorkRoutine"
				bind:value={hasSedentaryWorkRoutine}
				required
			>
				<option value="">Select one option</option>
				<option value="yes">Yes</option>
				<option value="no">No</option>
			</select>
		</p>

		{#if shouldShowDetails(hasSedentaryWorkRoutine)}
			<p>
				<label for="routineObservations">Routine observations</label>
				<textarea id="routineObservations" name="routineObservations" rows="4" required></textarea>
			</p>
		{/if}
	</fieldset>

	<fieldset>
		<legend>10. Basic nutrition and hydration</legend>

		<p>
			<label for="mealRoutine">Basic meal routine</label>
			<textarea id="mealRoutine" name="mealRoutine" rows="4"></textarea>
		</p>

		<p>
			<label for="dailyWaterIntake">Estimated daily water intake</label>
			<input id="dailyWaterIntake" name="dailyWaterIntake" type="text" />
		</p>

		<p>
			<label for="nutritionFollowUpStatus">Currently has nutritional follow-up?</label>
			<select id="nutritionFollowUpStatus" name="nutritionFollowUpStatus">
				<option value="">Select one option</option>
				<option value="yes">Yes</option>
				<option value="no">No</option>
				<option value="unknown">I do not know</option>
			</select>
		</p>
	</fieldset>

	<fieldset>
		<legend>11. Female/reproductive health, conditional</legend>

		<p>
			<label for="reproductiveSectionApplies">Does this section apply to the client?</label>
			<select
				id="reproductiveSectionApplies"
				name="reproductiveSectionApplies"
				bind:value={reproductiveSectionApplies}
				required
			>
				<option value="">Select one option</option>
				<option value="yes">Yes</option>
				<option value="no">No</option>
				<option value="prefers-not-to-answer">Prefers not to answer</option>
			</select>
		</p>

		{#if reproductiveQuestionsVisible}
			<p>
				<label for="isPregnantOrSuspectsPregnancy">Pregnant or suspects pregnancy?</label>
				<select
					id="isPregnantOrSuspectsPregnancy"
					name="isPregnantOrSuspectsPregnancy"
					bind:value={isPregnantOrSuspectsPregnancy}
					required
				>
					<option value="">Select one option</option>
					<option value="yes">Yes</option>
					<option value="no">No</option>
					<option value="unknown">I do not know</option>
				</select>
			</p>

			<p>
				<label for="isPostpartum">Postpartum?</label>
				<select id="isPostpartum" name="isPostpartum" bind:value={isPostpartum} required>
					<option value="">Select one option</option>
					<option value="yes">Yes</option>
					<option value="no">No</option>
				</select>
			</p>

			<p>
				<label for="isBreastfeeding">Currently breastfeeding?</label>
				<select id="isBreastfeeding" name="isBreastfeeding" bind:value={isBreastfeeding} required>
					<option value="">Select one option</option>
					<option value="yes">Yes</option>
					<option value="no">No</option>
				</select>
			</p>

			<p>
				<label for="hasRegularMenstrualCycle">Regular menstrual cycle?</label>
				<select
					id="hasRegularMenstrualCycle"
					name="hasRegularMenstrualCycle"
					bind:value={hasRegularMenstrualCycle}
					required
				>
					<option value="">Select one option</option>
					<option value="yes">Yes</option>
					<option value="no">No</option>
					<option value="not-applicable">Not applicable</option>
				</select>
			</p>

			<p>
				<label for="usesHormonalContraceptiveOrIud"> Uses hormonal contraceptive or IUD? </label>
				<select
					id="usesHormonalContraceptiveOrIud"
					name="usesHormonalContraceptiveOrIud"
					bind:value={usesHormonalContraceptiveOrIud}
					required
				>
					<option value="">Select one option</option>
					<option value="yes">Yes</option>
					<option value="no">No</option>
				</select>
			</p>

			{#if reproductiveNotesVisible || hasRegularMenstrualCycle === 'no'}
				<p>
					<label for="reproductiveHealthNotes">Relevant reproductive health observations</label>
					<textarea id="reproductiveHealthNotes" name="reproductiveHealthNotes" rows="4" required
					></textarea>
				</p>
			{/if}
		{/if}
	</fieldset>

	<fieldset>
		<legend>12. Final notes</legend>

		<p>
			<label for="generalAnamnesisNotes">Final observations</label>
			<textarea id="generalAnamnesisNotes" name="generalAnamnesisNotes" rows="5"></textarea>
		</p>

		<p>
			The automatic technical summary will be generated from saved answers after persistence and
			domain rules exist.
		</p>
	</fieldset>

	<fieldset>
		<legend>13. Truth confirmation</legend>

		<p>
			<label for="finalTruthConfirmationAccepted">
				<input
					id="finalTruthConfirmationAccepted"
					name="finalTruthConfirmationAccepted"
					type="checkbox"
					required
				/>
				The client or legal responsible confirms the information is true and complete to the best of their
				knowledge.
			</label>
		</p>

		<p>
			<label for="professionalReviewConfirmationAccepted">
				<input
					id="professionalReviewConfirmationAccepted"
					name="professionalReviewConfirmationAccepted"
					type="checkbox"
					required
				/>
				The professional responsible reviewed the provided information.
			</label>
		</p>

		<p>
			<label for="truthConfirmationDate">Truth confirmation date</label>
			<input id="truthConfirmationDate" name="truthConfirmationDate" type="date" required />
		</p>
	</fieldset>

	<p>
		<button type="button">Static form only - data is not saved yet</button>
	</p>
</form>

<p><a href={resolve('/clients')}>Return to clients</a></p>
