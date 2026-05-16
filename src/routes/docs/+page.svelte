<script lang="ts">
	import { interfacePreferences } from '$lib/features/settings/interface-preferences-store';
	import * as m from '$lib/paraglide/messages';
	import { translate } from '$lib/shared/utils/i18n';
</script>

<svelte:head>
	<title>
		{translate(m.page_docs_title, $interfacePreferences.language)} · {translate(
			m.app_name,
			$interfacePreferences.language
		)}
	</title>
	<meta
		name="description"
		content={translate(m.page_docs_description, $interfacePreferences.language)}
	/>
</svelte:head>

<section class="page-section page-hero stack" aria-labelledby="docs-title">
	<p class="page-kicker">{translate(m.common_early_module, $interfacePreferences.language)}</p>
	<h1 id="docs-title" class="page-title">
		{translate(m.page_docs_title, $interfacePreferences.language)}
	</h1>
	<p class="page-description">
		{translate(m.page_docs_description, $interfacePreferences.language)}
	</p>
</section>

<section class="home-section stack" aria-labelledby="docs-placeholder-title">
	<h2 id="docs-placeholder-title" class="card-title">
		{translate(m.common_next, $interfacePreferences.language)}
	</h2>
	<p class="card-description">
		{translate(m.page_docs_placeholder, $interfacePreferences.language)}
	</p>
</section>
