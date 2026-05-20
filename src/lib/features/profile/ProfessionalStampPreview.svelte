<script lang="ts">
	import type { ContactEntry, Institution, Professional } from '$lib/db/types';
	import { interfacePreferences } from '$lib/features/settings/interface-preferences-store';
	import * as m from '$lib/paraglide/messages';
	import { translate } from '$lib/shared/utils/i18n';

	import ProfileAvatar from './ProfileAvatar.svelte';
	import { getContactTypeMessage } from './profile-types';

	let {
		professional,
		institution
	}: {
		professional: Professional;
		institution?: Institution;
	} = $props();

	const displayName = $derived(
		[professional.prefix, professional.displayName || professional.fullName]
			.filter(Boolean)
			.join(' ')
	);
	const contacts = $derived(getDisplayContacts(professional));

	function getDisplayContacts(profile: Professional): ContactEntry[] {
		if (profile.contacts?.length) {
			return profile.contacts.filter((contact) => contact.value.trim());
		}

		return [
			profile.phone ? { id: 'legacy-phone', type: 'phone', value: profile.phone } : undefined,
			profile.email ? { id: 'legacy-email', type: 'email', value: profile.email } : undefined
		].filter((contact): contact is ContactEntry => Boolean(contact));
	}
</script>

<section class="document-preview stamp-preview" aria-labelledby="professional-stamp-preview-title">
	<div class="stack">
		<h3 id="professional-stamp-preview-title" class="section-subtitle">
			{translate(m.profile_stamp_preview, $interfacePreferences.language)}
		</h3>
		<p class="section-description">
			{translate(m.profile_stamp_preview_description, $interfacePreferences.language)}
		</p>
	</div>

	<div class="document-preview-panel">
		<ProfileAvatar name={displayName} photoDataUrl={professional.photoDataUrl} />
		<div class="document-preview-content">
			<p class="document-preview-title">{displayName}</p>
			{#if professional.profession}
				<p class="document-preview-line">{professional.profession}</p>
			{/if}
			{#if professional.specialty}
				<p class="document-preview-line">{professional.specialty}</p>
			{/if}
			{#if professional.education}
				<p class="document-preview-line">{professional.education}</p>
			{/if}
			{#if professional.professionalRegistry}
				<p class="document-preview-line">{professional.professionalRegistry}</p>
			{/if}
			{#if institution}
				<p class="document-preview-line">{institution.tradeName || institution.name}</p>
			{/if}
			{#if professional.address}
				<p class="document-preview-line">{professional.address}</p>
			{/if}
			{#if contacts.length > 0}
				<ul class="document-contact-list">
					{#each contacts as contact (contact.id)}
						<li>
							<span
								>{translate(
									getContactTypeMessage(contact.type),
									$interfacePreferences.language
								)}</span
							>
							<strong>{contact.label ? `${contact.label}: ${contact.value}` : contact.value}</strong
							>
						</li>
					{/each}
				</ul>
			{/if}
			{#if professional.notes}
				<p class="document-preview-note">{professional.notes}</p>
			{/if}
			<p class="document-signature-note">
				{translate(m.profile_manual_signature, $interfacePreferences.language)}
			</p>
		</div>
	</div>
</section>
