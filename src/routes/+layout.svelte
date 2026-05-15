<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { onMount } from 'svelte';

	import { initializeOnboardingState } from '$lib/features/onboarding/onboarding-store';
	import { initializeInterfacePreferences } from '$lib/features/settings/interface-preferences-store';

	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();

	onMount(() => {
		initializeInterfacePreferences();
		const state = initializeOnboardingState();
		const isOnboardingRoute = page.url.pathname === '/onboarding';

		if (!state.completed && !isOnboardingRoute) {
			void goto(resolve('/onboarding'));
			return;
		}

		if (state.completed && isOnboardingRoute) {
			void goto(resolve('/'));
		}
	});
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
{@render children()}
