<script lang="ts">
	import { resolve } from '$app/paths';

	let primaryPhoneUsedForMessaging = $state(true);
	let messagingAppPhone = $state('');
	let useContactDataInReports = $state(false);

	const canShowMessagingAppPhoneInReports = $derived(
		primaryPhoneUsedForMessaging || messagingAppPhone.trim().length > 0
	);
</script>

<h1>New ProfessionalProfile</h1>

<p>
	This form defines the ProfessionalProfile structure. It does not save data or upload files yet.
</p>

<form aria-describedby="professional-static-form-notice">
	<p id="professional-static-form-notice">
		Persistence, editing, and image storage will be added in a later milestone.
	</p>

	<fieldset>
		<legend>1. Basic professional data</legend>

		<p>
			<label for="fullName">Full name</label>
			<input id="fullName" name="fullName" type="text" autocomplete="name" required />
		</p>

		<p>
			<label for="professionalName">Professional name</label>
			<input id="professionalName" name="professionalName" type="text" />
		</p>

		<p>
			<label for="profession">Profession</label>
			<input id="profession" name="profession" type="text" required />
		</p>

		<p>
			<label for="professionalRegistry">Professional registry</label>
			<input id="professionalRegistry" name="professionalRegistry" type="text" required />
		</p>

		<p>
			<label for="registryRegion">Registry region</label>
			<input id="registryRegion" name="registryRegion" type="text" />
		</p>

		<p>
			<label for="shortBio">Short bio</label>
			<textarea id="shortBio" name="shortBio" rows="4"></textarea>
		</p>
	</fieldset>

	<fieldset>
		<legend>2. Contact</legend>

		<p>
			<label for="phone">Phone</label>
			<input id="phone" name="phone" type="tel" autocomplete="tel" required />
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
				<input
					id="messagingAppPhone"
					name="messagingAppPhone"
					type="tel"
					bind:value={messagingAppPhone}
					required
				/>
			</p>
		{/if}

		<p>
			<label for="email">Email</label>
			<input id="email" name="email" type="email" autocomplete="email" required />
		</p>

		<p>
			<label for="websiteOrPortfolio">Website or portfolio</label>
			<input id="websiteOrPortfolio" name="websiteOrPortfolio" type="url" />
		</p>
	</fieldset>

	<fieldset>
		<legend>3. Linked institution</legend>

		<p>
			<label for="linkedInstitution">Linked institution</label>
			<select id="linkedInstitution" name="linkedInstitution">
				<option value="">No linked institution</option>
				<option value="example-institution">Example institution</option>
			</select>
		</p>

		<p>This select will list existing InstitutionProfiles when persistence exists.</p>
	</fieldset>

	<fieldset>
		<legend>4. Report stamp data</legend>

		<p>
			<label for="useContactDataInReports">
				<input
					id="useContactDataInReports"
					name="useContactDataInReports"
					type="checkbox"
					bind:checked={useContactDataInReports}
				/>
				Use contact data in reports.
			</label>
		</p>

		{#if useContactDataInReports}
			<p>
				<label for="showPhoneInReports">
					<input id="showPhoneInReports" name="showPhoneInReports" type="checkbox" />
					Show phone in reports.
				</label>
			</p>

			{#if canShowMessagingAppPhoneInReports}
				<p>
					<label for="showMessagingAppPhoneInReports">
						<input
							id="showMessagingAppPhoneInReports"
							name="showMessagingAppPhoneInReports"
							type="checkbox"
						/>
						Show messaging app phone in reports.
					</label>
				</p>
			{/if}

			<p>
				<label for="showEmailInReports">
					<input id="showEmailInReports" name="showEmailInReports" type="checkbox" />
					Show email in reports.
				</label>
			</p>

			<p>
				<label for="showWebsiteOrPortfolioInReports">
					<input
						id="showWebsiteOrPortfolioInReports"
						name="showWebsiteOrPortfolioInReports"
						type="checkbox"
					/>
					Show website or portfolio in reports.
				</label>
			</p>
		{/if}

		<p>
			<label for="reportStampNote">Report stamp note</label>
			<textarea id="reportStampNote" name="reportStampNote" rows="4"></textarea>
		</p>

		<p>Manual signature is not part of the MVP. Reports will use a textual professional stamp.</p>
	</fieldset>

	<fieldset>
		<legend>5. Professional image/logo</legend>

		<p>
			<label for="professionalImage">Professional image or logo</label>
			<input id="professionalImage" name="professionalImage" type="file" accept="image/*" />
		</p>

		<p>Maximum image size will be 2MB. Upload and persistence are not implemented yet.</p>
	</fieldset>

	<fieldset>
		<legend>6. Technical responsibility confirmation</legend>

		<p>
			<label for="technicalResponsibilityConfirmed">
				<input
					id="technicalResponsibilityConfirmed"
					name="technicalResponsibilityConfirmed"
					type="checkbox"
					required
				/>
				I confirm that this professional information is true and can be used to identify the professional
				responsible for assessments and reports.
			</label>
		</p>
	</fieldset>

	<p>
		<button type="button">Static form only - data is not saved yet</button>
	</p>
</form>

<p><a href={resolve('/professionals')}>Return to professionals</a></p>
