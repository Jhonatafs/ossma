<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<h1>Evaluations</h1>

<p>This page will list Draft and Completed evaluations.</p>

<nav aria-label="Evaluation actions">
	<ul>
		<li><a href={resolve('/evaluations/new')}>Create evaluation</a></li>
		<li>
			<a href={resolve('/evaluations/[id]', { id: 'example-assessment' })}>
				Open example evaluation detail
			</a>
		</li>
	</ul>
</nav>
