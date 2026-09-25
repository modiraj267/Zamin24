import React, { useState } from 'react';
import { View, ScrollView, Alert, Platform } from 'react-native';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  Home,
  Search,
  Map,
  FileText,
  Heart,
  Bell,
  Phone,
  HelpCircle,
  Info,
  Settings,
  LogOut,
} from 'lucide-react-native';
import { DrawerHeader } from './DrawerHeader';
import { DrawerMenuItem } from './DrawerMenuItem';
import { DrawerFooter } from './DrawerFooter';
import { RootStackNavProp } from '../../types/navigation';
import { resetOnboardingState } from '../../services/storage/onboardingStorage';
import { resetToOnboarding } from '../../navigation/navigationRef';

export const CustomDrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
  const insets = useSafeAreaInsets();
  const [activeItem, setActiveItem] = useState<string>('Home');

  const handleNavigate = (itemName: string) => {
    setActiveItem(itemName);

    switch (itemName) {
      case 'Home':
        props.navigation.navigate('MainTabs', { screen: 'Home' });
        props.navigation.closeDrawer();
        break;
      case 'Search Lands':
        props.navigation.navigate('MainTabs', { screen: 'Search' });
        props.navigation.closeDrawer();
        break;
      case 'Map View':
        props.navigation.navigate('MainTabs', { screen: 'MapView' });
        props.navigation.closeDrawer();
        break;
      case 'My Projects':
        props.navigation.navigate('MainTabs', { screen: 'Projects' });
        props.navigation.closeDrawer();
        break;
      case 'Saved / Shortlisted':
        props.navigation.closeDrawer();
        Alert.alert('Saved / Shortlisted', 'Your saved and shortlisted properties will appear here.');
        break;
      case 'Notifications':
        props.navigation.closeDrawer();
        Alert.alert('Notifications', 'You have 3 unread notifications.');
        break;
      case 'Contact Us':
        props.navigation.closeDrawer();
        Alert.alert('Contact Us', 'Support: +91 98765 43210\nEmail: contact@jamin24.com');
        break;
      case 'Help & Support':
        props.navigation.closeDrawer();
        Alert.alert('Help & Support', 'How can we help you today?');
        break;
      case 'About Us':
        props.navigation.closeDrawer();
        Alert.alert('About Us', 'Zamin24 — India’s Leading Open Land Platform');
        break;
      case 'Settings':
        props.navigation.closeDrawer();
        Alert.alert('Settings', 'App preferences and account settings.');
        break;
      case 'Logout':
        Alert.alert(
          'Logout',
          'Are you sure you want to log out of Zamin24?',
          [
            { text: 'Cancel', style: 'cancel' },
            {
              text: 'Logout',
              style: 'destructive',
              onPress: async () => {
                setActiveItem('Home');
                props.navigation.closeDrawer();
                await resetOnboardingState();
                const rootNav = props.navigation.getParent<RootStackNavProp>();
                if (rootNav) {
                  rootNav.reset({
                    index: 0,
                    routes: [{ name: 'Onboarding' }],
                  });
                } else {
                  resetToOnboarding();
                }
              },
            },
          ]
        );
        break;
    }
  };

  return (
    <View className="flex-1 bg-white">
      {/* Top Safe Area Spacing */}
      <View 
        className="bg-white w-full"
        style={{ height: Math.max(insets.top, Platform.OS === 'ios' ? 44 : 20) }} 
      />

      {/* Profile Header */}
      <DrawerHeader
        onPress={() => {
          props.navigation.closeDrawer();
          Alert.alert('Jamin Buddy', 'Voice Assistant profile and preferences.');
        }}
      />

      {/* Menu Area */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex-1 px-2.5 pt-2"
        contentContainerStyle={{ paddingBottom: 10 }}
        bounces={false}
      >
        <DrawerMenuItem
          label="Home"
          icon={Home}
          active={activeItem === 'Home'}
          onPress={() => handleNavigate('Home')}
        />
        <DrawerMenuItem
          label="Search Lands"
          icon={Search}
          active={activeItem === 'Search Lands'}
          onPress={() => handleNavigate('Search Lands')}
        />
        <DrawerMenuItem
          label="Map View"
          icon={Map}
          active={activeItem === 'Map View'}
          onPress={() => handleNavigate('Map View')}
        />
        <DrawerMenuItem
          label="My Projects"
          icon={FileText}
          active={activeItem === 'My Projects'}
          onPress={() => handleNavigate('My Projects')}
        />
        <DrawerMenuItem
          label="Saved / Shortlisted"
          icon={Heart}
          active={activeItem === 'Saved / Shortlisted'}
          onPress={() => handleNavigate('Saved / Shortlisted')}
        />
        <DrawerMenuItem
          label="Notifications"
          icon={Bell}
          badge={3}
          active={activeItem === 'Notifications'}
          onPress={() => handleNavigate('Notifications')}
        />
        <DrawerMenuItem
          label="Contact Us"
          icon={Phone}
          active={activeItem === 'Contact Us'}
          onPress={() => handleNavigate('Contact Us')}
        />
        <DrawerMenuItem
          label="Help & Support"
          icon={HelpCircle}
          active={activeItem === 'Help & Support'}
          onPress={() => handleNavigate('Help & Support')}
        />
        <DrawerMenuItem
          label="About Us"
          icon={Info}
          active={activeItem === 'About Us'}
          onPress={() => handleNavigate('About Us')}
        />
        <DrawerMenuItem
          label="Settings"
          icon={Settings}
          active={activeItem === 'Settings'}
          onPress={() => handleNavigate('Settings')}
        />
        <DrawerMenuItem
          label="Logout"
          icon={LogOut}
          active={activeItem === 'Logout'}
          onPress={() => handleNavigate('Logout')}
        />
      </ScrollView>

      {/* Footer Illustration & Branding */}
      <DrawerFooter />
    </View>
  );
};
