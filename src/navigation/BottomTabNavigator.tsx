import React from 'react';
import { View, Text, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Search, Map, FileText, User } from 'lucide-react-native';
import { HomeScreen } from '../screens/HomeScreen/HomeScreen';
import { SearchScreen, MapViewScreen, ProjectsScreen, AccountScreen } from '../screens/PlaceholderScreens';
import { Colors } from '../constants/colors';
import { BottomTabParamList } from '../types/navigation';

const Tab = createBottomTabNavigator<BottomTabParamList>();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.text.muted,
        tabBarStyle: {
          backgroundColor: Colors.white,
          borderTopLeftRadius: 28,
          borderTopRightRadius: 28,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: Platform.OS === 'ios' ? 84 : 70,
          paddingBottom: Platform.OS === 'ios' ? 18 : 8,
          paddingTop: 8,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -3 },
          shadowOpacity: 0.08,
          shadowRadius: 10,
          elevation: 12,
          borderTopWidth: 0,
        },
        tabBarIcon: ({ focused, color }) => {
          if (route.name === 'Home') {
            return (
              <Home 
                size={22} 
                color={color} 
                fill={focused ? color : 'none'} 
                strokeWidth={focused ? 1.6 : 2} 
              />
            );
          }
          if (route.name === 'Search') {
            return <Search size={22} color={color} strokeWidth={2} />;
          }
          if (route.name === 'MapView') {
            return <Map size={22} color={color} strokeWidth={2} />;
          }
          if (route.name === 'Projects') {
            return <FileText size={22} color={color} strokeWidth={2} />;
          }
          if (route.name === 'Account') {
            return <User size={22} color={color} strokeWidth={2} />;
          }
          return <Home size={22} color={color} />;
        },
        tabBarLabel: ({ focused }) => {
          let label = route.name as string;
          if (route.name === 'MapView') label = 'Map View';

          return (
            <View className="items-center justify-center mt-0.5">
              <Text 
                className={`text-[10.5px] tracking-tight ${
                  focused ? 'text-zaminTeal font-bold' : 'text-zaminMuted font-medium'
                }`}
              >
                {label}
              </Text>
              {focused && (
                <View className="w-7 h-[3.5px] rounded-full bg-zaminTeal mt-[3px]" />
              )}
            </View>
          );
        },
        tabBarItemStyle: {
          paddingTop: 4,
          alignItems: 'center',
          justifyContent: 'center',
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="MapView" component={MapViewScreen} />
      <Tab.Screen name="Projects" component={ProjectsScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};
