<script lang="ts">
	import { page } from '$app/state';

	import {
		MOBILE_MORE_NAVIGATION_ITEMS,
		MOBILE_PRIMARY_NAVIGATION_ITEMS,
		NAVIGATION_ITEMS,
		type NavigationMessageKey
	} from '$lib/config/navigation';
	import { interfacePreferences } from '$lib/features/settings/interface-preferences-store';
	import * as m from '$lib/paraglide/messages';
	import LucideIcon from '$lib/shared/components/icons/LucideIcon.svelte';
	import { translate, type StaticMessage } from '$lib/shared/utils/i18n';

	import NavigationItem from './NavigationItem.svelte';

	let {
		expanded,
		onExpandedChange
	}: {
		expanded: boolean;
		onExpandedChange: (expanded: boolean) => void;
	} = $props();

	let isMoreOpen = $state(false);

	const moreNavigationSheetId = 'mobile-more-navigation-sheet';

	const getNavigationLabel = (key: NavigationMessageKey) =>
		translate(m[key] as StaticMessage, $interfacePreferences.language);

	const isActive = (href: string) =>
		href === '/' ? page.url.pathname === '/' : page.url.pathname.startsWith(href);

	const isMoreActive = () => MOBILE_MORE_NAVIGATION_ITEMS.some((item) => isActive(item.href));

	const navigationLabel = $derived(
		translate(m.app_navigation_label, $interfacePreferences.language)
	);
	const menuButtonLabel = $derived(
		translate(
			expanded ? m.navigation_close_menu : m.navigation_open_menu,
			$interfacePreferences.language
		)
	);

	function toggleDesktopNavigation() {
		onExpandedChange(!expanded);
	}

	function toggleMoreNavigation() {
		isMoreOpen = !isMoreOpen;
	}

	function closeMoreNavigation() {
		isMoreOpen = false;
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			closeMoreNavigation();
		}
	}

	$effect(() => {
		const pathname = page.url.pathname;

		if (pathname) {
			closeMoreNavigation();
		}
	});
</script>

<svelte:window onkeydown={handleKeydown} />

<nav
	class={`desktop-sidebar ${expanded ? 'desktop-sidebar--expanded' : 'desktop-sidebar--collapsed'}`}
	aria-label={navigationLabel}
>
	<button
		type="button"
		class="desktop-sidebar__toggle"
		aria-expanded={expanded}
		aria-label={menuButtonLabel}
		onclick={toggleDesktopNavigation}
	>
		<span class="nav-icon" aria-hidden="true">
			<LucideIcon name="menu" size={24} />
		</span>
		{#if expanded}
			<span class="nav-label">{translate(m.navigation_menu, $interfacePreferences.language)}</span>
		{/if}
	</button>

	<div class="desktop-sidebar__items" role="group" aria-label={navigationLabel}>
		{#each NAVIGATION_ITEMS as item (item.id)}
			<NavigationItem
				href={item.href}
				label={getNavigationLabel(item.labelKey)}
				icon={item.icon}
				active={isActive(item.href)}
				showLabel={expanded}
				iconSize={expanded ? 22 : 24}
			/>
		{/each}
	</div>
</nav>

{#if isMoreOpen}
	<button
		type="button"
		class="more-navigation-backdrop"
		aria-label={translate(m.nav_close_more_options, $interfacePreferences.language)}
		tabindex="-1"
		onclick={closeMoreNavigation}
	></button>

	<div
		id={moreNavigationSheetId}
		class="more-navigation-sheet"
		role="dialog"
		aria-modal="false"
		aria-labelledby="more-navigation-title"
	>
		<div class="more-navigation-header">
			<h2 id="more-navigation-title">
				{translate(m.nav_more_options, $interfacePreferences.language)}
			</h2>
			<button
				type="button"
				class="more-navigation-close"
				aria-label={translate(m.nav_close_more_options, $interfacePreferences.language)}
				title={translate(m.nav_close_more_options, $interfacePreferences.language)}
				onclick={closeMoreNavigation}
			>
				<span class="nav-icon" aria-hidden="true">
					<LucideIcon name="x" size={22} />
				</span>
			</button>
		</div>

		<div class="more-navigation-list" role="group" aria-label={navigationLabel}>
			{#each MOBILE_MORE_NAVIGATION_ITEMS as item (item.id)}
				<NavigationItem
					href={item.href}
					label={getNavigationLabel(item.labelKey)}
					icon={item.icon}
					active={isActive(item.href)}
					showLabel={true}
					iconSize={24}
					onNavigate={closeMoreNavigation}
				/>
			{/each}
		</div>
	</div>
{/if}

<nav class="bottom-navigation" aria-label={navigationLabel}>
	{#each MOBILE_PRIMARY_NAVIGATION_ITEMS as item (item.id)}
		<NavigationItem
			href={item.href}
			label={getNavigationLabel(item.labelKey)}
			icon={item.icon}
			active={isActive(item.href)}
			showLabel={true}
			iconSize={24}
		/>
	{/each}

	<button
		type="button"
		class={`nav-item bottom-navigation__more ${isMoreActive() ? 'nav-item--active' : ''} ${isMoreOpen ? 'bottom-navigation__more--open' : ''}`}
		aria-controls={moreNavigationSheetId}
		aria-expanded={isMoreOpen}
		aria-label={getNavigationLabel('nav_more')}
		title={getNavigationLabel('nav_more')}
		onclick={toggleMoreNavigation}
	>
		<span class="nav-icon" aria-hidden="true">
			<LucideIcon name="more-horizontal" size={24} />
		</span>
		<span class="nav-label">{getNavigationLabel('nav_more')}</span>
	</button>
</nav>
