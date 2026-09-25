import React from 'react';
import { View, Text } from 'react-native';
import { FeatureCard } from './FeatureCard';

interface HeroSectionProps {
  className?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ className = '' }) => {
  return (
    <View className={`px-4 pt-1.5 pb-1 ${className}`}>
      {/* 3. HERO TITLE */}
      <Text className="text-white text-[27px] font-black leading-[31px] tracking-tight text-left mb-2.5">
        JAHAN JAMIN,{'\n'}WAHAN JAMIN24
      </Text>

      {/* 4. PLATFORM SUBTITLE WITH DECORATIVE LINES */}
      <View className="flex-row items-center mb-2.5">
        <View className="h-[1.2px] bg-white/65 w-7" />
        <Text className="text-white text-[10.5px] font-bold tracking-widest mx-2">
          INDIA’S LEADING OPEN LAND PLATFORM
        </Text>
        <View className="h-[1.2px] bg-white/65 w-7" />
      </View>

      {/* 4. DESCRIPTION PARAGRAPH */}
      <Text className="text-white/90 text-[12.5px] leading-[18px] font-normal text-left mb-3.5">
        Explore verified open lands with 360° virtual tours,{'\n'}trusted connections & transparent deals.
      </Text>

      {/* 5. 2x2 FEATURE CARDS GRID */}
      <View className="flex-row flex-wrap justify-between items-center">
        <FeatureCard
          type="360"
          title="360° Virtual Tours"
          subtitle="Experience Every Detail"
        />
        <FeatureCard
          type="verified"
          title="Verified Listings"
          subtitle="100% Verified Properties"
        />
        <FeatureCard
          type="network"
          title="Trusted Network"
          subtitle="Buy • Sell"
        />
        <FeatureCard
          type="match"
          title="Smart Match"
          subtitle="We Connect Right Buyers"
        />
      </View>
    </View>
  );
};
