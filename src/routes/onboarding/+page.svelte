<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';

	import type { SupportedLanguage, SupportedTheme } from '$lib/config/app';
	import { completeOnboarding } from '$lib/features/onboarding/onboarding-store';
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

	type OnboardingStep = 'welcome' | 'language' | 'theme' | 'usageMode' | 'profileSetup' | 'finish';

	type UsageMode = 'independent' | 'institution';

	const steps: OnboardingStep[] = [
		'welcome',
		'language',
		'theme',
		'usageMode',
		'profileSetup',
		'finish'
	];

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

	const usageModeOptions = [
		{
			value: 'independent',
			label: m.onboarding_usage_independent
		},
		{
			value: 'institution',
			label: m.onboarding_usage_institution
		}
	] as const;

	let currentStepIndex = $state(0);
	let usageMode = $state<UsageMode>('independent');

	const currentStep = $derived(steps[currentStepIndex]);
	const isFirstStep = $derived(currentStepIndex === 0);
	const isLastStep = $derived(currentStepIndex === steps.length - 1);

	function previousStep() {
		if (!isFirstStep) {
			currentStepIndex -= 1;
		}
	}

	function nextStep() {
		if (!isLastStep) {
			currentStepIndex += 1;
		}
	}

	function handleLanguageSelection(language: SupportedLanguage) {
		setInterfaceLanguage(language);
	}

	function handleThemeSelection(theme: SupportedTheme) {
		setInterfaceTheme(theme);
	}

	function handleUsageModeSelection(nextUsageMode: UsageMode) {
		usageMode = nextUsageMode;
	}

	function finishOnboarding() {
		completeOnboarding();
		void goto(resolve('/'));
	}
</script>

<svelte:head>
	<title>
		{translate(m.onboarding_welcome_title, $interfacePreferences.language)} · {translate(
			m.app_name,
			$interfacePreferences.language
		)}
	</title>
	<meta
		name="description"
		content={translate(m.onboarding_welcome_description, $interfacePreferences.language)}
	/>
</svelte:head>

<main class="app-shell">
	<div class="page-container stack stack-lg">
		<section class="page-section page-hero stack" aria-labelledby="onboarding-title">
			<p class="page-kicker">
				{translate(m.onboarding_step, $interfacePreferences.language)}
				{currentStepIndex + 1}
				{translate(m.onboarding_of, $interfacePreferences.language)}
				{steps.length}
			</p>

			{#if currentStep === 'welcome'}
				<h1 id="onboarding-title" class="page-title">
					{translate(m.onboarding_welcome_title, $interfacePreferences.language)}
				</h1>
				<p class="page-description">
					{translate(m.onboarding_welcome_description, $interfacePreferences.language)}
				</p>
				<p class="text-muted">
					{translate(m.onboarding_welcome_local_first, $interfacePreferences.language)}
				</p>
			{:else if currentStep === 'language'}
				<h1 id="onboarding-title" class="page-title">
					{translate(m.onboarding_language_title, $interfacePreferences.language)}
				</h1>
				<div class="option-grid">
					{#each languageOptions as option (option.value)}
						<button
							type="button"
							class="option-card stack"
							aria-pressed={$interfacePreferences.language === option.value}
							onclick={() => handleLanguageSelection(option.value)}
						>
							<span class="card-title">
								{translate(option.label, $interfacePreferences.language)}
							</span>
						</button>
					{/each}
				</div>
			{:else if currentStep === 'theme'}
				<h1 id="onboarding-title" class="page-title">
					{translate(m.onboarding_theme_title, $interfacePreferences.language)}
				</h1>
				<div class="option-grid">
					{#each themeOptions as option (option.value)}
						<button
							type="button"
							class="option-card stack"
							aria-pressed={$interfacePreferences.theme === option.value}
							onclick={() => handleThemeSelection(option.value)}
						>
							<span class="card-title">
								{translate(option.label, $interfacePreferences.language)}
							</span>
						</button>
					{/each}
				</div>
			{:else if currentStep === 'usageMode'}
				<h1 id="onboarding-title" class="page-title">
					{translate(m.onboarding_usage_mode_title, $interfacePreferences.language)}
				</h1>
				<div class="option-grid">
					{#each usageModeOptions as option (option.value)}
						<button
							type="button"
							class="option-card stack"
							aria-pressed={usageMode === option.value}
							onclick={() => handleUsageModeSelection(option.value)}
						>
							<span class="card-title">
								{translate(option.label, $interfacePreferences.language)}
							</span>
						</button>
					{/each}
				</div>
			{:else if currentStep === 'profileSetup'}
				<h1 id="onboarding-title" class="page-title">
					{translate(m.onboarding_profile_title, $interfacePreferences.language)}
				</h1>
				<p class="page-description">
					{translate(m.onboarding_profile_description, $interfacePreferences.language)}
				</p>
				<article class="card stack">
					<h2 class="card-title">
						{translate(m.onboarding_usage_summary, $interfacePreferences.language)}
					</h2>
					<p class="card-description">
						{translate(
							usageMode === 'independent'
								? m.onboarding_usage_independent
								: m.onboarding_usage_institution,
							$interfacePreferences.language
						)}
					</p>
				</article>
			{:else}
				<h1 id="onboarding-title" class="page-title">
					{translate(m.onboarding_finish_title, $interfacePreferences.language)}
				</h1>
				<p class="page-description">
					{translate(m.onboarding_finish_description, $interfacePreferences.language)}
				</p>
			{/if}
		</section>

		<section
			class="page-section wizard-actions"
			aria-label={translate(m.onboarding_navigation, $interfacePreferences.language)}
		>
			<button
				type="button"
				class="button button-secondary"
				disabled={isFirstStep}
				onclick={previousStep}
			>
				{translate(m.onboarding_previous, $interfacePreferences.language)}
			</button>

			{#if isLastStep}
				<button type="button" class="button" onclick={finishOnboarding}>
					{translate(m.onboarding_finish, $interfacePreferences.language)}
				</button>
			{:else}
				<button type="button" class="button" onclick={nextStep}>
					{translate(m.onboarding_next, $interfacePreferences.language)}
				</button>
			{/if}
		</section>
	</div>
</main>
