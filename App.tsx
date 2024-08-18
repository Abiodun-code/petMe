import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Keyboard, Pressable, StyleSheet, Text, View } from 'react-native';
import AuthStack from './src/navigation/AuthStack';
import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <Pressable onPress={Keyboard.dismiss} className='flex-1'>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }} edges={[]}>
          <NavigationContainer>
            <AuthStack />
          </NavigationContainer>
        </SafeAreaView>
        <StatusBar style="auto" animated />
      </SafeAreaProvider>
    </Pressable>
  );
}
