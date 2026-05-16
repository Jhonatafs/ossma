<script lang="ts">
	import type { SupportedLanguage, SupportedTheme } from '$lib/config/app';
	import type { MenuLabelMode } from '$lib/features/settings/interface-preferences';
	import {
		interfacePreferences,
		setInterfaceLanguage,
		setMenuLabelMode,
		setInterfaceTheme
	} from '$lib/features/settings/interface-preferences-store';
	import * as m from '$lib/paraglide/messages';
	import { translate } from '$lib/shared/utils/i18n';

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
		},
		{
			value: 'dracula',
			label: m.theme_dracula
		},
		{
			value: 'gruvbox',
			label: m.theme_gruvbox
		}
	] as const;

	const menuLabelModeOptions = [
		{
			value: 'iconAndText',
			label: m.settings_menu_icon_and_text
		},
		{
			value: 'iconOnly',
			label: m.settings_menu_icon_only
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

	function handleMenuLabelModeChange(event: Event) {
		const select = event.currentTarget;

		if (select instanceof HTMLSelectElement) {
			setMenuLabelMode(select.value as MenuLabelMode);
		}
	}
</script>

<svelte:head>
	<title>
		{translate(m.page_settings_title, $interfacePreferences.language)} · {translate(
			m.app_name,
			$interfacePreferences.language
		)}
	</title>
	<meta
		name="description"
		content={translate(m.page_settings_description, $interfacePreferences.language)}
	/>
</svelte:head>

<section class="page-section page-hero stack" aria-labelledby="settings-title">
	<p class="page-kicker">{translate(m.common_current, $interfacePreferences.language)}</p>
	<h1 id="settings-title" class="page-title">
		{translate(m.page_settings_title, $interfacePreferences.language)}
	</h1>
	<p class="page-description">
		{translate(m.page_settings_description, $interfacePreferences.language)}
	</p>
	<p class="text-muted">
		{translate(m.settings_save_behavior, $interfacePreferences.language)}
	</p>
</section>

<section
	class="page-section"
	aria-label={translate(m.page_settings_title, $interfacePreferences.language)}
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
			<select id="interface-theme" value={$interfacePreferences.theme} onchange={handleThemeChange}>
				{#each themeOptions as option (option.value)}
					<option value={option.value}>
						{translate(option.label, $interfacePreferences.language)}
					</option>
				{/each}
			</select>
		</article>

		<article class="card stack">
			<div class="stack">
				<label class="card-title" for="menu-label-mode">
					{translate(m.settings_navigation_display, $interfacePreferences.language)}
				</label>
				<p class="card-description">
					{translate(m.settings_menu_display_description, $interfacePreferences.language)}
				</p>
			</div>
			<select
				id="menu-label-mode"
				value={$interfacePreferences.menuLabelMode}
				onchange={handleMenuLabelModeChange}
			>
				{#each menuLabelModeOptions as option (option.value)}
					<option value={option.value}>
						{translate(option.label, $interfacePreferences.language)}
					</option>
				{/each}
			</select>
		</article>
	</div>
</section>

<p class="text-muted">{translate(m.settings_local_notice, $interfacePreferences.language)}</p>
