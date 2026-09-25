import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Users, Home } from 'lucide-react-native';
import Svg, { Path } from 'react-native-svg';
import { Colors } from '../../constants/colors';

export type FeatureCardType = '360' | 'verified' | 'network' | 'match';

interface FeatureCardProps {
  title: string;
  subtitle: string;
  type: FeatureCardType;
  className?: string;
  onPress?: () => void;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  subtitle,
  type,
  className = '',
  onPress,
}) => {
  const renderIcon = () => {
    switch (type) {
      case '360':
        return (
          <View className="w-[22px] h-[22px] items-center justify-center">
            <Svg width={22} height={22} viewBox="0 0 24 24" fill="none">
              <Path
                d="M21 12a9 9 0 1 1-2.64-6.36M21 5v5h-5"
                stroke="#FFFFFF"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
            <Text className="absolute text-white text-[7.5px] font-extrabold text-center">
              360°
            </Text>
          </View>
        );
      case 'verified':
        return (
          <Svg width={18} height={18} viewBox="0 0 24 24">
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1.06 13.54l-3.24-3.24 1.41-1.41 1.83 1.83 4.24-4.24 1.41 1.41-5.65 5.65z"
              fill="#FFFFFF"
            />
          </Svg>
        );
      case 'network':
        return <Users size={18} color={Colors.white} strokeWidth={2.2} />;
      case 'match':
        return <Home size={19} color={Colors.white} strokeWidth={2.2} />;
    }
  };

  return (
    <TouchableOpacity 
      className={`flex-row items-center bg-zaminCardBg rounded-full border border-zaminCardBorder px-2 py-2 w-[48.5%] mb-2 ${className}`}
      activeOpacity={0.8} 
      onPress={onPress}
    >
      <View className="w-9 h-9 rounded-full border border-white/50 bg-white/10 items-center justify-center mr-1.5">
        {renderIcon()}
      </View>
      <View className="flex-1 justify-center">
        <Text className="text-white text-[11.5px] font-bold tracking-tight mb-0.5" numberOfLines={1}>
          {title}
        </Text>
        <Text className="text-white/80 text-[9.5px] font-normal tracking-tight" numberOfLines={1}>
          {subtitle}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
