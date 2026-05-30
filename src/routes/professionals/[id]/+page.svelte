<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<h1>ProfessionalProfile detail</h1>

<p>This page will show ProfessionalProfile data and institution link information.</p>

<nav aria-label="ProfessionalProfile detail actions">
	<ul>
		<li><a href={resolve('/professionals')}>Return to professionals</a></li>
		<li><a href={resolve('/institutions')}>Manage institutions</a></li>
	</ul>
</nav>
