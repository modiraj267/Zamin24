import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { ChevronDown, FileText } from 'lucide-react-native';
import { Colors } from '../../constants/colors';

interface SearchFieldProps {
  label: string;
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
  type: 'select' | 'text';
  className?: string;
  onPress?: () => void;
}

export const SearchField: React.FC<SearchFieldProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
  type,
  className = '',
  onPress,
}) => {
  return (
    <View className={`w-[48.5%] mb-3 ${className}`}>
      <Text className="text-zaminNavy text-[12px] font-bold mb-1.5">{label}</Text>
      {type === 'select' ? (
        <TouchableOpacity 
          className="flex-row items-center justify-between border border-zaminBorder rounded-[10px] px-3 h-11 bg-white"
          onPress={onPress} 
          activeOpacity={0.7}
        >
          <Text
            className={`flex-1 text-[12px] font-medium mr-1 ${
              value ? 'text-zaminNavy' : 'text-zaminPlaceholder'
            }`}
            numberOfLines={1}
          >
            {value || placeholder}
          </Text>
          <ChevronDown size={17} color={Colors.primary} strokeWidth={2.4} />
        </TouchableOpacity>
      ) : (
        <View className="flex-row items-center justify-between border border-zaminBorder rounded-[10px] px-3 h-11 bg-white">
          <TextInput
            className="flex-1 h-full text-zaminNavy text-[12px] font-medium p-0"
            placeholder={placeholder}
            placeholderTextColor={Colors.text.light}
            value={value}
            onChangeText={onChangeText}
          />
          <FileText size={17} color={Colors.text.light} strokeWidth={1.8} />
        </View>
      )}
    </View>
  );
};
