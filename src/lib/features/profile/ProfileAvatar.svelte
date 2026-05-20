<script lang="ts">
	import { getInitials } from './profile-types';

	let {
		name,
		photoDataUrl
	}: {
		name: string;
		photoDataUrl?: string;
	} = $props();
</script>

<div class="profile-avatar">
	{#if photoDataUrl}
		<img src={photoDataUrl} alt={name} />
	{:else}
		<span aria-hidden="true">{getInitials(name)}</span>
		<span class="sr-only">{name}</span>
	{/if}
</div>
