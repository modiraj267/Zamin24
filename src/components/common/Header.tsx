import React from 'react';
import { View, TouchableOpacity, Image, Platform } from 'react-native';
import { Menu } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from '../../constants/colors';
import { JaminBuddyButton } from './JaminBuddyButton';
import { LanguageSelector } from './LanguageSelector';
import { DrawerParamList } from '../../types/navigation';

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const navigation = useNavigation<DrawerNavigationProp<DrawerParamList>>();
  const insets = useSafeAreaInsets();

  return (
    <View 
      className={`bg-white rounded-b-header z-10 shadow-md ${className}`}
      style={{ paddingTop: Math.max(insets.top, Platform.OS === 'ios' ? 44 : 20) }}
    >
      <View className="flex-row items-center justify-between px-4 pb-3.5 pt-2">
        {/* MANDATORY LEFT: Hamburger / Drawer button */}
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
          className="p-1.5 items-center justify-center"
          activeOpacity={0.7}
          hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
          accessibilityLabel="Open navigation drawer"
        >
          <Menu size={26} color={Colors.primary} strokeWidth={2.6} />
        </TouchableOpacity>

        {/* MANDATORY CENTER/BETWEEN: Jamin Buddy & Language */}
        <View className="flex-row items-center gap-2">
          <JaminBuddyButton />
          <LanguageSelector />
        </View>

        {/* MANDATORY RIGHT: Zamin24 Logo */}
        <TouchableOpacity
          className="items-center justify-center p-0.5"
          activeOpacity={0.8}
          onPress={() => navigation.navigate('MainTabs')}
          accessibilityLabel="Zamin24 Home Logo"
        >
          <Image
            source={require('../../assets/images/logo.png')}
            className="w-[44px] h-[50px]"
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
