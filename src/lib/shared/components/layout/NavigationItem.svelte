<script lang="ts">
	import type { Pathname } from '$app/types';
	import { resolve } from '$app/paths';

	import LucideIcon from '$lib/shared/components/icons/LucideIcon.svelte';
	import type { IconName } from '$lib/shared/components/icons/icon-types';

	let {
		href,
		label,
		icon,
		active,
		showLabel = true,
		iconSize = 24,
		onNavigate
	}: {
		href: string;
		label: string;
		icon: IconName;
		active: boolean;
		showLabel?: boolean;
		iconSize?: number;
		onNavigate?: () => void;
	} = $props();
</script>

<a
	class={`nav-item ${active ? 'nav-item--active' : ''} ${showLabel ? '' : 'nav-item--icon-only'}`}
	href={resolve(href as Pathname)}
	aria-current={active ? 'page' : undefined}
	aria-label={label}
	title={label}
	onclick={() => onNavigate?.()}
>
	<span class="nav-icon" aria-hidden="true">
		<LucideIcon name={icon} size={iconSize} />
	</span>
	{#if showLabel}
		<span class="nav-label">{label}</span>
	{/if}
</a>
