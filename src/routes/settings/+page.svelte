<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<h1>Settings</h1>

<p>This page will contain language, theme, and local data information.</p>

<nav aria-label="Settings related links">
	<ul>
		<li><a href={resolve('/help')}>Read help</a></li>
		<li><a href={resolve('/backup')}>Manage backup</a></li>
	</ul>
</nav>
