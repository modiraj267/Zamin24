import React from 'react';
import { View, TouchableOpacity } from 'react-native';

interface OnboardingPaginationProps {
  totalSlides: number;
  currentIndex: number;
  onDotPress?: (index: number) => void;
}

export const OnboardingPagination: React.FC<OnboardingPaginationProps> = ({
  totalSlides,
  currentIndex,
  onDotPress,
}) => {
  return (
    <View
      className="flex-row items-center justify-center gap-2 py-3"
      accessibilityRole="tablist"
      accessibilityLabel={`Slide ${currentIndex + 1} of ${totalSlides}`}
    >
      {Array.from({ length: totalSlides }).map((_, index) => {
        const isActive = index === currentIndex;
        return (
          <TouchableOpacity
            key={`dot-${index}`}
            onPress={() => onDotPress && onDotPress(index)}
            disabled={!onDotPress}
            activeOpacity={0.7}
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
            accessibilityRole="tab"
            accessibilityState={{ selected: isActive }}
            accessibilityLabel={`Go to slide ${index + 1}`}
            className={`h-2.5 rounded-full ${
              isActive ? 'w-7 bg-zaminTeal' : 'w-2.5 bg-slate-300'
            }`}
          />
        );
      })}
    </View>
  );
};
