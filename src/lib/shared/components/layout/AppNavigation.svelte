<script lang="ts">
	import { page } from '$app/state';

	import { NAVIGATION_ITEMS, type NavigationMessageKey } from '$lib/config/navigation';
	import { interfacePreferences } from '$lib/features/settings/interface-preferences-store';
	import * as m from '$lib/paraglide/messages';
	import { translate, type StaticMessage } from '$lib/shared/utils/i18n';

	import NavigationItem from './NavigationItem.svelte';

	const navigationMenuId = 'app-navigation-list';
	let { showLabels: showLabelsOverride }: { showLabels?: boolean } = $props();
	let isMenuOpen = $state(false);

	const getNavigationLabel = (key: NavigationMessageKey) =>
		translate(m[key] as StaticMessage, $interfacePreferences.language);

	const isActive = (href: string) =>
		href === '/' ? page.url.pathname === '/' : page.url.pathname.startsWith(href);

	const navigationLabel = $derived(
		translate(m.app_navigation_label, $interfacePreferences.language)
	);
	const menuButtonLabel = $derived(
		translate(
			isMenuOpen ? m.navigation_close_menu : m.navigation_open_menu,
			$interfacePreferences.language
		)
	);
	const showLabels = $derived(
		showLabelsOverride ?? $interfacePreferences.menuLabelMode === 'iconAndText'
	);

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function closeMenu() {
		isMenuOpen = false;
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			closeMenu();
		}
	}

	$effect(() => {
		const pathname = page.url.pathname;

		if (pathname) {
			closeMenu();
		}
	});
</script>

<svelte:window onkeydown={handleKeydown} />

<nav class="suspended-navigation app-navigation" aria-label={navigationLabel}>
	<div class="suspended-navigation__inner app-navigation__inner">
		<button
			type="button"
			class="responsive-menu-toggle"
			aria-controls={navigationMenuId}
			aria-expanded={isMenuOpen}
			aria-label={menuButtonLabel}
			onclick={toggleMenu}
		>
			{translate(m.navigation_menu, $interfacePreferences.language)}
		</button>

		<div
			id={navigationMenuId}
			class={`responsive-menu-panel suspended-navigation-list app-navigation__items ${isMenuOpen ? 'responsive-menu-panel--open' : ''} ${showLabels ? '' : 'responsive-menu-panel--icon-only'}`}
			role="group"
			aria-label={navigationLabel}
		>
			{#each NAVIGATION_ITEMS as item (item.id)}
				<NavigationItem
					href={item.href}
					label={getNavigationLabel(item.labelKey)}
					icon={item.icon}
					active={isActive(item.href)}
					showLabel={showLabels}
					onNavigate={closeMenu}
				/>
			{/each}
		</div>
	</div>
</nav>
