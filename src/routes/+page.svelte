<script lang="ts">
	import type { Pathname } from '$app/types';
	import { resolve } from '$app/paths';

	import { APP_CONFIG } from '$lib/config/app';
	import {
		MAIN_AREA_NAVIGATION_ITEMS,
		type NavigationDescriptionMessageKey,
		type NavigationMessageKey
	} from '$lib/config/navigation';
	import { interfacePreferences } from '$lib/features/settings/interface-preferences-store';
	import * as m from '$lib/paraglide/messages';
	import { translate, type StaticMessage } from '$lib/shared/utils/i18n';

	const releaseHistory = [
		{
			id: 'initial-foundation',
			version: APP_CONFIG.version,
			message: m.home_initial_foundation_note
		}
	];

	const getNavigationLabel = (key: NavigationMessageKey) =>
		translate(m[key] as StaticMessage, $interfacePreferences.language);

	const getNavigationDescription = (key: NavigationDescriptionMessageKey) =>
		translate(m[key] as StaticMessage, $interfacePreferences.language);
</script>

<svelte:head>
	<title>{translate(m.home_title, $interfacePreferences.language)}</title>
	<meta
		name="description"
		content={translate(m.home_description, $interfacePreferences.language)}
	/>
</svelte:head>

<div class="home-dashboard">
	<section class="home-dashboard-header page-section page-hero stack" aria-labelledby="home-title">
		<p class="page-kicker">{translate(m.home_status, $interfacePreferences.language)}</p>
		<h1 id="home-title" class="page-title">
			{translate(m.home_title, $interfacePreferences.language)}
		</h1>
		<p class="page-description">{translate(m.home_description, $interfacePreferences.language)}</p>
	</section>

	<div class="home-dashboard-grid">
		<section class="home-section main-areas stack" aria-labelledby="main-areas-title">
			<div class="stack">
				<h2 id="main-areas-title" class="section-title">
					{translate(m.home_main_areas_title, $interfacePreferences.language)}
				</h2>
				<p class="section-description">
					{translate(m.home_main_areas_description, $interfacePreferences.language)}
				</p>
			</div>

			<dl class="main-areas-list">
				{#each MAIN_AREA_NAVIGATION_ITEMS as item (item.id)}
					<div class="main-area-item">
						<dt>
							<a class="main-area-link" href={resolve(item.href as Pathname)}>
								{getNavigationLabel(item.labelKey)}
							</a>
						</dt>
						<dd class="main-area-description">{getNavigationDescription(item.descriptionKey)}</dd>
					</div>
				{/each}
			</dl>
		</section>

		<section class="home-section stack" aria-labelledby="about-title">
			<h2 id="about-title" class="section-title">
				{translate(m.home_about_title, $interfacePreferences.language)}
			</h2>
			<div class="section-copy stack">
				<p>{translate(m.home_about_description, $interfacePreferences.language)}</p>
				<p>{translate(m.home_about_contribute, $interfacePreferences.language)}</p>
				<p id="developers">
					<a class="inline-text-link" href="#developers">
						{translate(m.home_about_developers, $interfacePreferences.language)}
					</a>
				</p>
			</div>
		</section>

		<section class="home-section stack" aria-labelledby="version-notes-title">
			<h2 id="version-notes-title" class="section-title">
				{translate(m.home_version_notes_title, $interfacePreferences.language)}
			</h2>

			<dl class="version-notes-list">
				<div class="version-note-item">
					<dt>{translate(m.home_current_version, $interfacePreferences.language)}</dt>
					<dd>{APP_CONFIG.version}</dd>
				</div>
				<div class="version-note-item">
					<dt>{translate(m.home_release_notes, $interfacePreferences.language)}</dt>
					<dd>{translate(m.home_initial_foundation_note, $interfacePreferences.language)}</dd>
				</div>
			</dl>

			<div class="stack">
				<h3 class="section-subtitle">
					{translate(m.home_release_history, $interfacePreferences.language)}
				</h3>
				<ol class="release-history">
					{#each releaseHistory as release (release.id)}
						<li>
							<span class="release-version">{release.version}</span>
							<span>{translate(release.message, $interfacePreferences.language)}</span>
						</li>
					{/each}
				</ol>
			</div>
		</section>
	</div>
</div>
