<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { onMount } from 'svelte';

	import { initializeOnboardingState } from '$lib/features/onboarding/onboarding-store';
	import { initializeInterfacePreferences } from '$lib/features/settings/interface-preferences-store';
	import AppShell from '$lib/shared/components/layout/AppShell.svelte';

	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
	let isClientReady = $state(false);

	function redirectForOnboarding(pathname: string) {
		const state = initializeOnboardingState();
		const isOnboardingRoute = pathname === '/onboarding';

		if (!state.completed && !isOnboardingRoute) {
			void goto(resolve('/onboarding'));
			return;
		}

		if (state.completed && isOnboardingRoute) {
			void goto(resolve('/'));
		}
	}

	onMount(() => {
		initializeInterfacePreferences();
		isClientReady = true;
		redirectForOnboarding(page.url.pathname);
	});

	$effect(() => {
		if (!isClientReady) {
			return;
		}

		redirectForOnboarding(page.url.pathname);
	});
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<AppShell>
	{@render children()}
</AppShell>
