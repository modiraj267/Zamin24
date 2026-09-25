import { createNavigationContainerRef, CommonActions } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

/**
 * Resets the root navigation stack to the Onboarding flow.
 * Ensures the previous authenticated stack (Home, Drawer) is completely unmounted
 * and cannot be reached via Android hardware back button.
 */
export function resetToOnboarding(): void {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Onboarding' }],
      })
    );
  }
}

/**
 * Resets the root navigation stack to the Main application.
 * Ensures Onboarding is unmounted and removed from the back stack.
 */
export function resetToMain(): void {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Main' }],
      })
    );
  }
}
