<script lang="ts">
	import type { ContactEntry, EntityId, Institution, Professional } from '$lib/db/types';
	import type { CreateProfessionalInput } from '$lib/features/professionals/professional-types';
	import { interfacePreferences } from '$lib/features/settings/interface-preferences-store';
	import * as m from '$lib/paraglide/messages';
	import { translate } from '$lib/shared/utils/i18n';

	import ContactListEditor from './ContactListEditor.svelte';
	import ProfileAvatar from './ProfileAvatar.svelte';

	type ProfessionalFormState = {
		prefix: string;
		fullName: string;
		displayName: string;
		profession: string;
		education: string;
		specialty: string;
		professionalRegistry: string;
		address: string;
		institutionId: EntityId | '';
		contacts: ContactEntry[];
		notes: string;
		photoDataUrl: string;
	};

	let {
		professional,
		institutions,
		onCancel,
		onSave
	}: {
		professional?: Professional;
		institutions: Institution[];
		onCancel: () => void;
		onSave: (input: CreateProfessionalInput, id?: EntityId) => Promise<void>;
	} = $props();

	let form = $state<ProfessionalFormState>(createForm());
	let formError = $state(false);
	let isSaving = $state(false);

	const dialogTitle = $derived(
		professional
			? translate(m.profile_edit_professional_profile, $interfacePreferences.language)
			: translate(m.profile_create_professional_profile, $interfacePreferences.language)
	);

	function createForm(profile?: Professional): ProfessionalFormState {
		return {
			prefix: profile?.prefix ?? '',
			fullName: profile?.fullName ?? '',
			displayName: profile?.displayName ?? '',
			profession: profile?.profession ?? '',
			education: profile?.education ?? '',
			specialty: profile?.specialty ?? '',
			professionalRegistry: profile?.professionalRegistry ?? '',
			address: profile?.address ?? '',
			institutionId: profile?.institutionId ?? '',
			contacts: createContactFormEntries(profile),
			notes: profile?.notes ?? '',
			photoDataUrl: profile?.photoDataUrl ?? ''
		};
	}

	function createContactFormEntries(profile?: Professional): ContactEntry[] {
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

	$effect(() => {
		form = createForm(professional);
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

		form.photoDataUrl = await readImageAsDataUrl(file);
	}

	async function handleSubmit(event: SubmitEvent) {
		event.preventDefault();

		const fullName = form.fullName.trim();
		formError = !fullName;

		if (!fullName) {
			return;
		}

		isSaving = true;
		await onSave(
			{
				fullName,
				prefix: optionalString(form.prefix),
				displayName: optionalString(form.displayName),
				profession: optionalString(form.profession),
				education: optionalString(form.education),
				specialty: optionalString(form.specialty),
				professionalRegistry: optionalString(form.professionalRegistry),
				address: optionalString(form.address),
				institutionId: form.institutionId || undefined,
				contacts: normalizeContacts(form.contacts),
				notes: optionalString(form.notes),
				photoDataUrl: optionalString(form.photoDataUrl)
			},
			professional?.id
		);
		isSaving = false;
	}
</script>

<div class="profile-dialog-backdrop" role="presentation">
	<div
		class="profile-dialog stack"
		role="dialog"
		aria-modal="true"
		aria-labelledby="professional-dialog-title"
	>
		<div class="profile-dialog-header">
			<h2 id="professional-dialog-title" class="section-title">{dialogTitle}</h2>
			<button type="button" class="button button-secondary" onclick={onCancel}>
				{translate(m.action_cancel, $interfacePreferences.language)}
			</button>
		</div>

		<form class="profile-form stack" onsubmit={handleSubmit}>
			<div class="profile-photo-field">
				<ProfileAvatar
					name={form.displayName ||
						form.fullName ||
						translate(m.profile_no_photo, $interfacePreferences.language)}
					photoDataUrl={form.photoDataUrl}
				/>
				<div class="profile-field">
					<label for="professional-photo">
						{translate(m.profile_photo, $interfacePreferences.language)}
					</label>
					<input
						id="professional-photo"
						type="file"
						accept="image/*"
						onchange={handlePhotoChange}
					/>
				</div>
			</div>

			<div class="profile-form-grid">
				<div class="profile-field">
					<label for="professional-full-name">
						{translate(m.field_full_name, $interfacePreferences.language)}
					</label>
					<input
						id="professional-full-name"
						bind:value={form.fullName}
						required
						aria-invalid={formError}
					/>
					{#if formError}
						<p class="profile-error">
							{translate(m.validation_required, $interfacePreferences.language)}
						</p>
					{/if}
				</div>

				<div class="profile-field">
					<label for="professional-prefix">
						{translate(m.field_prefix, $interfacePreferences.language)}
					</label>
					<input id="professional-prefix" bind:value={form.prefix} />
				</div>

				<div class="profile-field">
					<label for="professional-display-name">
						{translate(m.field_display_name, $interfacePreferences.language)}
					</label>
					<input id="professional-display-name" bind:value={form.displayName} />
				</div>

				<div class="profile-field">
					<label for="professional-profession">
						{translate(m.field_profession, $interfacePreferences.language)}
					</label>
					<input id="professional-profession" bind:value={form.profession} />
				</div>

				<div class="profile-field">
					<label for="professional-specialty">
						{translate(m.field_specialty, $interfacePreferences.language)}
					</label>
					<input id="professional-specialty" bind:value={form.specialty} />
				</div>

				<div class="profile-field">
					<label for="professional-education">
						{translate(m.field_education, $interfacePreferences.language)}
					</label>
					<input id="professional-education" bind:value={form.education} />
				</div>

				<div class="profile-field">
					<label for="professional-registry">
						{translate(m.field_professional_registry, $interfacePreferences.language)}
					</label>
					<input id="professional-registry" bind:value={form.professionalRegistry} />
				</div>

				<div class="profile-field profile-field--wide">
					<label for="professional-institution">
						{translate(m.profile_link_to_institution, $interfacePreferences.language)}
					</label>
					<select id="professional-institution" bind:value={form.institutionId}>
						<option value=""
							>{translate(m.profile_no_institution, $interfacePreferences.language)}</option
						>
						{#each institutions as institution (institution.id)}
							<option value={institution.id}>{institution.tradeName || institution.name}</option>
						{/each}
					</select>
				</div>

				<div class="profile-field profile-field--wide">
					<label for="professional-address">
						{translate(m.field_address, $interfacePreferences.language)}
					</label>
					<input id="professional-address" bind:value={form.address} />
				</div>

				<div class="profile-field profile-field--wide">
					<label for="professional-notes">
						{translate(m.field_notes, $interfacePreferences.language)}
					</label>
					<textarea id="professional-notes" bind:value={form.notes}></textarea>
				</div>
			</div>

			<ContactListEditor bind:contacts={form.contacts} />

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
