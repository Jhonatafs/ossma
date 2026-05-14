<script lang="ts">
	import { APP_CONFIG } from '$lib/config/app';

	const featureBlocks = [
		{
			title: 'Clients',
			description: 'Manage evaluated people and their assessment history.'
		},
		{
			title: 'Profile',
			description: 'Configure professionals and institutions.'
		},
		{
			title: 'Backups',
			description: 'Export and import local data manually.'
		},
		{
			title: 'Settings',
			description: 'Adjust language, theme, navigation and preferences.'
		}
	];
</script>

<svelte:head>
	<title>{APP_CONFIG.name}</title>
	<meta name="description" content={APP_CONFIG.description} />
</svelte:head>

<main class="app-shell">
	<div class="page-container stack stack-lg">
		<section class="page-section page-hero stack" aria-labelledby="app-title">
			<p class="page-kicker">Local-first professional assessment app</p>
			<h1 id="app-title" class="page-title">{APP_CONFIG.name}</h1>
			<p class="page-description">{APP_CONFIG.description}</p>
			<p class="text-muted">
				This is the initial technical base for OSSMA, ready for focused offline-first features.
			</p>
		</section>

		<section class="page-section" aria-label="Initial project areas">
			<div class="card-grid">
				{#each featureBlocks as block (block.title)}
					<article class="card stack">
						<h2 class="card-title">{block.title}</h2>
						<p class="card-description">{block.description}</p>
					</article>
				{/each}
			</div>
		</section>
	</div>
</main>
