import AsyncStorage from '@react-native-async-storage/async-storage';

const ONBOARDING_COMPLETED_KEY = 'hasCompletedOnboarding';

// In-memory fallback if AsyncStorage fails (e.g. quota exceeded or storage failure)
let inMemoryOnboardingState: boolean | null = null;

/**
 * Checks whether the user has completed the onboarding flow.
 * Returns true if completed, false otherwise.
 * Safely catches any storage error and provides a fallback.
 */
export const getHasCompletedOnboarding = async (): Promise<boolean> => {
  try {
    const value = await AsyncStorage.getItem(ONBOARDING_COMPLETED_KEY);
    if (value !== null) {
      const parsed = value === 'true';
      inMemoryOnboardingState = parsed;
      return parsed;
    }
    return inMemoryOnboardingState ?? false;
  } catch (error) {
    console.warn('[onboardingStorage] Failed to read onboarding state from AsyncStorage:', error);
    return inMemoryOnboardingState ?? false;
  }
};

/**
 * Persists the onboarding completion state.
 * Stores 'true' or 'false' in AsyncStorage and updates the memory fallback.
 */
export const setHasCompletedOnboarding = async (completed: boolean = true): Promise<void> => {
  inMemoryOnboardingState = completed;
  try {
    await AsyncStorage.setItem(ONBOARDING_COMPLETED_KEY, completed ? 'true' : 'false');
  } catch (error) {
    console.warn('[onboardingStorage] Failed to save onboarding state to AsyncStorage:', error);
  }
};

/**
 * Resets the onboarding state on logout (sets hasCompletedOnboarding = false).
 * Ensures that if the app is restarted after logout, onboarding is shown again.
 */
export const resetOnboardingState = async (): Promise<void> => {
  inMemoryOnboardingState = false;
  try {
    await AsyncStorage.setItem(ONBOARDING_COMPLETED_KEY, 'false');
  } catch (error) {
    console.warn('[onboardingStorage] Failed to reset onboarding state in AsyncStorage:', error);
  }
};
