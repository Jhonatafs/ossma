<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<h1>Client detail</h1>

<p>This static page shows the future structure for Client data and general anamnesis.</p>

<nav aria-label="Client detail actions">
	<ul>
		<li><a href="#future-edit-client-data">Edit client data later</a></li>
		<li><a href="#future-edit-general-anamnesis">Edit general anamnesis later</a></li>
		<li><a href={resolve('/evaluations/new')}>Start evaluation</a></li>
		<li><a href={resolve('/clients')}>Return to clients</a></li>
	</ul>
</nav>

<section aria-labelledby="client-summary-heading">
	<h2 id="client-summary-heading">Client summary</h2>

	<dl>
		<dt>Full name</dt>
		<dd>Example client</dd>
		<dt>Date of birth</dt>
		<dd>Not saved yet</dd>
		<dt>Biological sex</dt>
		<dd>Not saved yet</dd>
		<dt>Phone</dt>
		<dd>Not saved yet</dd>
		<dt>Messaging app phone</dt>
		<dd>Conditional, not saved yet</dd>
		<dt>Client photo</dt>
		<dd>Photo upload is not implemented yet.</dd>
	</dl>
</section>

<section id="future-edit-client-data" aria-labelledby="client-data-heading">
	<h2 id="client-data-heading">Client data</h2>

	<p>Registration data will be editable here in a later milestone.</p>
</section>

<section aria-labelledby="responsible-emergency-heading">
	<h2 id="responsible-emergency-heading">Responsible person and emergency</h2>

	<dl>
		<dt>Legal responsible</dt>
		<dd>Conditional, not saved yet</dd>
		<dt>Emergency contact</dt>
		<dd>Not saved yet</dd>
	</dl>
</section>

<section id="future-edit-general-anamnesis" aria-labelledby="general-anamnesis-heading">
	<h2 id="general-anamnesis-heading">General anamnesis</h2>

	<section aria-labelledby="consent-heading">
		<h3 id="consent-heading">Consent</h3>
		<p>Consent confirmations will be shown here after persistence exists.</p>
	</section>

	<section aria-labelledby="main-goal-heading">
		<h3 id="main-goal-heading">Main goal</h3>
		<p>Main goal and priority will be shown here.</p>
	</section>

	<section aria-labelledby="health-heading">
		<h3 id="health-heading">General health</h3>
		<p>Health conditions, follow-up, surgery history, and family history will be shown here.</p>
	</section>

	<section aria-labelledby="warning-signs-heading">
		<h3 id="warning-signs-heading">Warning signs</h3>
		<p>Warning signs will be shown here and may require professional attention.</p>
	</section>

	<section aria-labelledby="medications-heading">
		<h3 id="medications-heading">Medications, allergies and restrictions</h3>
		<p>
			Medications, supplements, allergies, restrictions, and adverse reactions will be shown here.
		</p>
	</section>

	<section aria-labelledby="pain-injuries-heading">
		<h3 id="pain-injuries-heading">Pain, injuries and limitations</h3>
		<p>Pain, injury history, movement limitations, and support devices will be shown here.</p>
	</section>

	<section aria-labelledby="routine-heading">
		<h3 id="routine-heading">Physical activity and routine</h3>
		<p>Physical activity, sleep, stress, smoking, alcohol, and routine notes will be shown here.</p>
	</section>

	<section aria-labelledby="nutrition-heading">
		<h3 id="nutrition-heading">Basic nutrition and hydration</h3>
		<p>Basic nutrition and hydration notes will be shown here.</p>
	</section>

	<section aria-labelledby="reproductive-health-heading">
		<h3 id="reproductive-health-heading">Female/reproductive health</h3>
		<p>Conditional reproductive health information will be shown here when applicable.</p>
	</section>

	<section aria-labelledby="final-notes-heading">
		<h3 id="final-notes-heading">Final notes and truth confirmation</h3>
		<p>Final observations, truth confirmation, and professional review will be shown here.</p>
	</section>
</section>

<section aria-labelledby="evaluation-history-heading">
	<h2 id="evaluation-history-heading">Evaluation history</h2>

	<p>No evaluations are saved yet.</p>
</section>
