import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { ArrowRight } from 'lucide-react-native';

interface OnboardingButtonProps {
  title: string;
  onPress: () => void;
  showArrow?: boolean;
  className?: string;
  accessibilityLabel?: string;
  disabled?: boolean;
}

export const OnboardingButton: React.FC<OnboardingButtonProps> = ({
  title,
  onPress,
  showArrow = true,
  className = '',
  accessibilityLabel,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.85}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel || title}
      className={`bg-zaminTeal flex-row items-center justify-center rounded-full h-[52px] px-6 shadow-sm active:bg-zaminTeal-dark ${className}`}
    >
      <Text className="text-white font-bold text-base tracking-tight mr-2">
        {title}
      </Text>
      {showArrow && (
        <ArrowRight size={20} color="#FFFFFF" strokeWidth={2.4} />
      )}
    </TouchableOpacity>
  );
};
