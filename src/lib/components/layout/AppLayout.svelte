<script lang="ts">
	import AppHeader from './AppHeader.svelte';
	import CompactNavigation from './CompactNavigation.svelte';
	import DesktopNavigation from './DesktopNavigation.svelte';
	import MainContent from './MainContent.svelte';

	let { children } = $props();
</script>

<div class="app-layout">
	<AppHeader />
	<DesktopNavigation />
	<CompactNavigation />
	<MainContent>{@render children()}</MainContent>
</div>

<style>
	:global(body) {
		margin: 0;
	}

	.app-layout {
		display: grid;
		grid-template-rows: auto minmax(0, 1fr);
		grid-template-columns: minmax(12rem, 16rem) minmax(0, 1fr);
		min-height: 100vh;
	}

	@media (max-width: 48rem) {
		.app-layout {
			grid-template-rows: auto auto minmax(0, 1fr);
			grid-template-columns: minmax(0, 1fr);
		}
	}
</style>
