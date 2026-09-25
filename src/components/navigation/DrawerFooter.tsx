import React from 'react';
import { View, Text, Image } from 'react-native';

interface DrawerFooterProps {
  className?: string;
}

export const DrawerFooter: React.FC<DrawerFooterProps> = ({ className = '' }) => {
  return (
    <View className={`w-full bg-white ${className}`}>
      {/* Agricultural Illustration */}
      <Image
        source={require('../../assets/images/drawer-footer.png')}
        className="w-full h-20"
        resizeMode="contain"
      />

      {/* Branding Footer */}
      <View className="flex-row items-center justify-center pt-1.5 pb-5 px-3">
        <Text className="text-zaminTeal font-bold text-[13px] tracking-tight">
          Jamin24
        </Text>
        <Text className="mx-2 text-slate-300 font-light text-[12px]">
          |
        </Text>
        <Text className="text-zaminMuted font-medium text-[11px] tracking-tight">
          Connecting Land & Dreams
        </Text>
      </View>
    </View>
  );
};
