
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AppNavigation from './navigation/appNavigation';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AppNavigation/>
  )
}

