import React, { useEffect, useRef } from 'react';
import { View, Text, Image, Animated, StatusBar, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RootStackNavProp } from '../../types/navigation';
import { getHasCompletedOnboarding } from '../../services/storage/onboardingStorage';
import { Colors } from '../../constants/colors';

export const SplashScreen: React.FC = () => {
  const navigation = useNavigation<RootStackNavProp>();
  const insets = useSafeAreaInsets();

  // Animation values
  const logoOpacity = useRef(new Animated.Value(0)).current;
  const logoScale = useRef(new Animated.Value(0.88)).current;
  const brandOpacity = useRef(new Animated.Value(0)).current;
  const brandTranslateY = useRef(new Animated.Value(8)).current;
  const taglineOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // 1. Subtle, premium entrance animation
    Animated.sequence([
      Animated.parallel([
        Animated.timing(logoOpacity, {
          toValue: 1,
          duration: 650,
          useNativeDriver: true,
        }),
        Animated.timing(logoScale, {
          toValue: 1,
          duration: 650,
          useNativeDriver: true,
        }),
      ]),
      Animated.parallel([
        Animated.timing(brandOpacity, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.timing(brandTranslateY, {
          toValue: 0,
          duration: 400,
          useNativeDriver: true,
        }),
      ]),
      Animated.timing(taglineOpacity, {
        toValue: 1,
        duration: 350,
        useNativeDriver: true,
      }),
    ]).start();

    // 2. Initialization tasks (storage check, future auth/config tasks)
    let isMounted = true;
    const initializeApp = async () => {
      const startTime = Date.now();
      let hasCompleted = false;

      try {
        hasCompleted = await getHasCompletedOnboarding();
      } catch (e) {
        console.warn('[SplashScreen] Onboarding status check failed, defaulting to false:', e);
        hasCompleted = false;
      }

      // Maintain a brief branded transition (~1.8 seconds)
      const elapsed = Date.now() - startTime;
      const targetDuration = 1800;
      const delay = Math.max(0, targetDuration - elapsed);

      setTimeout(() => {
        if (!isMounted) return;
        if (hasCompleted) {
          navigation.reset({
            index: 0,
            routes: [{ name: 'Main' }],
          });
        } else {
          navigation.reset({
            index: 0,
            routes: [{ name: 'Onboarding' }],
          });
        }
      }, delay);
    };

    initializeApp();

    return () => {
      isMounted = false;
    };
  }, [navigation, logoOpacity, logoScale, brandOpacity, brandTranslateY, taglineOpacity]);

  return (
    <View className="flex-1 bg-white items-center justify-between">
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      {/* Top decorative subtle spacer */}
      <View style={{ height: insets.top }} />

      {/* Centered Brand & Logo Container */}
      <View className="items-center justify-center px-6">
        {/* Animated Logo */}
        <Animated.View
          style={{
            opacity: logoOpacity,
            transform: [{ scale: logoScale }],
          }}
          className="items-center justify-center mb-4"
        >
          <View className="w-28 h-28 rounded-3xl bg-zaminLangBg/40 items-center justify-center p-3 shadow-sm border border-zaminBorder/50">
            <Image
              source={require('../../assets/images/logo.png')}
              className="w-20 h-20"
              resizeMode="contain"
              accessibilityRole="image"
              accessibilityLabel="Zamin24 Logo"
            />
          </View>
        </Animated.View>

        {/* Animated Brand Title */}
        <Animated.View
          style={{
            opacity: brandOpacity,
            transform: [{ translateY: brandTranslateY }],
          }}
          className="items-center"
        >
          <Text className="text-3xl font-extrabold text-zaminTeal tracking-tight">
            Zamin24
          </Text>
        </Animated.View>

        {/* Animated Tagline */}
        <Animated.View
          style={{
            opacity: taglineOpacity,
          }}
          className="items-center mt-2"
        >
          <Text className="text-sm font-medium text-zaminMuted tracking-normal">
            Connecting Land & Dreams
          </Text>
        </Animated.View>
      </View>

      {/* Bottom Footer Area */}
      <View
        className="items-center pb-8"
        style={{ paddingBottom: Math.max(insets.bottom, 24) }}
      >
        <Text className="text-xs font-medium text-zaminMuted/60">
          India's Trusted Land Marketplace
        </Text>
      </View>
    </View>
  );
};
