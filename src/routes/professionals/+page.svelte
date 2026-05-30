<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<h1>Professionals</h1>

<p>This page will list and manage ProfessionalProfile records.</p>

<nav aria-label="Professional actions">
	<ul>
		<li><a href={resolve('/professionals/new')}>Create ProfessionalProfile</a></li>
		<li>
			<a href={resolve('/professionals/[id]', { id: 'example-professional' })}>
				Open example ProfessionalProfile detail
			</a>
		</li>
	</ul>
</nav>
