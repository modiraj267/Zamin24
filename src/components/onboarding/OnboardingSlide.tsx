import React from 'react';
import { View, Text, Image, ImageSourcePropType, useWindowDimensions, Platform } from 'react-native';

export interface OnboardingSlideData {
  id: string;
  header?: string;
  title: string;
  description: string;
  image: ImageSourcePropType;
  imageAccessibilityLabel: string;
}

interface OnboardingSlideProps {
  slide: OnboardingSlideData;
}

export const OnboardingSlide: React.FC<OnboardingSlideProps> = ({ slide }) => {
  const { width, height } = useWindowDimensions();

  // Responsive image dimensions based on screen height
  const imageSize = Math.min(width * 0.76, height * 0.36, 320);

  return (
    <View
      style={{ width }}
      className="items-center px-6 justify-between flex-1"
    >
      {/* Top Header Section (prominently on Slide 1) */}
      <View className="items-center justify-center pt-2 pb-2 min-h-[44px]">
        {slide.header ? (
          <Text className="text-zaminTeal font-extrabold text-xl tracking-tight text-center">
            {slide.header}
          </Text>
        ) : (
          <View className="h-6" />
        )}
      </View>

      {/* Visual Illustration Card */}
      <View className="items-center justify-center my-auto py-2">
        <View
          style={{ width: imageSize, height: imageSize }}
          className="rounded-3xl bg-slate-50 items-center justify-center overflow-hidden border border-zaminBorder/60 shadow-sm"
        >
          <Image
            source={slide.image}
            style={{ width: '100%', height: '100%' }}
            resizeMode="cover"
            accessibilityRole="image"
            accessibilityLabel={slide.imageAccessibilityLabel}
          />
        </View>
      </View>

      {/* Title & Description Container */}
      <View className="items-center px-4 pb-4">
        <Text className="text-2xl font-bold text-zaminNavy text-center mb-3 tracking-tight">
          {slide.title}
        </Text>
        <Text className="text-sm font-normal text-zaminMuted text-center leading-6 max-w-[320px]">
          {slide.description}
        </Text>
      </View>
    </View>
  );
};
