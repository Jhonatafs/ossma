<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<h1>InstitutionProfile detail</h1>

<p>This static page shows the future structure for InstitutionProfile data.</p>

<nav aria-label="InstitutionProfile detail actions">
	<ul>
		<li><a href={resolve('/institutions')}>Return to institutions</a></li>
		<li><a href={resolve('/institutions/new')}>Create new InstitutionProfile</a></li>
	</ul>
</nav>

<section aria-labelledby="basic-institution-data-heading">
	<h2 id="basic-institution-data-heading">Basic institution data</h2>

	<dl>
		<dt>Legal name</dt>
		<dd>Example institution</dd>
		<dt>Display name</dt>
		<dd>Not saved yet</dd>
		<dt>Institution type</dt>
		<dd>Not saved yet</dd>
		<dt>Business registration number</dt>
		<dd>Not saved yet</dd>
		<dt>Short description</dt>
		<dd>Not saved yet</dd>
	</dl>
</section>

<section aria-labelledby="institution-contact-heading">
	<h2 id="institution-contact-heading">Contact</h2>

	<dl>
		<dt>Phone</dt>
		<dd>Not saved yet</dd>
		<dt>Primary phone used in messaging apps</dt>
		<dd>Not saved yet</dd>
		<dt>Messaging app phone</dt>
		<dd>Conditional, not saved yet</dd>
		<dt>Email</dt>
		<dd>Not saved yet</dd>
		<dt>Website or social page</dt>
		<dd>Not saved yet</dd>
	</dl>
</section>

<section aria-labelledby="institution-address-heading">
	<h2 id="institution-address-heading">Address</h2>

	<dl>
		<dt>Street address</dt>
		<dd>Not saved yet</dd>
		<dt>Address number</dt>
		<dd>Not saved yet</dd>
		<dt>Address complement</dt>
		<dd>Not saved yet</dd>
		<dt>Neighborhood</dt>
		<dd>Not saved yet</dd>
		<dt>City</dt>
		<dd>Not saved yet</dd>
		<dt>State or region</dt>
		<dd>Not saved yet</dd>
		<dt>Postal code</dt>
		<dd>Not saved yet</dd>
		<dt>Country</dt>
		<dd>Not saved yet</dd>
	</dl>
</section>

<section aria-labelledby="report-header-data-heading">
	<h2 id="report-header-data-heading">Report header data</h2>

	<dl>
		<dt>Use institution data in report headers</dt>
		<dd>Not saved yet</dd>
		<dt>Show display name in reports</dt>
		<dd>Not saved yet</dd>
		<dt>Show legal name in reports</dt>
		<dd>Not saved yet</dd>
		<dt>Show phone in reports</dt>
		<dd>Not saved yet</dd>
		<dt>Show messaging app phone in reports</dt>
		<dd>Conditional, not saved yet</dd>
		<dt>Show email in reports</dt>
		<dd>Not saved yet</dd>
		<dt>Show website or social page in reports</dt>
		<dd>Not saved yet</dd>
		<dt>Show address in reports</dt>
		<dd>Not saved yet</dd>
		<dt>Report header note</dt>
		<dd>Not saved yet</dd>
	</dl>

	<p>
		The institution appears in the report header and identification area. Technical responsibility
		remains assigned to the ProfessionalProfile.
	</p>
</section>

<section aria-labelledby="institution-logo-heading">
	<h2 id="institution-logo-heading">Institution logo</h2>

	<p>Institution logo upload is not persisted yet. Maximum image size will be 2MB.</p>
</section>

<section aria-labelledby="institution-confirmation-heading">
	<h2 id="institution-confirmation-heading">Confirmation status</h2>

	<p>Institution confirmation is not saved yet.</p>
</section>
