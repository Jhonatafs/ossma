<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<h1>Client detail</h1>

<p>This page will show client data, general anamnesis, and evaluation history.</p>

<nav aria-label="Client detail actions">
	<ul>
		<li><a href={resolve('/evaluations/new')}>Start evaluation</a></li>
		<li><a href={resolve('/clients')}>Return to clients</a></li>
	</ul>
</nav>
