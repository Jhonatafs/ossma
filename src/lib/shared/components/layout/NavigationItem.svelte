<script lang="ts">
	import type { Pathname } from '$app/types';
	import { resolve } from '$app/paths';

	let {
		href,
		label,
		icon,
		active,
		showLabel = true,
		onNavigate
	}: {
		href: string;
		label: string;
		icon: string;
		active: boolean;
		showLabel?: boolean;
		onNavigate?: () => void;
	} = $props();
</script>

<a
	class={`suspended-navigation-link app-navigation__item ${active ? 'suspended-navigation-link-active app-navigation__item--active' : ''} ${showLabel ? '' : 'suspended-navigation-link--icon-only'}`}
	href={resolve(href as Pathname)}
	aria-current={active ? 'page' : undefined}
	aria-label={label}
	title={label}
	onclick={() => onNavigate?.()}
>
	<span class="navigation-icon" aria-hidden="true">{icon}</span>
	{#if showLabel}
		<span class="navigation-label">{label}</span>
	{/if}
</a>
