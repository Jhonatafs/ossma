<script lang="ts">
	import type { SupportedLanguage } from '$lib/config/app';
	import {
		toParaglideLocale,
		type ParaglideLocale
	} from '$lib/features/settings/interface-preferences';
	import { interfacePreferences } from '$lib/features/settings/interface-preferences-store';
	import * as m from '$lib/paraglide/messages';

	type StaticMessage = (
		inputs?: Record<string, never>,
		options?: { locale?: ParaglideLocale }
	) => string;

	const translate = (message: StaticMessage, language: SupportedLanguage) =>
		message({}, { locale: toParaglideLocale(language) });

	const featureBlocks = [
		{
			id: 'clients',
			title: m.home_clients_title,
			description: m.home_clients_description
		},
		{
			id: 'profile',
			title: m.home_profile_title,
			description: m.home_profile_description
		},
		{
			id: 'backups',
			title: m.home_backups_title,
			description: m.home_backups_description
		},
		{
			id: 'settings',
			title: m.home_settings_title,
			description: m.home_settings_description
		}
	];
</script>

<svelte:head>
	<title>{translate(m.app_name, $interfacePreferences.language)}</title>
	<meta name="description" content={translate(m.app_description, $interfacePreferences.language)} />
</svelte:head>

<main class="app-shell">
	<div class="page-container stack stack-lg">
		<section class="page-section page-hero stack" aria-labelledby="app-title">
			<p class="page-kicker">{translate(m.app_status, $interfacePreferences.language)}</p>
			<h1 id="app-title" class="page-title">
				{translate(m.app_name, $interfacePreferences.language)}
			</h1>
			<p class="page-description">
				{translate(m.app_description, $interfacePreferences.language)}
			</p>
			<p class="text-muted">{translate(m.home_intro, $interfacePreferences.language)}</p>
		</section>

		<section class="page-section" aria-label="Initial project areas">
			<div class="card-grid">
				{#each featureBlocks as block (block.id)}
					<article class="card stack">
						<h2 class="card-title">{translate(block.title, $interfacePreferences.language)}</h2>
						<p class="card-description">
							{translate(block.description, $interfacePreferences.language)}
						</p>
					</article>
				{/each}
			</div>
		</section>
	</div>
</main>
