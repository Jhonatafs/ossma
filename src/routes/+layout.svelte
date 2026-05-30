<script lang="ts">
	import { resolve } from '$app/paths';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<a href="#main-content">Skip to main content</a>

<header>
	<p><a href={resolve('/')}>OSSMA</a></p>

	<nav aria-label="Main navigation">
		<ul>
			<li><a href={resolve('/onboarding')}>Onboarding</a></li>
			<li><a href={resolve('/clients')}>Clients</a></li>
			<li><a href={resolve('/professionals')}>Professionals</a></li>
			<li><a href={resolve('/institutions')}>Institutions</a></li>
			<li><a href={resolve('/evaluations')}>Evaluations</a></li>
			<li><a href={resolve('/backup')}>Backup</a></li>
			<li><a href={resolve('/settings')}>Settings</a></li>
			<li><a href={resolve('/help')}>Help</a></li>
			<li><a href={resolve('/documentation')}>Documentation</a></li>
		</ul>
	</nav>
</header>

<main id="main-content">
	{@render children()}
</main>
