import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

export type RootStackParamList = {
  Splash: undefined;
  Onboarding: undefined;
  Main: undefined;
  Drawer?: undefined;
};

export type DrawerParamList = {
  MainTabs: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Search: undefined;
  MapView: undefined;
  Projects: undefined;
  Account: undefined;
};

export type RootStackNavProp = NativeStackNavigationProp<RootStackParamList>;
export type DrawerNavProp = DrawerNavigationProp<DrawerParamList>;
export type BottomTabNavProp = BottomTabNavigationProp<BottomTabParamList>;
