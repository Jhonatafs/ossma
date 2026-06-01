<script lang="ts">
	import { resolve } from '$app/paths';

	let institutionType = $state('');
	let primaryPhoneUsedForMessaging = $state(true);
	let messagingAppPhone = $state('');
	let useInstitutionDataInReportHeaders = $state(false);

	const canShowMessagingAppPhoneInReports = $derived(
		primaryPhoneUsedForMessaging || messagingAppPhone.trim().length > 0
	);
</script>

<h1>New InstitutionProfile</h1>

<p>
	This form defines the InstitutionProfile structure. It does not save data or upload files yet.
</p>

<form aria-describedby="institution-static-form-notice">
	<p id="institution-static-form-notice">
		Persistence, editing, and logo storage will be added in a later milestone.
	</p>

	<fieldset>
		<legend>1. Basic institution data</legend>

		<p>
			<label for="legalName">Legal name</label>
			<input id="legalName" name="legalName" type="text" required />
		</p>

		<p>
			<label for="displayName">Display name</label>
			<input id="displayName" name="displayName" type="text" required />
		</p>

		<p>
			<label for="institutionType">Institution type</label>
			<select id="institutionType" name="institutionType" bind:value={institutionType} required>
				<option value="">Select one option</option>
				<option value="gym">Gym</option>
				<option value="clinic">Clinic</option>
				<option value="sports-center">Sports center</option>
				<option value="studio">Studio</option>
				<option value="school">School</option>
				<option value="other">Other</option>
			</select>
		</p>

		{#if institutionType === 'other'}
			<p>
				<label for="otherInstitutionType">Other institution type</label>
				<input id="otherInstitutionType" name="otherInstitutionType" type="text" required />
			</p>
		{/if}

		<p>
			<label for="businessRegistrationNumber">Business registration number</label>
			<input id="businessRegistrationNumber" name="businessRegistrationNumber" type="text" />
		</p>

		<p>This field identifies only the institution or legal entity.</p>

		<p>
			<label for="shortDescription">Short description</label>
			<textarea id="shortDescription" name="shortDescription" rows="4"></textarea>
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
			<input id="email" name="email" type="email" autocomplete="email" />
		</p>

		<p>
			<label for="websiteOrSocialPage">Website or social page</label>
			<input id="websiteOrSocialPage" name="websiteOrSocialPage" type="url" />
		</p>
	</fieldset>

	<fieldset>
		<legend>3. Address</legend>

		<p>
			<label for="streetAddress">Street address</label>
			<input id="streetAddress" name="streetAddress" type="text" autocomplete="address-line1" />
		</p>

		<p>
			<label for="addressNumber">Address number</label>
			<input id="addressNumber" name="addressNumber" type="text" />
		</p>

		<p>
			<label for="addressComplement">Address complement</label>
			<input
				id="addressComplement"
				name="addressComplement"
				type="text"
				autocomplete="address-line2"
			/>
		</p>

		<p>
			<label for="neighborhood">Neighborhood</label>
			<input id="neighborhood" name="neighborhood" type="text" />
		</p>

		<p>
			<label for="city">City</label>
			<input id="city" name="city" type="text" autocomplete="address-level2" required />
		</p>

		<p>
			<label for="stateOrRegion">State or region</label>
			<input id="stateOrRegion" name="stateOrRegion" type="text" autocomplete="address-level1" />
		</p>

		<p>
			<label for="postalCode">Postal code</label>
			<input id="postalCode" name="postalCode" type="text" autocomplete="postal-code" />
		</p>

		<p>
			<label for="country">Country</label>
			<input id="country" name="country" type="text" autocomplete="country-name" required />
		</p>
	</fieldset>

	<fieldset>
		<legend>4. Report header data</legend>

		<p>
			<label for="useInstitutionDataInReportHeaders">
				<input
					id="useInstitutionDataInReportHeaders"
					name="useInstitutionDataInReportHeaders"
					type="checkbox"
					bind:checked={useInstitutionDataInReportHeaders}
				/>
				Use institution data in report headers.
			</label>
		</p>

		{#if useInstitutionDataInReportHeaders}
			<p>
				<label for="showDisplayNameInReports">
					<input id="showDisplayNameInReports" name="showDisplayNameInReports" type="checkbox" />
					Show display name in reports.
				</label>
			</p>

			<p>
				<label for="showLegalNameInReports">
					<input id="showLegalNameInReports" name="showLegalNameInReports" type="checkbox" />
					Show legal name in reports.
				</label>
			</p>

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
				<label for="showWebsiteOrSocialPageInReports">
					<input
						id="showWebsiteOrSocialPageInReports"
						name="showWebsiteOrSocialPageInReports"
						type="checkbox"
					/>
					Show website or social page in reports.
				</label>
			</p>

			<p>
				<label for="showAddressInReports">
					<input id="showAddressInReports" name="showAddressInReports" type="checkbox" />
					Show address in reports.
				</label>
			</p>
		{/if}

		<p>
			<label for="reportHeaderNote">Report header note</label>
			<textarea id="reportHeaderNote" name="reportHeaderNote" rows="4"></textarea>
		</p>

		<p>
			The institution appears in the report header and identification area. Technical responsibility
			remains assigned to the ProfessionalProfile.
		</p>
	</fieldset>

	<fieldset>
		<legend>5. Institution logo</legend>

		<p>
			<label for="institutionLogo">Institution logo</label>
			<input id="institutionLogo" name="institutionLogo" type="file" accept="image/*" />
		</p>

		<p>Maximum image size will be 2MB. Upload and persistence are not implemented yet.</p>
	</fieldset>

	<fieldset>
		<legend>6. Institution confirmation</legend>

		<p>
			<label for="institutionInformationConfirmed">
				<input
					id="institutionInformationConfirmed"
					name="institutionInformationConfirmed"
					type="checkbox"
					required
				/>
				I confirm that this institution information is true and can be used to identify the place where
				assessments and reports are issued.
			</label>
		</p>
	</fieldset>

	<p>
		<button type="button">Static form only - data is not saved yet</button>
	</p>
</form>

<p><a href={resolve('/institutions')}>Return to institutions</a></p>
