<script lang="ts">
	import { onMount } from 'svelte';

	import type { EntityId, Institution, Professional } from '$lib/db/types';
	import type { CreateInstitutionInput } from '$lib/features/institutions/institution-types';
	import type { CreateProfessionalInput } from '$lib/features/professionals/professional-types';
	import InstitutionHeaderPreview from '$lib/features/profile/InstitutionHeaderPreview.svelte';
	import InstitutionProfileDialog from '$lib/features/profile/InstitutionProfileDialog.svelte';
	import ProfessionalProfileDialog from '$lib/features/profile/ProfessionalProfileDialog.svelte';
	import ProfessionalStampPreview from '$lib/features/profile/ProfessionalStampPreview.svelte';
	import ProfileAvatar from '$lib/features/profile/ProfileAvatar.svelte';
	import {
		interfacePreferences,
		setActiveInstitutionId,
		setActiveProfessionalId
	} from '$lib/features/settings/interface-preferences-store';
	import * as m from '$lib/paraglide/messages';
	import LucideIcon from '$lib/shared/components/icons/LucideIcon.svelte';
	import { translate } from '$lib/shared/utils/i18n';

	type ProfileTab = 'professionals' | 'institutions';

	let professionals = $state<Professional[]>([]);
	let institutions = $state<Institution[]>([]);
	let activeTab = $state<ProfileTab>('professionals');
	let isProfileTypePanelOpen = $state(false);
	let professionalDialog = $state<{ professional?: Professional } | undefined>();
	let institutionDialog = $state<{ institution?: Institution } | undefined>();
	let professionalPreview = $state<Professional | undefined>();
	let institutionPreview = $state<Institution | undefined>();
	let isLoading = $state(true);

	function getProfessionalName(professional: Professional): string {
		return [professional.prefix, professional.displayName || professional.fullName]
			.filter(Boolean)
			.join(' ');
	}

	function getInstitutionName(institution: Institution): string {
		return institution.tradeName || institution.name;
	}

	function getInstitutionById(id?: EntityId): Institution | undefined {
		return institutions.find((institution) => institution.id === id);
	}

	function getProfessionalSummary(professional: Professional): string {
		const institution = getInstitutionById(professional.institutionId);
		const details = [
			translate(m.profile_stamp_role, $interfacePreferences.language),
			professional.profession,
			professional.specialty,
			professional.professionalRegistry
		].filter(Boolean);

		if (institution) {
			details.push(
				`${translate(m.profile_linked_to, $interfacePreferences.language)}: ${getInstitutionName(institution)}`
			);
		}

		return details.join(' / ');
	}

	function getInstitutionSummary(institution: Institution): string {
		return [translate(m.profile_header_role, $interfacePreferences.language), institution.document]
			.filter(Boolean)
			.join(' / ');
	}

	function isActiveProfessional(id: EntityId): boolean {
		return $interfacePreferences.activeProfessionalId === id;
	}

	function isActiveInstitution(id: EntityId): boolean {
		return $interfacePreferences.activeInstitutionId === id;
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
		isLoading = false;
	}

	function openProfileTypeChooser() {
		closeDialogs();
		isProfileTypePanelOpen = true;
	}

	function closeProfileTypePanel() {
		isProfileTypePanelOpen = false;
	}

	function openCreateProfessionalDialog() {
		isProfileTypePanelOpen = false;
		institutionDialog = undefined;
		professionalPreview = undefined;
		institutionPreview = undefined;
		professionalDialog = {};
	}

	function openEditProfessionalDialog(professional: Professional) {
		isProfileTypePanelOpen = false;
		institutionDialog = undefined;
		professionalPreview = undefined;
		institutionPreview = undefined;
		professionalDialog = { professional };
	}

	function openCreateInstitutionDialog() {
		isProfileTypePanelOpen = false;
		professionalDialog = undefined;
		professionalPreview = undefined;
		institutionPreview = undefined;
		institutionDialog = {};
	}

	function openEditInstitutionDialog(institution: Institution) {
		isProfileTypePanelOpen = false;
		professionalDialog = undefined;
		professionalPreview = undefined;
		institutionPreview = undefined;
		institutionDialog = { institution };
	}

	function openProfessionalPreview(professional: Professional) {
		isProfileTypePanelOpen = false;
		professionalDialog = undefined;
		institutionDialog = undefined;
		institutionPreview = undefined;
		professionalPreview = professional;
	}

	function openInstitutionPreview(institution: Institution) {
		isProfileTypePanelOpen = false;
		professionalDialog = undefined;
		institutionDialog = undefined;
		professionalPreview = undefined;
		institutionPreview = institution;
	}

	function closeDialogs() {
		professionalDialog = undefined;
		institutionDialog = undefined;
		professionalPreview = undefined;
		institutionPreview = undefined;
	}

	function setActiveTab(tab: ProfileTab) {
		activeTab = tab;
		closeProfileTypePanel();
	}

	function getProfileActionLabel(actionLabel: string, profileName: string): string {
		return `${actionLabel} ${translate(m.profile_title, $interfacePreferences.language).toLowerCase()}: ${profileName}`;
	}

	function getProfileStateActionLabel(actionLabel: string, profileName: string): string {
		return `${actionLabel}: ${profileName}`;
	}

	async function handleSaveProfessional(input: CreateProfessionalInput, id?: EntityId) {
		const { createProfessional, updateProfessional } =
			await import('$lib/features/professionals/professional-repository');

		if (id) {
			await updateProfessional(id, input);
		} else {
			await createProfessional(input);
		}

		closeDialogs();
		await loadProfileData();
	}

	async function handleSaveInstitution(
		input: CreateInstitutionInput,
		linkedProfessionalIds: EntityId[],
		id?: EntityId
	) {
		const { createInstitution, updateInstitution } =
			await import('$lib/features/institutions/institution-repository');

		const savedInstitution = id
			? await updateInstitution(id, input)
			: await createInstitution(input);

		if (savedInstitution) {
			await syncInstitutionProfessionals(savedInstitution.id, linkedProfessionalIds);
		}

		closeDialogs();
		await loadProfileData();
	}

	async function syncInstitutionProfessionals(
		institutionId: EntityId,
		linkedProfessionalIds: EntityId[]
	) {
		const { updateProfessional } =
			await import('$lib/features/professionals/professional-repository');
		const linkedProfessionalIdSet = new Set(linkedProfessionalIds);

		await Promise.all(
			professionals.map(async (professional) => {
				if (linkedProfessionalIdSet.has(professional.id)) {
					if (professional.institutionId !== institutionId) {
						await updateProfessional(professional.id, { institutionId });
					}

					return;
				}

				if (professional.institutionId === institutionId) {
					await updateProfessional(professional.id, { institutionId: undefined });
				}
			})
		);
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

		await syncInstitutionProfessionals(institution.id, []);
		await loadProfileData();
	}

	onMount(() => {
		void loadProfileData();
	});
</script>

<svelte:head>
	<title>{translate(m.profile_title, $interfacePreferences.language)}</title>
	<meta
		name="description"
		content={translate(m.profile_description, $interfacePreferences.language)}
	/>
</svelte:head>

<div class="profile-index stack-lg">
	<section class="page-section page-hero stack" aria-labelledby="profile-title">
		<h1 id="profile-title" class="page-title">
			{translate(m.profile_title, $interfacePreferences.language)}
		</h1>
		<p class="page-description">
			{translate(m.profile_description, $interfacePreferences.language)}
		</p>
		<div class="profile-page-actions">
			<button
				type="button"
				class="button profile-new-profile-button"
				aria-label={translate(m.profile_new_profile, $interfacePreferences.language)}
				onclick={openProfileTypeChooser}
			>
				<LucideIcon name="plus" size={22} />
				{translate(m.profile_new_profile, $interfacePreferences.language)}
			</button>
		</div>
	</section>

	{#if isProfileTypePanelOpen}
		<section class="profile-type-panel" aria-labelledby="profile-type-panel-title">
			<div class="profile-type-panel-header">
				<h2 id="profile-type-panel-title" class="section-title">
					{translate(m.profile_choose_profile_type, $interfacePreferences.language)}
				</h2>
				<button
					type="button"
					class="button button-secondary"
					aria-label={translate(m.action_cancel, $interfacePreferences.language)}
					title={translate(m.action_cancel, $interfacePreferences.language)}
					onclick={closeProfileTypePanel}
				>
					<LucideIcon name="x" size={22} />
					{translate(m.action_cancel, $interfacePreferences.language)}
				</button>
			</div>

			<div class="profile-type-options">
				<button type="button" class="profile-type-option" onclick={openCreateProfessionalDialog}>
					<span class="profile-type-option-icon" aria-hidden="true">
						<LucideIcon name="user-round" size={32} />
					</span>
					<span class="profile-type-option-title">
						{translate(m.profile_create_professional_profile, $interfacePreferences.language)}
					</span>
					<span class="profile-type-option-description">
						{translate(
							m.profile_create_professional_profile_description,
							$interfacePreferences.language
						)}
					</span>
				</button>

				<button type="button" class="profile-type-option" onclick={openCreateInstitutionDialog}>
					<span class="profile-type-option-icon" aria-hidden="true">
						<LucideIcon name="building-2" size={32} />
					</span>
					<span class="profile-type-option-title">
						{translate(m.profile_create_institution_profile, $interfacePreferences.language)}
					</span>
					<span class="profile-type-option-description">
						{translate(
							m.profile_create_institution_profile_description,
							$interfacePreferences.language
						)}
					</span>
				</button>
			</div>
		</section>
	{:else}
		<div class="profile-toolbar">
			<div
				class="profile-tabs"
				role="tablist"
				aria-label={translate(m.profile_title, $interfacePreferences.language)}
			>
				<button
					id="profile-tab-professionals"
					type="button"
					class="profile-tab"
					role="tab"
					aria-selected={activeTab === 'professionals'}
					aria-controls="profile-panel-professionals"
					onclick={() => setActiveTab('professionals')}
				>
					{translate(m.profile_professional_profiles, $interfacePreferences.language)}
				</button>
				<button
					id="profile-tab-institutions"
					type="button"
					class="profile-tab"
					role="tab"
					aria-selected={activeTab === 'institutions'}
					aria-controls="profile-panel-institutions"
					onclick={() => setActiveTab('institutions')}
				>
					{translate(m.profile_institution_profiles, $interfacePreferences.language)}
				</button>
			</div>
		</div>

		{#if activeTab === 'professionals'}
			<div
				id="profile-panel-professionals"
				class="profile-section"
				role="tabpanel"
				aria-labelledby="profile-tab-professionals"
			>
				<div class="profile-section-header stack">
					<h2 id="professional-profiles-title" class="section-title">
						{translate(m.profile_professional_profiles, $interfacePreferences.language)}
					</h2>
					<p class="section-description">
						{translate(m.profile_professionals_description, $interfacePreferences.language)}
					</p>
				</div>

				{#if !isLoading && professionals.length === 0}
					<div class="profile-empty-state">
						<p>
							{translate(m.profile_no_professionals_registered, $interfacePreferences.language)}
						</p>
						<p class="profile-empty-hint">
							{translate(m.profile_empty_professional_hint, $interfacePreferences.language)}
						</p>
					</div>
				{:else}
					<ul
						class="profile-list"
						aria-label={translate(m.profile_professional_profiles, $interfacePreferences.language)}
					>
						{#each professionals as professional (professional.id)}
							{@const professionalName = getProfessionalName(professional)}
							<li class="profile-list-item">
								<ProfileAvatar name={professionalName} photoDataUrl={professional.photoDataUrl} />

								<div class="profile-summary">
									<p class="profile-primary-line">{professionalName}</p>
									<p class="profile-id-line">
										{translate(m.profile_id, $interfacePreferences.language)}: {professional.id}
									</p>
									<p class="profile-meta-line">{getProfessionalSummary(professional)}</p>
									{#if isActiveProfessional(professional.id)}
										<p class="profile-active-label">
											{translate(m.profile_active, $interfacePreferences.language)}
										</p>
									{/if}
								</div>

								<div class="profile-row-actions">
									<button
										type="button"
										class="icon-button"
										aria-label={getProfileActionLabel(
											translate(m.action_view, $interfacePreferences.language),
											professionalName
										)}
										title={getProfileActionLabel(
											translate(m.action_view, $interfacePreferences.language),
											professionalName
										)}
										onclick={() => openProfessionalPreview(professional)}
									>
										<LucideIcon name="eye" size={22} />
									</button>
									<button
										type="button"
										class="icon-button"
										aria-label={getProfileActionLabel(
											translate(m.action_edit, $interfacePreferences.language),
											professionalName
										)}
										title={getProfileActionLabel(
											translate(m.action_edit, $interfacePreferences.language),
											professionalName
										)}
										onclick={() => openEditProfessionalDialog(professional)}
									>
										<LucideIcon name="edit-3" size={22} />
									</button>
									<button
										type="button"
										class="icon-button"
										aria-label={getProfileStateActionLabel(
											translate(m.profile_set_active, $interfacePreferences.language),
											professionalName
										)}
										title={getProfileStateActionLabel(
											translate(m.profile_set_active, $interfacePreferences.language),
											professionalName
										)}
										onclick={() => handleSetActiveProfessional(professional.id)}
										disabled={isActiveProfessional(professional.id)}
									>
										<LucideIcon name="clipboard-check" size={22} />
									</button>
									<button
										type="button"
										class="icon-button"
										aria-label={getProfileActionLabel(
											translate(m.action_delete, $interfacePreferences.language),
											professionalName
										)}
										title={getProfileActionLabel(
											translate(m.action_delete, $interfacePreferences.language),
											professionalName
										)}
										onclick={() => handleDeleteProfessional(professional)}
									>
										<LucideIcon name="trash-2" size={22} />
									</button>
								</div>
							</li>
						{/each}
					</ul>
				{/if}
			</div>
		{:else}
			<div
				id="profile-panel-institutions"
				class="profile-section"
				role="tabpanel"
				aria-labelledby="profile-tab-institutions"
			>
				<div class="profile-section-header stack">
					<h2 id="institution-profiles-title" class="section-title">
						{translate(m.profile_institution_profiles, $interfacePreferences.language)}
					</h2>
					<p class="section-description">
						{translate(m.profile_institutions_description, $interfacePreferences.language)}
					</p>
				</div>

				{#if !isLoading && institutions.length === 0}
					<div class="profile-empty-state">
						<p>{translate(m.profile_no_institutions_registered, $interfacePreferences.language)}</p>
						<p class="profile-empty-hint">
							{translate(m.profile_empty_institution_hint, $interfacePreferences.language)}
						</p>
					</div>
				{:else}
					<ul
						class="profile-list"
						aria-label={translate(m.profile_institution_profiles, $interfacePreferences.language)}
					>
						{#each institutions as institution (institution.id)}
							{@const institutionName = getInstitutionName(institution)}
							<li class="profile-list-item">
								<ProfileAvatar
									name={institutionName}
									photoDataUrl={institution.logoDataUrl ?? institution.photoDataUrl}
								/>

								<div class="profile-summary">
									<p class="profile-primary-line">{institutionName}</p>
									<p class="profile-id-line">
										{translate(m.profile_id, $interfacePreferences.language)}: {institution.id}
									</p>
									<p class="profile-meta-line">{getInstitutionSummary(institution)}</p>
									{#if isActiveInstitution(institution.id)}
										<p class="profile-active-label">
											{translate(m.profile_active, $interfacePreferences.language)}
										</p>
									{/if}
								</div>

								<div class="profile-row-actions">
									<button
										type="button"
										class="icon-button"
										aria-label={getProfileActionLabel(
											translate(m.action_view, $interfacePreferences.language),
											institutionName
										)}
										title={getProfileActionLabel(
											translate(m.action_view, $interfacePreferences.language),
											institutionName
										)}
										onclick={() => openInstitutionPreview(institution)}
									>
										<LucideIcon name="eye" size={22} />
									</button>
									<button
										type="button"
										class="icon-button"
										aria-label={getProfileActionLabel(
											translate(m.action_edit, $interfacePreferences.language),
											institutionName
										)}
										title={getProfileActionLabel(
											translate(m.action_edit, $interfacePreferences.language),
											institutionName
										)}
										onclick={() => openEditInstitutionDialog(institution)}
									>
										<LucideIcon name="edit-3" size={22} />
									</button>
									<button
										type="button"
										class="icon-button"
										aria-label={getProfileStateActionLabel(
											translate(m.profile_set_active, $interfacePreferences.language),
											institutionName
										)}
										title={getProfileStateActionLabel(
											translate(m.profile_set_active, $interfacePreferences.language),
											institutionName
										)}
										onclick={() => handleSetActiveInstitution(institution.id)}
										disabled={isActiveInstitution(institution.id)}
									>
										<LucideIcon name="clipboard-check" size={22} />
									</button>
									<button
										type="button"
										class="icon-button"
										aria-label={getProfileActionLabel(
											translate(m.action_delete, $interfacePreferences.language),
											institutionName
										)}
										title={getProfileActionLabel(
											translate(m.action_delete, $interfacePreferences.language),
											institutionName
										)}
										onclick={() => handleDeleteInstitution(institution)}
									>
										<LucideIcon name="trash-2" size={22} />
									</button>
								</div>
							</li>
						{/each}
					</ul>
				{/if}
			</div>
		{/if}
	{/if}
</div>

{#if professionalDialog}
	<ProfessionalProfileDialog
		professional={professionalDialog.professional}
		{institutions}
		onCancel={closeDialogs}
		onSave={handleSaveProfessional}
	/>
{/if}

{#if institutionDialog}
	<InstitutionProfileDialog
		institution={institutionDialog.institution}
		{professionals}
		onCancel={closeDialogs}
		onSave={handleSaveInstitution}
	/>
{/if}

{#if professionalPreview}
	<div class="profile-dialog-backdrop" role="presentation">
		<div
			class="profile-dialog profile-dialog-preview stack"
			role="dialog"
			aria-modal="true"
			aria-labelledby="professional-preview-title"
		>
			<div class="profile-dialog-header">
				<h2 id="professional-preview-title" class="section-title">
					{translate(m.profile_stamp_preview, $interfacePreferences.language)}
				</h2>
				<button type="button" class="button button-secondary" onclick={closeDialogs}>
					{translate(m.action_cancel, $interfacePreferences.language)}
				</button>
			</div>
			<ProfessionalStampPreview
				professional={professionalPreview}
				institution={getInstitutionById(professionalPreview.institutionId)}
			/>
		</div>
	</div>
{/if}

{#if institutionPreview}
	<div class="profile-dialog-backdrop" role="presentation">
		<div
			class="profile-dialog profile-dialog-preview stack"
			role="dialog"
			aria-modal="true"
			aria-labelledby="institution-preview-title"
		>
			<div class="profile-dialog-header">
				<h2 id="institution-preview-title" class="section-title">
					{translate(m.profile_header_preview, $interfacePreferences.language)}
				</h2>
				<button type="button" class="button button-secondary" onclick={closeDialogs}>
					{translate(m.action_cancel, $interfacePreferences.language)}
				</button>
			</div>
			<InstitutionHeaderPreview institution={institutionPreview} />
		</div>
	</div>
{/if}
