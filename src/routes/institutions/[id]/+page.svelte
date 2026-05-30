<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<h1>InstitutionProfile detail</h1>

<p>This page will show InstitutionProfile data and linked professional information.</p>

<nav aria-label="InstitutionProfile detail actions">
	<ul>
		<li><a href={resolve('/institutions')}>Return to institutions</a></li>
		<li><a href={resolve('/professionals')}>Manage professionals</a></li>
	</ul>
</nav>
