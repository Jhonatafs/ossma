<script lang="ts">
	import { interfacePreferences } from '$lib/features/settings/interface-preferences-store';
	import * as m from '$lib/paraglide/messages';
	import { translate } from '$lib/shared/utils/i18n';
</script>

<svelte:head>
	<title>
		{translate(m.page_backups_title, $interfacePreferences.language)} · {translate(
			m.app_name,
			$interfacePreferences.language
		)}
	</title>
	<meta
		name="description"
		content={translate(m.page_backups_description, $interfacePreferences.language)}
	/>
</svelte:head>

<section class="page-section page-hero stack" aria-labelledby="backups-title">
	<p class="page-kicker">{translate(m.common_early_module, $interfacePreferences.language)}</p>
	<h1 id="backups-title" class="page-title">
		{translate(m.page_backups_title, $interfacePreferences.language)}
	</h1>
	<p class="page-description">
		{translate(m.page_backups_description, $interfacePreferences.language)}
	</p>
</section>

<section class="home-section stack" aria-labelledby="backups-placeholder-title">
	<h2 id="backups-placeholder-title" class="card-title">
		{translate(m.common_next, $interfacePreferences.language)}
	</h2>
	<p class="card-description">
		{translate(m.page_backups_placeholder, $interfacePreferences.language)}
	</p>
</section>
