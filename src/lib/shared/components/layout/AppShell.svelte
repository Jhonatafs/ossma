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

	let isDesktopNavigationExpanded = $state(false);

	const routesWithoutNavigation = new Set(['/onboarding']);
	const showNavigation = $derived(!routesWithoutNavigation.has(page.url.pathname));

	function handleNavigationExpandedChange(expanded: boolean) {
		isDesktopNavigationExpanded = expanded;
	}
</script>

<div
	class={`app-viewport app-shell app-shell--nav-${navigationPosition} ${showNavigation ? 'app-shell--with-nav' : 'app-shell--focus'} ${isDesktopNavigationExpanded ? 'app-shell--nav-expanded' : 'app-shell--nav-collapsed'}`}
>
	{#if showNavigation}
		<AppNavigation
			expanded={isDesktopNavigationExpanded}
			onExpandedChange={handleNavigationExpandedChange}
		/>
	{/if}

	<MainContent>
		{@render children()}
	</MainContent>
</div>
