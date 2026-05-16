import { browser } from '$app/environment';

export type OnboardingState = {
	completed: boolean;
};

export const ONBOARDING_STORAGE_KEY = 'ossma.onboarding';

export function getDefaultOnboardingState(): OnboardingState {
	return {
		completed: false
	};
}

export function normalizeOnboardingState(value: unknown): OnboardingState {
	if (!value || typeof value !== 'object') {
		return getDefaultOnboardingState();
	}

	const state = value as Partial<OnboardingState>;

	if (typeof state.completed !== 'boolean') {
		return getDefaultOnboardingState();
	}

	return {
		completed: state.completed
	};
}

export function loadOnboardingState(): OnboardingState {
	if (!browser) {
		return getDefaultOnboardingState();
	}

	try {
		const storedState = localStorage.getItem(ONBOARDING_STORAGE_KEY);

		if (!storedState) {
			return getDefaultOnboardingState();
		}

		return normalizeOnboardingState(JSON.parse(storedState));
	} catch {
		return getDefaultOnboardingState();
	}
}

export function saveOnboardingState(state: OnboardingState): OnboardingState {
	const normalizedState = normalizeOnboardingState(state);

	if (browser) {
		localStorage.setItem(ONBOARDING_STORAGE_KEY, JSON.stringify(normalizedState));
	}

	return normalizedState;
}

export function markOnboardingCompleted(): OnboardingState {
	return saveOnboardingState({
		completed: true
	});
}

export function resetOnboardingState(): OnboardingState {
	return saveOnboardingState(getDefaultOnboardingState());
}
