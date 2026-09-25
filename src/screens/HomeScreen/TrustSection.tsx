import React from 'react';
import { View, Text } from 'react-native';
import { ShieldCheck, FileCheck, PhoneCall } from 'lucide-react-native';
import { Colors } from '../../constants/colors';

interface TrustSectionProps {
  className?: string;
}

export const TrustSection: React.FC<TrustSectionProps> = ({ className = '' }) => {
  return (
    <View className={`flex-row items-center justify-between py-0.5 ${className}`}>
      {/* Item 1 */}
      <View className="flex-row items-center flex-1">
        <ShieldCheck size={20} color={Colors.primary} strokeWidth={2.2} />
        <View className="ml-1.5 flex-1">
          <Text className="text-zaminNavy text-[10.5px] font-bold mb-0.5">100% Secure</Text>
          <Text className="text-zaminMuted text-[8px] font-normal" numberOfLines={1}>
            Safe & Transparent Deals
          </Text>
        </View>
      </View>

      <View className="w-[1px] h-[22px] bg-zaminBorder mx-1" />

      {/* Item 2 */}
      <View className="flex-row items-center flex-1">
        <FileCheck size={20} color={Colors.primary} strokeWidth={2.2} />
        <View className="ml-1.5 flex-1">
          <Text className="text-zaminNavy text-[10.5px] font-bold mb-0.5">Legal Verified</Text>
          <Text className="text-zaminMuted text-[8px] font-normal" numberOfLines={1}>
            All Documents Checked
          </Text>
        </View>
      </View>

      <View className="w-[1px] h-[22px] bg-zaminBorder mx-1" />

      {/* Item 3 */}
      <View className="flex-row items-center flex-1">
        <PhoneCall size={19} color={Colors.primary} strokeWidth={2.2} />
        <View className="ml-1.5 flex-1">
          <Text className="text-zaminNavy text-[10.5px] font-bold mb-0.5">24/7 Support</Text>
          <Text className="text-zaminMuted text-[8px] font-normal" numberOfLines={1}>
            We're Here to Help
          </Text>
        </View>
      </View>
    </View>
  );
};
