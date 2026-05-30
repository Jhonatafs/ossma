<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<h1>Institutions</h1>

<p>This page will list and manage InstitutionProfile records.</p>

<nav aria-label="Institution actions">
	<ul>
		<li><a href={resolve('/institutions/new')}>Create InstitutionProfile</a></li>
		<li>
			<a href={resolve('/institutions/[id]', { id: 'example-institution' })}>
				Open example InstitutionProfile detail
			</a>
		</li>
	</ul>
</nav>
