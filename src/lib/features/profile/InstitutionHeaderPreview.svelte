<script lang="ts">
	import type { ContactEntry, Institution } from '$lib/db/types';
	import { interfacePreferences } from '$lib/features/settings/interface-preferences-store';
	import * as m from '$lib/paraglide/messages';
	import { translate } from '$lib/shared/utils/i18n';

	import ProfileAvatar from './ProfileAvatar.svelte';
	import { getContactTypeMessage } from './profile-types';

	let { institution }: { institution: Institution } = $props();

	const displayName = $derived(institution.tradeName || institution.name);
	const contacts = $derived(getDisplayContacts(institution));

	function getDisplayContacts(profile: Institution): ContactEntry[] {
		if (profile.contacts?.length) {
			return profile.contacts.filter((contact) => contact.value.trim());
		}

		return [
			profile.phone ? { id: 'legacy-phone', type: 'phone', value: profile.phone } : undefined,
			profile.email ? { id: 'legacy-email', type: 'email', value: profile.email } : undefined
		].filter((contact): contact is ContactEntry => Boolean(contact));
	}
</script>

<section class="document-preview header-preview" aria-labelledby="institution-header-preview-title">
	<div class="stack">
		<h3 id="institution-header-preview-title" class="section-subtitle">
			{translate(m.profile_header_preview, $interfacePreferences.language)}
		</h3>
		<p class="section-description">
			{translate(m.profile_header_preview_description, $interfacePreferences.language)}
		</p>
	</div>

	<div class="document-preview-panel">
		<ProfileAvatar
			name={displayName}
			photoDataUrl={institution.logoDataUrl ?? institution.photoDataUrl}
		/>
		<div class="document-preview-content">
			<p class="document-preview-title">{displayName}</p>
			{#if institution.tradeName}
				<p class="document-preview-line">{institution.name}</p>
			{/if}
			{#if institution.document}
				<p class="document-preview-line">{institution.document}</p>
			{/if}
			{#if institution.address}
				<p class="document-preview-line">{institution.address}</p>
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
			{#if institution.footerText}
				<p class="document-preview-note">{institution.footerText}</p>
			{/if}
		</div>
	</div>
</section>
