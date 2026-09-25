import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../constants/colors';
import { Typography } from '../constants/typography';

export const SearchScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Search Screen (Coming Soon)</Text>
  </View>
);

export const MapViewScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Map View Screen (Coming Soon)</Text>
  </View>
);

export const ProjectsScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Projects Screen (Coming Soon)</Text>
  </View>
);

export const AccountScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Account Screen (Coming Soon)</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
  },
  text: {
    fontSize: Typography.sizes.lg,
    color: Colors.text.primary,
    fontWeight: Typography.weights.medium,
  },
});
