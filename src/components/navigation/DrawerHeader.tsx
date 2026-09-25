import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { ChevronRight } from 'lucide-react-native';

interface DrawerHeaderProps {
  onPress?: () => void;
  className?: string;
}

export const DrawerHeader: React.FC<DrawerHeaderProps> = ({
  onPress,
  className = '',
}) => {
  return (
    <TouchableOpacity
      className={`bg-zaminTeal px-3.5 py-4 flex-row items-center justify-between relative overflow-hidden ${className}`}
      activeOpacity={0.85}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel="Jamin Buddy Profile"
    >
      {/* Background Decorative Compass Watermark */}
      <View 
        className="absolute -right-8 -top-8 w-36 h-36 rounded-full border-[10px] border-white/5 opacity-40 pointer-events-none items-center justify-center"
      >
        <View className="w-24 h-24 rounded-full border-2 border-white/10" />
      </View>

      {/* Left: White circular badge with Zamin24 logo */}
      <View className="w-13 h-13 rounded-full bg-white items-center justify-center p-1 shadow-sm">
        <Image
          source={require('../../assets/images/logo.png')}
          className="w-10 h-10"
          resizeMode="contain"
        />
      </View>

      {/* Center: Profile text */}
      <View className="ml-3 flex-1 justify-center">
        <Text 
          className="text-white font-extrabold text-[15px] leading-tight tracking-tight"
          numberOfLines={1}
        >
          Jamin Buddy
        </Text>
        <Text 
          className="text-white/80 font-normal text-[11px] leading-tight mt-0.5"
          numberOfLines={1}
        >
          Farmer / Land Seeker
        </Text>
      </View>

      {/* Right: Chevron arrow */}
      <View className="ml-1 p-1">
        <ChevronRight size={18} color="#FFFFFF" strokeWidth={2.4} />
      </View>
    </TouchableOpacity>
  );
};
