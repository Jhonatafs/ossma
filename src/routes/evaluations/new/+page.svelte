<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<h1>New evaluation</h1>

<p>This page will start an Assessment after selecting type, client, and professional.</p>

<section aria-labelledby="evaluation-prerequisites-heading">
	<h2 id="evaluation-prerequisites-heading">Required before collection</h2>

	<ul>
		<li>Assessment type</li>
		<li>Client</li>
		<li>ProfessionalProfile</li>
	</ul>
</section>

<p><a href={resolve('/evaluations')}>Return to evaluations</a></p>
