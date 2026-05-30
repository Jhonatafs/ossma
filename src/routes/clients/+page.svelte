<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<h1>Clients</h1>

<p>This page will list registered clients.</p>

<nav aria-label="Client actions">
	<ul>
		<li><a href={resolve('/clients/new')}>Create client</a></li>
		<li>
			<a href={resolve('/clients/[id]', { id: 'example-client' })}>Open example client detail</a>
		</li>
	</ul>
</nav>
