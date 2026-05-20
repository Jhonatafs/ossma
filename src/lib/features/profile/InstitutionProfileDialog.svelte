<script lang="ts">
	import type { ContactEntry, EntityId, Institution, Professional } from '$lib/db/types';
	import type { CreateInstitutionInput } from '$lib/features/institutions/institution-types';
	import { interfacePreferences } from '$lib/features/settings/interface-preferences-store';
	import * as m from '$lib/paraglide/messages';
	import LucideIcon from '$lib/shared/components/icons/LucideIcon.svelte';
	import { translate } from '$lib/shared/utils/i18n';

	import ContactListEditor from './ContactListEditor.svelte';
	import ProfessionalPickerOverlay from './ProfessionalPickerOverlay.svelte';
	import ProfileAvatar from './ProfileAvatar.svelte';

	type InstitutionFormState = {
		name: string;
		tradeName: string;
		document: string;
		address: string;
		contacts: ContactEntry[];
		footerText: string;
		notes: string;
		logoDataUrl: string;
	};

	let {
		institution,
		professionals,
		onCancel,
		onSave
	}: {
		institution?: Institution;
		professionals: Professional[];
		onCancel: () => void;
		onSave: (
			input: CreateInstitutionInput,
			linkedProfessionalIds: EntityId[],
			id?: EntityId
		) => Promise<void>;
	} = $props();

	let form = $state<InstitutionFormState>(createForm());
	let linkedProfessionalIds = $state<EntityId[]>([]);
	let formError = $state(false);
	let isSaving = $state(false);
	let isProfessionalPickerOpen = $state(false);

	const dialogTitle = $derived(
		institution
			? translate(m.profile_edit_institution_profile, $interfacePreferences.language)
			: translate(m.profile_create_institution_profile, $interfacePreferences.language)
	);

	function createForm(profile?: Institution): InstitutionFormState {
		return {
			name: profile?.name ?? '',
			tradeName: profile?.tradeName ?? '',
			document: profile?.document ?? '',
			address: profile?.address ?? '',
			contacts: createContactFormEntries(profile),
			footerText: profile?.footerText ?? '',
			notes: profile?.notes ?? '',
			logoDataUrl: profile?.logoDataUrl ?? profile?.photoDataUrl ?? ''
		};
	}

	function createContactFormEntries(profile?: Institution): ContactEntry[] {
		if (profile?.contacts?.length) {
			return profile.contacts.map((contact) => ({ ...contact }));
		}

		return [
			profile?.phone
				? {
						id: 'legacy-phone',
						type: 'phone',
						value: profile.phone
					}
				: undefined,
			profile?.email
				? {
						id: 'legacy-email',
						type: 'email',
						value: profile.email
					}
				: undefined
		].filter((contact): contact is ContactEntry => Boolean(contact));
	}

	function createLinkedProfessionalIds(profile?: Institution): EntityId[] {
		if (!profile) {
			return [];
		}

		return professionals
			.filter((professional) => professional.institutionId === profile.id)
			.map((professional) => professional.id);
	}

	const linkedProfessionals = $derived(
		professionals.filter((professional) => linkedProfessionalIds.includes(professional.id))
	);

	$effect(() => {
		form = createForm(institution);
		linkedProfessionalIds = createLinkedProfessionalIds(institution);
		formError = false;
	});

	function optionalString(value: string): string | undefined {
		const normalizedValue = value.trim();

		return normalizedValue || undefined;
	}

	function normalizeContacts(contacts: ContactEntry[]): ContactEntry[] {
		return contacts
			.map((contact) => ({
				id: contact.id,
				type: contact.type,
				label: optionalString(contact.label ?? ''),
				value: contact.value.trim()
			}))
			.filter((contact) => contact.value);
	}

	function readImageAsDataUrl(file: File): Promise<string> {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();

			reader.addEventListener('load', () => {
				if (typeof reader.result === 'string') {
					resolve(reader.result);
					return;
				}

				reject(new Error('Unable to read image data.'));
			});
			reader.addEventListener('error', () => reject(reader.error));
			reader.readAsDataURL(file);
		});
	}

	async function handlePhotoChange(event: Event) {
		const input = event.currentTarget;

		if (!(input instanceof HTMLInputElement)) {
			return;
		}

		const file = input.files?.[0];

		if (!file || !file.type.startsWith('image/')) {
			return;
		}

		form.logoDataUrl = await readImageAsDataUrl(file);
	}

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

	function openProfessionalPicker() {
		isProfessionalPickerOpen = true;
	}

	function closeProfessionalPicker() {
		isProfessionalPickerOpen = false;
	}

	function confirmProfessionalLinks(selectedIds: EntityId[]) {
		linkedProfessionalIds = [...new Set(selectedIds)];
		closeProfessionalPicker();
	}

	function unlinkProfessional(id: EntityId) {
		linkedProfessionalIds = linkedProfessionalIds.filter((professionalId) => professionalId !== id);
	}

	async function handleSubmit(event: SubmitEvent) {
		event.preventDefault();

		const name = form.name.trim();
		formError = !name;

		if (!name) {
			return;
		}

		isSaving = true;
		await onSave(
			{
				name,
				tradeName: optionalString(form.tradeName),
				document: optionalString(form.document),
				address: optionalString(form.address),
				contacts: normalizeContacts(form.contacts),
				footerText: optionalString(form.footerText),
				notes: optionalString(form.notes),
				logoDataUrl: optionalString(form.logoDataUrl)
			},
			linkedProfessionalIds,
			institution?.id
		);
		isSaving = false;
	}
</script>

<div class="profile-dialog-backdrop" role="presentation">
	<div
		class="profile-dialog stack"
		role="dialog"
		aria-modal="true"
		aria-labelledby="institution-dialog-title"
	>
		<div class="profile-dialog-header">
			<h2 id="institution-dialog-title" class="section-title">{dialogTitle}</h2>
			<button type="button" class="button button-secondary" onclick={onCancel}>
				{translate(m.action_cancel, $interfacePreferences.language)}
			</button>
		</div>

		<form class="profile-form stack" onsubmit={handleSubmit}>
			<div class="profile-photo-field">
				<ProfileAvatar
					name={form.tradeName ||
						form.name ||
						translate(m.profile_no_photo, $interfacePreferences.language)}
					photoDataUrl={form.logoDataUrl}
				/>
				<div class="profile-field">
					<label for="institution-photo">
						{translate(m.institution_logo, $interfacePreferences.language)}
					</label>
					<input id="institution-photo" type="file" accept="image/*" onchange={handlePhotoChange} />
				</div>
			</div>

			<div class="profile-form-grid">
				<div class="profile-field">
					<label for="institution-name">
						{translate(m.field_name, $interfacePreferences.language)}
					</label>
					<input id="institution-name" bind:value={form.name} required aria-invalid={formError} />
					{#if formError}
						<p class="profile-error">
							{translate(m.validation_required, $interfacePreferences.language)}
						</p>
					{/if}
				</div>

				<div class="profile-field">
					<label for="institution-trade-name">
						{translate(m.field_trade_name, $interfacePreferences.language)}
					</label>
					<input id="institution-trade-name" bind:value={form.tradeName} />
				</div>

				<div class="profile-field">
					<label for="institution-document">
						{translate(m.field_document, $interfacePreferences.language)}
					</label>
					<input id="institution-document" bind:value={form.document} />
				</div>

				<div class="profile-field profile-field--wide">
					<label for="institution-address">
						{translate(m.field_address, $interfacePreferences.language)}
					</label>
					<input id="institution-address" bind:value={form.address} />
				</div>

				<div class="profile-field profile-field--wide">
					<label for="institution-footer-text">
						{translate(m.field_footer_text, $interfacePreferences.language)}
					</label>
					<textarea id="institution-footer-text" bind:value={form.footerText}></textarea>
				</div>

				<div class="profile-field profile-field--wide">
					<label for="institution-notes">
						{translate(m.field_notes, $interfacePreferences.language)}
					</label>
					<textarea id="institution-notes" bind:value={form.notes}></textarea>
				</div>
			</div>

			<ContactListEditor bind:contacts={form.contacts} />

			<section class="profile-linked-picker stack" aria-labelledby="linked-professionals-title">
				<div class="profile-linked-header">
					<div class="stack-xs">
						<h3 id="linked-professionals-title" class="section-subtitle">
							{translate(m.profile_linked_professionals, $interfacePreferences.language)}
						</h3>
						<p class="section-description">
							{translate(
								m.profile_linked_professionals_description,
								$interfacePreferences.language
							)}
						</p>
					</div>
					<button type="button" class="button button-secondary" onclick={openProfessionalPicker}>
						<LucideIcon name="plus" size={22} />
						{translate(m.profile_link_professionals, $interfacePreferences.language)}
					</button>
				</div>

				{#if professionals.length === 0}
					<p class="profile-empty">
						{translate(m.profile_no_professionals_registered, $interfacePreferences.language)}
					</p>
				{:else if linkedProfessionals.length === 0}
					<div class="profile-linked-empty">
						<p>{translate(m.profile_no_linked_professionals, $interfacePreferences.language)}</p>
						<p>
							{translate(
								m.profile_no_linked_professionals_description,
								$interfacePreferences.language
							)}
						</p>
					</div>
				{:else}
					<ul class="linked-professionals-list">
						{#each linkedProfessionals as professional (professional.id)}
							{@const professionalName = getProfessionalName(professional)}
							<li class="linked-professional-item">
								<ProfileAvatar name={professionalName} photoDataUrl={professional.photoDataUrl} />
								<div class="linked-professional-summary">
									<p class="profile-primary-line">{professionalName}</p>
									<p class="profile-meta-line">{getProfessionalSummary(professional)}</p>
								</div>
								<button
									type="button"
									class="icon-button"
									aria-label={`${translate(m.profile_unlink_professional, $interfacePreferences.language)}: ${professionalName}`}
									title={`${translate(m.profile_unlink_professional, $interfacePreferences.language)}: ${professionalName}`}
									onclick={() => unlinkProfessional(professional.id)}
								>
									<LucideIcon name="x" size={22} />
								</button>
							</li>
						{/each}
					</ul>
				{/if}
			</section>

			<div class="profile-actions">
				<button type="submit" class="button" disabled={isSaving}>
					{translate(m.action_save, $interfacePreferences.language)}
				</button>
				<button type="button" class="button button-secondary" onclick={onCancel}>
					{translate(m.action_cancel, $interfacePreferences.language)}
				</button>
			</div>
		</form>
	</div>
</div>

{#if isProfessionalPickerOpen}
	<ProfessionalPickerOverlay
		{professionals}
		selectedIds={linkedProfessionalIds}
		onCancel={closeProfessionalPicker}
		onConfirm={confirmProfessionalLinks}
	/>
{/if}
