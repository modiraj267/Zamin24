import React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Search } from 'lucide-react-native';
import { Colors } from '../../constants/colors';
import { SearchField } from '../../components/search/SearchField';
import { TrustSection } from './TrustSection';

interface SearchPanelProps {
  onSearch: () => void;
  isLoading: boolean;
  className?: string;
}

export const SearchPanel: React.FC<SearchPanelProps> = ({
  onSearch,
  isLoading,
  className = '',
}) => {
  return (
    <View 
      className={`bg-white rounded-card px-4 pt-[18px] pb-4 mx-4 mt-3.5 mb-5 shadow-lg ${className}`}
      style={{
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.14,
        shadowRadius: 16,
      }}
    >
      <Text className="text-zaminNavy text-[21px] font-extrabold text-center mb-4 tracking-tight">
        Find Your Dream Jamin
      </Text>

      {/* Row 1: Location & Property ID */}
      <View className="flex-row justify-between items-start">
        <SearchField
          label="Location"
          placeholder="Select City / District"
          type="select"
        />
        <SearchField
          label="Property ID (If you have)"
          placeholder="e.g. GJ-01-382120-0001"
          type="text"
        />
      </View>

      {/* Row 2: Land Type & Your Budget */}
      <View className="flex-row justify-between items-start">
        <SearchField
          label="Land Type"
          placeholder="All Land Types"
          type="select"
        />
        <SearchField
          label="Your Budget"
          placeholder="Max Budget (₹)"
          type="select"
        />
      </View>

      {/* Search Zamin Pill Button */}
      <TouchableOpacity
        className="bg-zaminTeal flex-row items-center justify-center h-12 rounded-full mt-1.5 shadow-md"
        style={{
          elevation: 4,
          shadowColor: Colors.primary,
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.25,
          shadowRadius: 8,
        }}
        onPress={onSearch}
        activeOpacity={0.85}
        disabled={isLoading}
        accessibilityRole="button"
        accessibilityLabel="Search Jamin"
      >
        {isLoading ? (
          <ActivityIndicator color={Colors.white} size="small" />
        ) : (
          <>
            <Search size={19} color={Colors.white} strokeWidth={2.4} style={{ marginRight: 8 }} />
            <Text className="text-white text-[15.5px] font-bold tracking-tight">
              Search Jamin
            </Text>
          </>
        )}
      </TouchableOpacity>

      {/* Thin Divider Line */}
      <View className="h-[1px] bg-zaminDivider mt-4 mb-3.5" />

      {/* Trust & Security Section */}
      <TrustSection />
    </View>
  );
};
