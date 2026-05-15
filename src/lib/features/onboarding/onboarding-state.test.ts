import { describe, expect, it } from 'vitest';

import { getDefaultOnboardingState, normalizeOnboardingState } from './onboarding-state';

describe('onboarding state', () => {
	it('defines the default state as not completed', () => {
		expect(getDefaultOnboardingState()).toEqual({
			completed: false
		});
	});

	it('accepts a completed state', () => {
		expect(normalizeOnboardingState({ completed: true })).toEqual({
			completed: true
		});
	});

	it('accepts a pending state', () => {
		expect(normalizeOnboardingState({ completed: false })).toEqual({
			completed: false
		});
	});

	it('rejects invalid values and returns the default state', () => {
		expect(normalizeOnboardingState({ completed: 'true' })).toEqual({
			completed: false
		});
		expect(normalizeOnboardingState({ completed: 1 })).toEqual({
			completed: false
		});
	});

	it('rejects null and undefined values and returns the default state', () => {
		expect(normalizeOnboardingState(null)).toEqual({
			completed: false
		});
		expect(normalizeOnboardingState(undefined)).toEqual({
			completed: false
		});
	});
});
