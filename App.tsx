import 'react-native-gesture-handler';
import './global.css';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppNavigator } from './src/navigation/AppNavigator';
import { StatusBar } from 'react-native';
import { Colors } from './src/constants/colors';
import { configureReanimatedLogger, ReanimatedLogLevel } from 'react-native-reanimated';

// Disable strict mode in Reanimated logger to prevent false-positive render-time read warnings from react-native-css-interop
configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false,
});

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />
      <AppNavigator />
    </SafeAreaProvider>
  );
}
