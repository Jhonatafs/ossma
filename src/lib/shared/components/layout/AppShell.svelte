<script lang="ts">
	import { page } from '$app/state';

	import {
		DEFAULT_DESKTOP_NAVIGATION_POSITION,
		type DesktopNavigationPosition
	} from '$lib/config/navigation';

	import AppNavigation from './AppNavigation.svelte';
	import MainContent from './MainContent.svelte';

	let {
		children,
		navigationPosition = DEFAULT_DESKTOP_NAVIGATION_POSITION
	}: {
		children: import('svelte').Snippet;
		navigationPosition?: DesktopNavigationPosition;
	} = $props();

	const routesWithoutNavigation = new Set(['/', '/onboarding']);
	const showNavigation = $derived(!routesWithoutNavigation.has(page.url.pathname));
</script>

<div
	class={`app-viewport app-shell app-shell--nav-${navigationPosition} ${showNavigation ? 'app-shell--with-nav' : 'app-shell--focus'}`}
>
	{#if showNavigation}
		<AppNavigation />
	{/if}

	<MainContent>
		{@render children()}
	</MainContent>
</div>
