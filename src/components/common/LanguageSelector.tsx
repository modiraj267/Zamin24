import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Languages } from 'lucide-react-native';
import { Colors } from '../../constants/colors';

interface LanguageSelectorProps {
  className?: string;
  onPress?: () => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  className = '',
  onPress,
}) => {
  return (
    <TouchableOpacity 
      className={`flex-row items-center justify-center bg-zaminLangBg h-[38px] px-3 rounded-full ${className}`}
      activeOpacity={0.8}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel="Select Language"
    >
      <Languages size={17} color={Colors.primary} strokeWidth={2.2} />
      <Text className="ml-1 text-zaminTeal font-bold text-[13px]">
        EN
      </Text>
    </TouchableOpacity>
  );
};
