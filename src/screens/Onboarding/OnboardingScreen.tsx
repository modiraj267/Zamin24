import React, { useRef, useState, useCallback } from 'react';
import {
  View,
  FlatList,
  Image,
  useWindowDimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
  StatusBar,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RootStackNavProp } from '../../types/navigation';
import { setHasCompletedOnboarding } from '../../services/storage/onboardingStorage';
import { OnboardingSlide, OnboardingSlideData } from '../../components/onboarding/OnboardingSlide';
import { OnboardingPagination } from '../../components/onboarding/OnboardingPagination';
import { OnboardingButton } from '../../components/onboarding/OnboardingButton';

const SLIDES: OnboardingSlideData[] = [
  {
    id: 'slide-1',
    header: 'Welcome to Jamin24',
    title: 'Find Land With Confidence',
    description:
      'Discover verified open lands with trusted information, transparent details, and a simpler way to find the right property.',
    image: require('../../assets/images/onboarding/onboarding-land.jpg'),
    imageAccessibilityLabel: 'Illustration of open green farmland with geo location pin',
  },
  {
    id: 'slide-2',
    title: 'Verified Lands. Trusted Deals.',
    description:
      'Explore verified property listings with important details designed to help you make informed land decisions.',
    image: require('../../assets/images/onboarding/onboarding-verified.jpg'),
    imageAccessibilityLabel: 'Illustration of verified property deed with security shield and seal',
  },
  {
    id: 'slide-3',
    title: 'Find Your Perfect Jamin',
    description:
      'Search by location, land type, property ID, and budget to discover properties that match your needs.',
    image: require('../../assets/images/onboarding/onboarding-search.jpg'),
    imageAccessibilityLabel: 'Illustration of cadastral land parcel map with search magnifying glass',
  },
];

export const OnboardingScreen: React.FC = () => {
  const navigation = useNavigation<RootStackNavProp>();
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();

  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList<OnboardingSlideData>>(null);

  const handleFinishOnboarding = useCallback(async () => {
    try {
      await setHasCompletedOnboarding(true);
    } catch (e) {
      console.warn('[OnboardingScreen] Error saving completion status:', e);
    } finally {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Main' }],
      });
    }
  }, [navigation]);

  const handleNext = useCallback(() => {
    if (currentIndex < SLIDES.length - 1) {
      const nextIndex = currentIndex + 1;
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    } else {
      handleFinishOnboarding();
    }
  }, [currentIndex, handleFinishOnboarding]);

  const handleDotPress = useCallback((index: number) => {
    flatListRef.current?.scrollToIndex({ index, animated: true });
    setCurrentIndex(index);
  }, []);

  const handleMomentumScrollEnd = useCallback(
    (e: NativeSyntheticEvent<NativeScrollEvent>) => {
      const contentOffsetX = e.nativeEvent.contentOffset.x;
      const index = Math.round(contentOffsetX / width);
      if (index >= 0 && index < SLIDES.length) {
        setCurrentIndex(index);
      }
    },
    [width]
  );

  return (
    <View className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      {/* Top Header Bar: Centered Brand Logo */}
      <View
        style={{
          paddingTop: Math.max(insets.top, Platform.OS === 'ios' ? 44 : 16),
        }}
        className="px-5 pb-2 items-center justify-center z-10"
      >
        <Image
          source={require('../../assets/images/logo.png')}
          className="w-10 h-10"
          resizeMode="contain"
          accessibilityRole="image"
          accessibilityLabel="Zamin24 Logo"
        />
      </View>

      {/* Horizontal Slides FlatList */}
      <View className="flex-1">
        <FlatList
          ref={flatListRef}
          data={SLIDES}
          keyExtractor={(item) => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          bounces={false}
          onMomentumScrollEnd={handleMomentumScrollEnd}
          renderItem={({ item }) => <OnboardingSlide slide={item} />}
          initialNumToRender={1}
          maxToRenderPerBatch={2}
          windowSize={3}
          getItemLayout={(_, index) => ({
            length: width,
            offset: width * index,
            index,
          })}
        />
      </View>

      {/* Bottom Section: Pagination & Next Button */}
      <View
        style={{
          paddingBottom: Math.max(insets.bottom, 20),
        }}
        className="px-6 pt-2 pb-4"
      >
        {/* Animated Page Dots */}
        <OnboardingPagination
          totalSlides={SLIDES.length}
          currentIndex={currentIndex}
          onDotPress={handleDotPress}
        />

        {/* Action Button: Next → on ALL slides */}
        <View className="mt-3">
          <OnboardingButton
            title="Next"
            onPress={handleNext}
            accessibilityLabel="Next"
          />
        </View>
      </View>
    </View>
  );
};
