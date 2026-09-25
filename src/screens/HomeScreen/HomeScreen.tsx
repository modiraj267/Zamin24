import React, { useState } from 'react';
import { ScrollView, View, Alert, ImageBackground, Platform } from 'react-native';
import { Header } from '../../components/common/Header';
import { HeroSection } from './HeroSection';
import { SearchPanel } from './SearchPanel';
import { homeApi } from '../../services/api/homeApi';

export const HomeScreen = () => {
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async () => {
    if (isSearching) return;
    setIsSearching(true);
    
    try {
      const response = await homeApi.searchProperties({});
      if (response.data.length === 0) {
        Alert.alert('No Results', 'No properties found matching your criteria.');
      } else {
        Alert.alert('Success', `Found ${response.total} properties!`);
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to search properties. Please try again later.');
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <View className="flex-1 bg-white">
      {/* 1. White Curved Header */}
      <Header />

      {/* 2 & 19. Full aerial land image background extending behind hero and search card */}
      <ImageBackground
        source={require('../../assets/images/hero-bg.jpg')}
        className="flex-1 w-full h-full"
        resizeMode="cover"
      >
        <View className="flex-1 bg-zaminOverlay">
          <ScrollView 
            showsVerticalScrollIndicator={false}
            className="flex-1"
            contentContainerStyle={{
              flexGrow: 1,
              paddingTop: 16,
              paddingBottom: Platform.OS === 'ios' ? 95 : 80,
            }}
            bounces={false}
          >
            {/* 3, 4, 5. Hero title, badge, description, and feature cards */}
            <HeroSection />

            {/* 7, 8, 9, 10. Search Card & Trust items */}
            <SearchPanel onSearch={handleSearch} isLoading={isSearching} />
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};
