<script lang="ts">
	import { onMount } from 'svelte';

	import type { EntityId, Institution, Professional } from '$lib/db/types';
	import type { CreateInstitutionInput } from '$lib/features/institutions/institution-types';
	import type { CreateProfessionalInput } from '$lib/features/professionals/professional-types';
	import {
		interfacePreferences,
		setActiveInstitutionId,
		setActiveProfessionalId
	} from '$lib/features/settings/interface-preferences-store';
	import * as m from '$lib/paraglide/messages';
	import { translate } from '$lib/shared/utils/i18n';

	type ProfessionalFormState = {
		fullName: string;
		displayName: string;
		profession: string;
		education: string;
		specialty: string;
		professionalRegistry: string;
		phone: string;
		email: string;
		address: string;
		notes: string;
	};

	type InstitutionFormState = {
		name: string;
		tradeName: string;
		document: string;
		phone: string;
		email: string;
		address: string;
		footerText: string;
		notes: string;
	};

	let professionals = $state<Professional[]>([]);
	let institutions = $state<Institution[]>([]);
	let professionalForm = $state<ProfessionalFormState>(createEmptyProfessionalForm());
	let institutionForm = $state<InstitutionFormState>(createEmptyInstitutionForm());
	let editingProfessionalId = $state<EntityId | undefined>();
	let editingInstitutionId = $state<EntityId | undefined>();
	let professionalFormError = $state(false);
	let institutionFormError = $state(false);

	function createEmptyProfessionalForm(): ProfessionalFormState {
		return {
			fullName: '',
			displayName: '',
			profession: '',
			education: '',
			specialty: '',
			professionalRegistry: '',
			phone: '',
			email: '',
			address: '',
			notes: ''
		};
	}

	function createEmptyInstitutionForm(): InstitutionFormState {
		return {
			name: '',
			tradeName: '',
			document: '',
			phone: '',
			email: '',
			address: '',
			footerText: '',
			notes: ''
		};
	}

	function optionalString(value: string): string | undefined {
		const normalizedValue = value.trim();

		return normalizedValue || undefined;
	}

	function buildProfessionalInput(): CreateProfessionalInput | undefined {
		const fullName = professionalForm.fullName.trim();
		professionalFormError = !fullName;

		if (!fullName) {
			return undefined;
		}

		return {
			fullName,
			displayName: optionalString(professionalForm.displayName),
			profession: optionalString(professionalForm.profession),
			education: optionalString(professionalForm.education),
			specialty: optionalString(professionalForm.specialty),
			professionalRegistry: optionalString(professionalForm.professionalRegistry),
			phone: optionalString(professionalForm.phone),
			email: optionalString(professionalForm.email),
			address: optionalString(professionalForm.address),
			notes: optionalString(professionalForm.notes)
		};
	}

	function buildInstitutionInput(): CreateInstitutionInput | undefined {
		const name = institutionForm.name.trim();
		institutionFormError = !name;

		if (!name) {
			return undefined;
		}

		return {
			name,
			tradeName: optionalString(institutionForm.tradeName),
			document: optionalString(institutionForm.document),
			phone: optionalString(institutionForm.phone),
			email: optionalString(institutionForm.email),
			address: optionalString(institutionForm.address),
			footerText: optionalString(institutionForm.footerText),
			notes: optionalString(institutionForm.notes)
		};
	}

	function resetProfessionalForm() {
		professionalForm = createEmptyProfessionalForm();
		editingProfessionalId = undefined;
		professionalFormError = false;
	}

	function resetInstitutionForm() {
		institutionForm = createEmptyInstitutionForm();
		editingInstitutionId = undefined;
		institutionFormError = false;
	}

	function syncActivePreferences() {
		const activeProfessionalId = $interfacePreferences.activeProfessionalId;
		const activeInstitutionId = $interfacePreferences.activeInstitutionId;

		if (
			activeProfessionalId &&
			!professionals.some((professional) => professional.id === activeProfessionalId)
		) {
			setActiveProfessionalId(undefined);
		}

		if (
			activeInstitutionId &&
			!institutions.some((institution) => institution.id === activeInstitutionId)
		) {
			setActiveInstitutionId(undefined);
		}
	}

	async function loadProfileData() {
		const [professionalRepository, institutionRepository] = await Promise.all([
			import('$lib/features/professionals/professional-repository'),
			import('$lib/features/institutions/institution-repository')
		]);

		const [nextProfessionals, nextInstitutions] = await Promise.all([
			professionalRepository.listProfessionals(),
			institutionRepository.listInstitutions()
		]);

		professionals = nextProfessionals;
		institutions = nextInstitutions;
		syncActivePreferences();
	}

	async function handleProfessionalSubmit(event: SubmitEvent) {
		event.preventDefault();

		const input = buildProfessionalInput();

		if (!input) {
			return;
		}

		const { createProfessional, updateProfessional } =
			await import('$lib/features/professionals/professional-repository');

		if (editingProfessionalId) {
			await updateProfessional(editingProfessionalId, input);
		} else {
			await createProfessional(input);
		}

		resetProfessionalForm();
		await loadProfileData();
	}

	async function handleInstitutionSubmit(event: SubmitEvent) {
		event.preventDefault();

		const input = buildInstitutionInput();

		if (!input) {
			return;
		}

		const { createInstitution, updateInstitution } =
			await import('$lib/features/institutions/institution-repository');

		if (editingInstitutionId) {
			await updateInstitution(editingInstitutionId, input);
		} else {
			await createInstitution(input);
		}

		resetInstitutionForm();
		await loadProfileData();
	}

	function handleEditProfessional(professional: Professional) {
		editingProfessionalId = professional.id;
		professionalFormError = false;
		professionalForm = {
			fullName: professional.fullName,
			displayName: professional.displayName ?? '',
			profession: professional.profession ?? '',
			education: professional.education ?? '',
			specialty: professional.specialty ?? '',
			professionalRegistry: professional.professionalRegistry ?? '',
			phone: professional.phone ?? '',
			email: professional.email ?? '',
			address: professional.address ?? '',
			notes: professional.notes ?? ''
		};
	}

	function handleEditInstitution(institution: Institution) {
		editingInstitutionId = institution.id;
		institutionFormError = false;
		institutionForm = {
			name: institution.name,
			tradeName: institution.tradeName ?? '',
			document: institution.document ?? '',
			phone: institution.phone ?? '',
			email: institution.email ?? '',
			address: institution.address ?? '',
			footerText: institution.footerText ?? '',
			notes: institution.notes ?? ''
		};
	}

	function handleSetActiveProfessional(id: EntityId) {
		setActiveProfessionalId(id);
	}

	function handleSetActiveInstitution(id: EntityId) {
		setActiveInstitutionId(id);
	}

	async function handleDeleteProfessional(professional: Professional) {
		if (!confirm(translate(m.confirm_delete_professional, $interfacePreferences.language))) {
			return;
		}

		const { softDeleteProfessional } =
			await import('$lib/features/professionals/professional-repository');

		await softDeleteProfessional(professional.id);

		if ($interfacePreferences.activeProfessionalId === professional.id) {
			setActiveProfessionalId(undefined);
		}

		if (editingProfessionalId === professional.id) {
			resetProfessionalForm();
		}

		await loadProfileData();
	}

	async function handleDeleteInstitution(institution: Institution) {
		if (!confirm(translate(m.confirm_delete_institution, $interfacePreferences.language))) {
			return;
		}

		const { softDeleteInstitution } =
			await import('$lib/features/institutions/institution-repository');

		await softDeleteInstitution(institution.id);

		if ($interfacePreferences.activeInstitutionId === institution.id) {
			setActiveInstitutionId(undefined);
		}

		if (editingInstitutionId === institution.id) {
			resetInstitutionForm();
		}

		await loadProfileData();
	}

	onMount(() => {
		void loadProfileData();
	});
</script>

<svelte:head>
	<title>
		{translate(m.profile_title, $interfacePreferences.language)} · {translate(
			m.app_name,
			$interfacePreferences.language
		)}
	</title>
	<meta
		name="description"
		content={translate(m.profile_description, $interfacePreferences.language)}
	/>
</svelte:head>

<section class="page-section page-hero stack" aria-labelledby="profile-title">
	<p class="page-kicker">{translate(m.common_current, $interfacePreferences.language)}</p>
	<h1 id="profile-title" class="page-title">
		{translate(m.profile_title, $interfacePreferences.language)}
	</h1>
	<p class="page-description">
		{translate(m.profile_description, $interfacePreferences.language)}
	</p>
</section>

<div class="profile-sections">
	<section class="page-section profile-section" aria-labelledby="profile-professionals-title">
		<div class="profile-section-header stack">
			<h2 id="profile-professionals-title" class="section-title">
				{translate(m.profile_professionals_title, $interfacePreferences.language)}
			</h2>
			<p class="section-description">
				{translate(m.profile_professionals_description, $interfacePreferences.language)}
			</p>
		</div>

		<div class="profile-section-layout">
			<form
				class="profile-form stack"
				aria-labelledby="professional-form-title"
				novalidate
				onsubmit={handleProfessionalSubmit}
			>
				<h3 id="professional-form-title" class="section-subtitle">
					{translate(
						editingProfessionalId ? m.profile_update_professional : m.profile_create_professional,
						$interfacePreferences.language
					)}
				</h3>

				<div class="profile-form-grid">
					<div class="profile-field profile-field--wide">
						<label for="professional-full-name">
							{translate(m.field_full_name, $interfacePreferences.language)}
						</label>
						<input
							id="professional-full-name"
							name="fullName"
							autocomplete="name"
							aria-invalid={professionalFormError}
							aria-describedby={professionalFormError ? 'professional-full-name-error' : undefined}
							bind:value={professionalForm.fullName}
						/>
						{#if professionalFormError}
							<p id="professional-full-name-error" class="profile-error" role="alert">
								{translate(m.validation_required, $interfacePreferences.language)}
							</p>
						{/if}
					</div>

					<div class="profile-field">
						<label for="professional-display-name">
							{translate(m.field_display_name, $interfacePreferences.language)}
						</label>
						<input
							id="professional-display-name"
							name="displayName"
							bind:value={professionalForm.displayName}
						/>
					</div>

					<div class="profile-field">
						<label for="professional-profession">
							{translate(m.field_profession, $interfacePreferences.language)}
						</label>
						<input
							id="professional-profession"
							name="profession"
							bind:value={professionalForm.profession}
						/>
					</div>

					<div class="profile-field">
						<label for="professional-education">
							{translate(m.field_education, $interfacePreferences.language)}
						</label>
						<input
							id="professional-education"
							name="education"
							bind:value={professionalForm.education}
						/>
					</div>

					<div class="profile-field">
						<label for="professional-specialty">
							{translate(m.field_specialty, $interfacePreferences.language)}
						</label>
						<input
							id="professional-specialty"
							name="specialty"
							bind:value={professionalForm.specialty}
						/>
					</div>

					<div class="profile-field">
						<label for="professional-registry">
							{translate(m.field_professional_registry, $interfacePreferences.language)}
						</label>
						<input
							id="professional-registry"
							name="professionalRegistry"
							bind:value={professionalForm.professionalRegistry}
						/>
					</div>

					<div class="profile-field">
						<label for="professional-phone">
							{translate(m.field_phone, $interfacePreferences.language)}
						</label>
						<input
							id="professional-phone"
							name="phone"
							type="tel"
							autocomplete="tel"
							bind:value={professionalForm.phone}
						/>
					</div>

					<div class="profile-field">
						<label for="professional-email">
							{translate(m.field_email, $interfacePreferences.language)}
						</label>
						<input
							id="professional-email"
							name="email"
							type="email"
							autocomplete="email"
							bind:value={professionalForm.email}
						/>
					</div>

					<div class="profile-field profile-field--wide">
						<label for="professional-address">
							{translate(m.field_address, $interfacePreferences.language)}
						</label>
						<input
							id="professional-address"
							name="address"
							autocomplete="street-address"
							bind:value={professionalForm.address}
						/>
					</div>

					<div class="profile-field profile-field--wide">
						<label for="professional-notes">
							{translate(m.field_notes, $interfacePreferences.language)}
						</label>
						<textarea
							id="professional-notes"
							name="notes"
							rows="4"
							bind:value={professionalForm.notes}
						></textarea>
					</div>
				</div>

				<div class="profile-actions">
					<button type="submit" class="button">
						{translate(
							editingProfessionalId ? m.profile_update_professional : m.profile_create_professional,
							$interfacePreferences.language
						)}
					</button>

					{#if editingProfessionalId}
						<button type="button" class="button button-secondary" onclick={resetProfessionalForm}>
							{translate(m.action_cancel, $interfacePreferences.language)}
						</button>
					{/if}
				</div>
			</form>

			<div class="profile-list stack" aria-labelledby="profile-professionals-list-title">
				<h3 id="profile-professionals-list-title" class="section-subtitle">
					{translate(m.profile_professionals_title, $interfacePreferences.language)}
				</h3>

				{#if professionals.length === 0}
					<p class="profile-empty">
						{translate(m.profile_no_professionals, $interfacePreferences.language)}
					</p>
				{:else}
					<ul class="profile-record-list">
						{#each professionals as professional (professional.id)}
							<li class="profile-record">
								<div class="profile-record-main stack">
									<div class="profile-record-heading">
										<h4 class="profile-record-title">
											{professional.displayName || professional.fullName}
										</h4>
										{#if $interfacePreferences.activeProfessionalId === professional.id}
											<p class="profile-active-label">
												{translate(m.profile_active_professional, $interfacePreferences.language)}
											</p>
										{/if}
									</div>

									<dl class="profile-record-details">
										{#if professional.displayName}
											<div>
												<dt>{translate(m.field_full_name, $interfacePreferences.language)}</dt>
												<dd>{professional.fullName}</dd>
											</div>
										{/if}
										{#if professional.profession}
											<div>
												<dt>{translate(m.field_profession, $interfacePreferences.language)}</dt>
												<dd>{professional.profession}</dd>
											</div>
										{/if}
										{#if professional.specialty}
											<div>
												<dt>{translate(m.field_specialty, $interfacePreferences.language)}</dt>
												<dd>{professional.specialty}</dd>
											</div>
										{/if}
										{#if professional.email}
											<div>
												<dt>{translate(m.field_email, $interfacePreferences.language)}</dt>
												<dd>{professional.email}</dd>
											</div>
										{/if}
									</dl>
								</div>

								<div class="profile-actions">
									{#if $interfacePreferences.activeProfessionalId !== professional.id}
										<button
											type="button"
											class="button button-secondary"
											onclick={() => handleSetActiveProfessional(professional.id)}
										>
											{translate(m.profile_set_active_professional, $interfacePreferences.language)}
										</button>
									{/if}
									<button
										type="button"
										class="button button-secondary"
										onclick={() => handleEditProfessional(professional)}
									>
										{translate(m.action_edit, $interfacePreferences.language)}
									</button>
									<button
										type="button"
										class="button button-secondary"
										onclick={() => handleDeleteProfessional(professional)}
									>
										{translate(m.action_delete, $interfacePreferences.language)}
									</button>
								</div>
							</li>
						{/each}
					</ul>
				{/if}
			</div>
		</div>
	</section>

	<section class="page-section profile-section" aria-labelledby="profile-institutions-title">
		<div class="profile-section-header stack">
			<h2 id="profile-institutions-title" class="section-title">
				{translate(m.profile_institutions_title, $interfacePreferences.language)}
			</h2>
			<p class="section-description">
				{translate(m.profile_institutions_description, $interfacePreferences.language)}
			</p>
		</div>

		<div class="profile-section-layout">
			<form
				class="profile-form stack"
				aria-labelledby="institution-form-title"
				novalidate
				onsubmit={handleInstitutionSubmit}
			>
				<h3 id="institution-form-title" class="section-subtitle">
					{translate(
						editingInstitutionId ? m.profile_update_institution : m.profile_create_institution,
						$interfacePreferences.language
					)}
				</h3>

				<div class="profile-form-grid">
					<div class="profile-field profile-field--wide">
						<label for="institution-name">
							{translate(m.field_name, $interfacePreferences.language)}
						</label>
						<input
							id="institution-name"
							name="name"
							autocomplete="organization"
							aria-invalid={institutionFormError}
							aria-describedby={institutionFormError ? 'institution-name-error' : undefined}
							bind:value={institutionForm.name}
						/>
						{#if institutionFormError}
							<p id="institution-name-error" class="profile-error" role="alert">
								{translate(m.validation_required, $interfacePreferences.language)}
							</p>
						{/if}
					</div>

					<div class="profile-field">
						<label for="institution-trade-name">
							{translate(m.field_trade_name, $interfacePreferences.language)}
						</label>
						<input
							id="institution-trade-name"
							name="tradeName"
							bind:value={institutionForm.tradeName}
						/>
					</div>

					<div class="profile-field">
						<label for="institution-document">
							{translate(m.field_document, $interfacePreferences.language)}
						</label>
						<input
							id="institution-document"
							name="document"
							bind:value={institutionForm.document}
						/>
					</div>

					<div class="profile-field">
						<label for="institution-phone">
							{translate(m.field_phone, $interfacePreferences.language)}
						</label>
						<input
							id="institution-phone"
							name="phone"
							type="tel"
							autocomplete="tel"
							bind:value={institutionForm.phone}
						/>
					</div>

					<div class="profile-field">
						<label for="institution-email">
							{translate(m.field_email, $interfacePreferences.language)}
						</label>
						<input
							id="institution-email"
							name="email"
							type="email"
							autocomplete="email"
							bind:value={institutionForm.email}
						/>
					</div>

					<div class="profile-field profile-field--wide">
						<label for="institution-address">
							{translate(m.field_address, $interfacePreferences.language)}
						</label>
						<input
							id="institution-address"
							name="address"
							autocomplete="street-address"
							bind:value={institutionForm.address}
						/>
					</div>

					<div class="profile-field profile-field--wide">
						<label for="institution-footer-text">
							{translate(m.field_footer_text, $interfacePreferences.language)}
						</label>
						<input
							id="institution-footer-text"
							name="footerText"
							bind:value={institutionForm.footerText}
						/>
					</div>

					<div class="profile-field profile-field--wide">
						<label for="institution-notes">
							{translate(m.field_notes, $interfacePreferences.language)}
						</label>
						<textarea
							id="institution-notes"
							name="notes"
							rows="4"
							bind:value={institutionForm.notes}
						></textarea>
					</div>
				</div>

				<div class="profile-actions">
					<button type="submit" class="button">
						{translate(
							editingInstitutionId ? m.profile_update_institution : m.profile_create_institution,
							$interfacePreferences.language
						)}
					</button>

					{#if editingInstitutionId}
						<button type="button" class="button button-secondary" onclick={resetInstitutionForm}>
							{translate(m.action_cancel, $interfacePreferences.language)}
						</button>
					{/if}
				</div>
			</form>

			<div class="profile-list stack" aria-labelledby="profile-institutions-list-title">
				<h3 id="profile-institutions-list-title" class="section-subtitle">
					{translate(m.profile_institutions_title, $interfacePreferences.language)}
				</h3>

				{#if institutions.length === 0}
					<p class="profile-empty">
						{translate(m.profile_no_institutions, $interfacePreferences.language)}
					</p>
				{:else}
					<ul class="profile-record-list">
						{#each institutions as institution (institution.id)}
							<li class="profile-record">
								<div class="profile-record-main stack">
									<div class="profile-record-heading">
										<h4 class="profile-record-title">
											{institution.tradeName || institution.name}
										</h4>
										{#if $interfacePreferences.activeInstitutionId === institution.id}
											<p class="profile-active-label">
												{translate(m.profile_active_institution, $interfacePreferences.language)}
											</p>
										{/if}
									</div>

									<dl class="profile-record-details">
										{#if institution.tradeName}
											<div>
												<dt>{translate(m.field_name, $interfacePreferences.language)}</dt>
												<dd>{institution.name}</dd>
											</div>
										{/if}
										{#if institution.document}
											<div>
												<dt>{translate(m.field_document, $interfacePreferences.language)}</dt>
												<dd>{institution.document}</dd>
											</div>
										{/if}
										{#if institution.email}
											<div>
												<dt>{translate(m.field_email, $interfacePreferences.language)}</dt>
												<dd>{institution.email}</dd>
											</div>
										{/if}
										{#if institution.phone}
											<div>
												<dt>{translate(m.field_phone, $interfacePreferences.language)}</dt>
												<dd>{institution.phone}</dd>
											</div>
										{/if}
									</dl>
								</div>

								<div class="profile-actions">
									{#if $interfacePreferences.activeInstitutionId !== institution.id}
										<button
											type="button"
											class="button button-secondary"
											onclick={() => handleSetActiveInstitution(institution.id)}
										>
											{translate(m.profile_set_active_institution, $interfacePreferences.language)}
										</button>
									{/if}
									<button
										type="button"
										class="button button-secondary"
										onclick={() => handleEditInstitution(institution)}
									>
										{translate(m.action_edit, $interfacePreferences.language)}
									</button>
									<button
										type="button"
										class="button button-secondary"
										onclick={() => handleDeleteInstitution(institution)}
									>
										{translate(m.action_delete, $interfacePreferences.language)}
									</button>
								</div>
							</li>
						{/each}
					</ul>
				{/if}
			</div>
		</div>
	</section>
</div>
