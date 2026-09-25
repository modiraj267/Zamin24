import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Mic } from 'lucide-react-native';
import { Colors } from '../../constants/colors';

interface JaminBuddyButtonProps {
  className?: string;
  onPress?: () => void;
}

export const JaminBuddyButton: React.FC<JaminBuddyButtonProps> = ({
  className = '',
  onPress,
}) => {
  return (
    <TouchableOpacity 
      className={`flex-row items-center justify-center bg-zaminBuddy h-[38px] px-3.5 rounded-full shadow-sm ${className}`}
      activeOpacity={0.8}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel="Jamin Buddy Voice Assistant"
    >
      <Mic size={15} color={Colors.white} strokeWidth={2.4} />
      <Text className="ml-1.5 text-white font-semibold text-[13px] tracking-tight">
        Jamin Buddy
      </Text>
    </TouchableOpacity>
  );
};
