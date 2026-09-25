import React from 'react';
import { useWindowDimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { BottomTabNavigator } from './BottomTabNavigator';
import { CustomDrawerContent } from '../components/navigation/CustomDrawerContent';
import { Colors } from '../constants/colors';
import { DrawerParamList } from '../types/navigation';

const Drawer = createDrawerNavigator<DrawerParamList>();

export const DrawerNavigator = () => {
  const { width: screenWidth } = useWindowDimensions();
  // Responsive drawer width: ~50% of screen width, clamped between 260px and 340px
  const drawerWidth = Math.min(Math.max(Math.round(screenWidth * 0.52), 260), 340);

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerPosition: 'left',
        drawerType: 'front',
        overlayColor: 'rgba(0, 0, 0, 0.65)',
        drawerActiveTintColor: Colors.primary,
        drawerInactiveTintColor: Colors.text.secondary,
        drawerStyle: {
          backgroundColor: Colors.white,
          width: drawerWidth,
        },
      }}
    >
      <Drawer.Screen 
        name="MainTabs" 
        component={BottomTabNavigator} 
        options={{ drawerLabel: 'Home' }}
      />
    </Drawer.Navigator>
  );
};
