<script lang="ts">
	import type { EntityId, Professional } from '$lib/db/types';
	import { interfacePreferences } from '$lib/features/settings/interface-preferences-store';
	import * as m from '$lib/paraglide/messages';
	import LucideIcon from '$lib/shared/components/icons/LucideIcon.svelte';
	import { translate } from '$lib/shared/utils/i18n';

	import ProfileAvatar from './ProfileAvatar.svelte';

	let {
		professionals,
		selectedIds,
		onCancel,
		onConfirm
	}: {
		professionals: Professional[];
		selectedIds: EntityId[];
		onCancel: () => void;
		onConfirm: (selectedIds: EntityId[]) => void;
	} = $props();

	let searchTerm = $state('');
	let draftSelectedIds = $derived([...selectedIds]);

	const normalizedSearchTerm = $derived(searchTerm.trim().toLocaleLowerCase());
	const filteredProfessionals = $derived(
		professionals.filter((professional) => {
			if (!normalizedSearchTerm) {
				return true;
			}

			return [
				getProfessionalName(professional),
				professional.profession,
				professional.specialty,
				professional.education,
				professional.professionalRegistry
			]
				.filter(Boolean)
				.join(' ')
				.toLocaleLowerCase()
				.includes(normalizedSearchTerm);
		})
	);

	function getProfessionalName(professional: Professional): string {
		return [professional.prefix, professional.displayName || professional.fullName]
			.filter(Boolean)
			.join(' ');
	}

	function getProfessionalSummary(professional: Professional): string {
		return [
			professional.profession || translate(m.profile_stamp_role, $interfacePreferences.language),
			professional.specialty,
			professional.professionalRegistry
		]
			.filter(Boolean)
			.join(' / ');
	}

	function isSelected(id: EntityId): boolean {
		return draftSelectedIds.includes(id);
	}

	function toggleProfessional(id: EntityId) {
		draftSelectedIds = isSelected(id)
			? draftSelectedIds.filter((professionalId) => professionalId !== id)
			: [...draftSelectedIds, id];
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			onCancel();
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<div class="professional-picker-backdrop" role="presentation">
	<div
		class="professional-picker-panel"
		role="dialog"
		aria-modal="true"
		aria-labelledby="professional-picker-title"
	>
		<div class="professional-picker-header">
			<div class="stack-xs">
				<h2 id="professional-picker-title" class="section-title">
					{translate(m.profile_link_professionals, $interfacePreferences.language)}
				</h2>
				<p class="section-description">
					{translate(m.profile_link_professionals_description, $interfacePreferences.language)}
				</p>
			</div>
			<button
				type="button"
				class="button button-secondary"
				aria-label={translate(m.action_cancel, $interfacePreferences.language)}
				title={translate(m.action_cancel, $interfacePreferences.language)}
				onclick={onCancel}
			>
				<LucideIcon name="x" size={22} />
				{translate(m.action_cancel, $interfacePreferences.language)}
			</button>
		</div>

		<div class="profile-field professional-picker-search">
			<label for="professional-picker-search" class="sr-only">
				{translate(m.profile_search_professional, $interfacePreferences.language)}
			</label>
			<input
				id="professional-picker-search"
				type="search"
				bind:value={searchTerm}
				placeholder={translate(m.profile_search_professional, $interfacePreferences.language)}
			/>
		</div>

		{#if professionals.length === 0}
			<p class="profile-empty">
				{translate(m.profile_no_professionals_registered, $interfacePreferences.language)}
			</p>
		{:else if filteredProfessionals.length === 0}
			<p class="profile-empty">
				{translate(m.profile_no_professionals_found, $interfacePreferences.language)}
			</p>
		{:else}
			<div class="professional-picker-grid">
				{#each filteredProfessionals as professional (professional.id)}
					{@const professionalName = getProfessionalName(professional)}
					{@const selected = isSelected(professional.id)}
					<button
						type="button"
						class={`professional-picker-card ${selected ? 'professional-picker-card--selected' : ''}`}
						aria-pressed={selected}
						onclick={() => toggleProfessional(professional.id)}
					>
						<ProfileAvatar name={professionalName} photoDataUrl={professional.photoDataUrl} />
						<span class="professional-picker-card-main">
							<span class="profile-primary-line">{professionalName}</span>
							<span class="profile-meta-line">{getProfessionalSummary(professional)}</span>
						</span>
						<span class="professional-picker-card-state">
							{#if selected}
								<LucideIcon name="check" size={20} />
								{translate(m.profile_selected, $interfacePreferences.language)}
							{:else}
								{translate(m.profile_select, $interfacePreferences.language)}
							{/if}
						</span>
					</button>
				{/each}
			</div>
		{/if}

		<div class="professional-picker-footer">
			<button type="button" class="button button-secondary" onclick={onCancel}>
				{translate(m.action_cancel, $interfacePreferences.language)}
			</button>
			<button type="button" class="button" onclick={() => onConfirm(draftSelectedIds)}>
				{translate(m.profile_confirm_links, $interfacePreferences.language)}
			</button>
		</div>
	</div>
</div>
