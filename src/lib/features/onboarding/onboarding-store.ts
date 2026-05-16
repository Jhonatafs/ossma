import { writable } from 'svelte/store';

import {
	getDefaultOnboardingState,
	loadOnboardingState,
	markOnboardingCompleted,
	resetOnboardingState,
	type OnboardingState
} from './onboarding-state';

export const onboardingState = writable<OnboardingState>(getDefaultOnboardingState());

export function initializeOnboardingState(): OnboardingState {
	const state = loadOnboardingState();

	onboardingState.set(state);

	return state;
}

export function completeOnboarding(): OnboardingState {
	const state = markOnboardingCompleted();

	onboardingState.set(state);

	return state;
}

export function resetOnboarding(): OnboardingState {
	const state = resetOnboardingState();

	onboardingState.set(state);

	return state;
}
