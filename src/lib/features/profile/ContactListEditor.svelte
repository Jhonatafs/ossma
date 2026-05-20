<script lang="ts">
	import { createEntityId } from '$lib/db/ids';
	import type { ContactEntry, ContactType } from '$lib/db/types';
	import { interfacePreferences } from '$lib/features/settings/interface-preferences-store';
	import * as m from '$lib/paraglide/messages';
	import { translate } from '$lib/shared/utils/i18n';

	import { CONTACT_TYPE_OPTIONS } from './profile-types';

	let { contacts = $bindable<ContactEntry[]>([]) }: { contacts: ContactEntry[] } = $props();

	function readInputValue(event: Event): string {
		const input = event.currentTarget;

		return input instanceof HTMLInputElement ? input.value : '';
	}

	function readContactType(event: Event): ContactType {
		const select = event.currentTarget;

		return select instanceof HTMLSelectElement ? (select.value as ContactType) : 'other';
	}

	function addContact() {
		contacts = [
			...contacts,
			{
				id: createEntityId(),
				type: 'phone',
				value: ''
			}
		];
	}

	function updateContact(id: string, patch: Partial<ContactEntry>) {
		contacts = contacts.map((contact) => (contact.id === id ? { ...contact, ...patch } : contact));
	}

	function removeContact(id: string) {
		contacts = contacts.filter((contact) => contact.id !== id);
	}
</script>

<section class="contact-editor stack" aria-labelledby="contact-editor-title">
	<div class="profile-dialog-section-header">
		<h3 id="contact-editor-title" class="section-subtitle">
			{translate(m.profile_contacts, $interfacePreferences.language)}
		</h3>
		<button type="button" class="button button-secondary" onclick={addContact}>
			{translate(m.profile_add_contact, $interfacePreferences.language)}
		</button>
	</div>

	{#if contacts.length > 0}
		<ul class="contact-list">
			{#each contacts as contact (contact.id)}
				<li class="contact-row">
					<div class="profile-field">
						<label for={`contact-type-${contact.id}`}>
							{translate(m.contact_type, $interfacePreferences.language)}
						</label>
						<select
							id={`contact-type-${contact.id}`}
							value={contact.type}
							onchange={(event) => updateContact(contact.id, { type: readContactType(event) })}
						>
							{#each CONTACT_TYPE_OPTIONS as option (option.value)}
								<option value={option.value}>
									{translate(option.label, $interfacePreferences.language)}
								</option>
							{/each}
						</select>
					</div>

					<div class="profile-field">
						<label for={`contact-label-${contact.id}`}>
							{translate(m.contact_label, $interfacePreferences.language)}
						</label>
						<input
							id={`contact-label-${contact.id}`}
							value={contact.label ?? ''}
							oninput={(event) =>
								updateContact(contact.id, {
									label: readInputValue(event).trim() || undefined
								})}
						/>
					</div>

					<div class="profile-field contact-value-field">
						<label for={`contact-value-${contact.id}`}>
							{translate(m.contact_value, $interfacePreferences.language)}
						</label>
						<input
							id={`contact-value-${contact.id}`}
							value={contact.value}
							oninput={(event) => updateContact(contact.id, { value: readInputValue(event) })}
						/>
					</div>

					<button
						type="button"
						class="button button-secondary contact-remove-button"
						onclick={() => removeContact(contact.id)}
					>
						{translate(m.profile_remove_contact, $interfacePreferences.language)}
					</button>
				</li>
			{/each}
		</ul>
	{/if}
</section>
