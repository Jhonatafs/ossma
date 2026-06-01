<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<h1>ProfessionalProfile detail</h1>

<p>This static page shows the future structure for ProfessionalProfile data.</p>

<nav aria-label="ProfessionalProfile detail actions">
	<ul>
		<li><a href={resolve('/professionals')}>Return to professionals</a></li>
		<li><a href={resolve('/professionals/new')}>Create new ProfessionalProfile</a></li>
	</ul>
</nav>

<section aria-labelledby="basic-professional-data-heading">
	<h2 id="basic-professional-data-heading">Basic data</h2>

	<dl>
		<dt>Full name</dt>
		<dd>Example professional</dd>
		<dt>Professional name</dt>
		<dd>Not saved yet</dd>
		<dt>Profession</dt>
		<dd>Not saved yet</dd>
		<dt>Professional registry</dt>
		<dd>Not saved yet</dd>
		<dt>Registry region</dt>
		<dd>Not saved yet</dd>
		<dt>Short bio</dt>
		<dd>Not saved yet</dd>
	</dl>
</section>

<section aria-labelledby="professional-contact-heading">
	<h2 id="professional-contact-heading">Contact</h2>

	<dl>
		<dt>Phone</dt>
		<dd>Not saved yet</dd>
		<dt>Primary phone used in messaging apps</dt>
		<dd>Not saved yet</dd>
		<dt>Messaging app phone</dt>
		<dd>Conditional, not saved yet</dd>
		<dt>Email</dt>
		<dd>Not saved yet</dd>
		<dt>Website or portfolio</dt>
		<dd>Not saved yet</dd>
	</dl>
</section>

<section aria-labelledby="linked-institution-heading">
	<h2 id="linked-institution-heading">Linked institution</h2>

	<p>No linked InstitutionProfile is saved yet.</p>
</section>

<section aria-labelledby="report-stamp-data-heading">
	<h2 id="report-stamp-data-heading">Report stamp data</h2>

	<dl>
		<dt>Use contact data in reports</dt>
		<dd>Not saved yet</dd>
		<dt>Show phone in reports</dt>
		<dd>Not saved yet</dd>
		<dt>Show messaging app phone in reports</dt>
		<dd>Conditional, not saved yet</dd>
		<dt>Show email in reports</dt>
		<dd>Not saved yet</dd>
		<dt>Show website or portfolio in reports</dt>
		<dd>Not saved yet</dd>
		<dt>Report stamp note</dt>
		<dd>Not saved yet</dd>
	</dl>

	<p>Manual signature is not part of the MVP. Reports will use a textual professional stamp.</p>
</section>

<section aria-labelledby="professional-image-heading">
	<h2 id="professional-image-heading">Professional image/logo</h2>

	<p>Professional image or logo upload is not persisted yet. Maximum image size will be 2MB.</p>
</section>

<section aria-labelledby="technical-responsibility-heading">
	<h2 id="technical-responsibility-heading">Technical responsibility confirmation status</h2>

	<p>Technical responsibility confirmation is not saved yet.</p>
</section>
