<script lang="ts">
	import type { SupportedLanguage, SupportedTheme } from '$lib/config/app';
	import {
		toParaglideLocale,
		type ParaglideLocale
	} from '$lib/features/settings/interface-preferences';
	import {
		interfacePreferences,
		setInterfaceLanguage,
		setInterfaceTheme
	} from '$lib/features/settings/interface-preferences-store';
	import * as m from '$lib/paraglide/messages';

	type StaticMessage = (
		inputs?: Record<string, never>,
		options?: { locale?: ParaglideLocale }
	) => string;

	const translate = (message: StaticMessage, language: SupportedLanguage) =>
		message({}, { locale: toParaglideLocale(language) });

	const languageOptions = [
		{
			value: 'en',
			label: m.language_english
		},
		{
			value: 'pt-BR',
			label: m.language_portuguese_brazil
		}
	] as const;

	const themeOptions = [
		{
			value: 'light',
			label: m.theme_light
		},
		{
			value: 'dark',
			label: m.theme_dark
		}
	] as const;

	function handleLanguageChange(event: Event) {
		const select = event.currentTarget;

		if (select instanceof HTMLSelectElement) {
			setInterfaceLanguage(select.value as SupportedLanguage);
		}
	}

	function handleThemeChange(event: Event) {
		const select = event.currentTarget;

		if (select instanceof HTMLSelectElement) {
			setInterfaceTheme(select.value as SupportedTheme);
		}
	}
</script>

<svelte:head>
	<title>
		{translate(m.nav_settings, $interfacePreferences.language)} · {translate(
			m.app_name,
			$interfacePreferences.language
		)}
	</title>
	<meta
		name="description"
		content={translate(m.settings_description, $interfacePreferences.language)}
	/>
</svelte:head>

<main class="app-shell">
	<div class="page-container stack stack-lg">
		<section class="page-section page-hero stack" aria-labelledby="settings-title">
			<p class="page-kicker">{translate(m.app_status, $interfacePreferences.language)}</p>
			<h1 id="settings-title" class="page-title">
				{translate(m.nav_settings, $interfacePreferences.language)}
			</h1>
			<p class="page-description">
				{translate(m.settings_description, $interfacePreferences.language)}
			</p>
			<p class="text-muted">
				{translate(m.settings_save_behavior, $interfacePreferences.language)}
			</p>
		</section>

		<section
			class="page-section"
			aria-label={translate(m.nav_settings, $interfacePreferences.language)}
		>
			<div class="card-grid">
				<article class="card stack">
					<label class="card-title" for="interface-language">
						{translate(m.settings_language_label, $interfacePreferences.language)}
					</label>
					<select
						id="interface-language"
						value={$interfacePreferences.language}
						onchange={handleLanguageChange}
					>
						{#each languageOptions as option (option.value)}
							<option value={option.value}>
								{translate(option.label, $interfacePreferences.language)}
							</option>
						{/each}
					</select>
				</article>

				<article class="card stack">
					<label class="card-title" for="interface-theme">
						{translate(m.settings_theme_label, $interfacePreferences.language)}
					</label>
					<select
						id="interface-theme"
						value={$interfacePreferences.theme}
						onchange={handleThemeChange}
					>
						{#each themeOptions as option (option.value)}
							<option value={option.value}>
								{translate(option.label, $interfacePreferences.language)}
							</option>
						{/each}
					</select>
				</article>
			</div>
		</section>

		<p class="text-muted">{translate(m.settings_local_notice, $interfacePreferences.language)}</p>
	</div>
</main>
