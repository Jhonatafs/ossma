<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<h1>Evaluation detail</h1>

<p>This page will contain Assessment collection, review, and report access.</p>

<section aria-labelledby="assessment-states-heading">
	<h2 id="assessment-states-heading">Assessment states</h2>

	<ul>
		<li>Draft</li>
		<li>Completed</li>
	</ul>
</section>

<p><a href={resolve('/evaluations')}>Return to evaluations</a></p>
