import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ChevronRight, LucideIcon } from 'lucide-react-native';
import { Colors } from '../../constants/colors';

interface DrawerMenuItemProps {
  label: string;
  icon: LucideIcon;
  active?: boolean;
  badge?: number;
  className?: string;
  onPress: () => void;
}

export const DrawerMenuItem: React.FC<DrawerMenuItemProps> = ({
  label,
  icon: Icon,
  active = false,
  badge,
  className = '',
  onPress,
}) => {
  return (
    <TouchableOpacity
      className={`flex-row items-center justify-between px-2.5 py-2.5 rounded-xl my-0.5 relative ${
        active ? 'bg-[#E6F1EF]' : 'bg-transparent'
      } ${className}`}
      activeOpacity={0.7}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={label}
    >
      {/* Active Indicator Bar on Left */}
      {active && (
        <View className="w-1 h-6 rounded-full bg-zaminTeal mr-2" />
      )}

      {/* Icon */}
      <View className="w-6 h-6 items-center justify-center mr-2.5">
        <Icon
          size={19}
          color={Colors.primary}
          strokeWidth={active ? 2.4 : 2}
          fill={active && label === 'Home' ? Colors.primary : 'none'}
        />
      </View>

      {/* Label */}
      <Text
        className={`flex-1 text-[13px] tracking-tight ${
          active ? 'font-bold text-zaminNavy' : 'font-semibold text-zaminNavy'
        }`}
        numberOfLines={1}
      >
        {label}
      </Text>

      {/* Notification Badge */}
      {badge !== undefined && badge > 0 && (
        <View className="w-[18px] h-[18px] rounded-full bg-[#E53E3E] items-center justify-center mr-1.5">
          <Text className="text-white text-[10px] font-bold leading-none">
            {badge}
          </Text>
        </View>
      )}

      {/* Right Chevron */}
      <ChevronRight size={15} color={Colors.primary} strokeWidth={2} />
    </TouchableOpacity>
  );
};
