import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Keyboard, Pressable } from 'react-native';
import AuthStack from './src/navigation/AuthStack';
import React, { useEffect } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';
import { Inter_100Thin, Inter_400Regular, Inter_500Medium, Inter_700Bold, Inter_900Black } from '@expo-google-fonts/inter';
import { useFonts } from 'expo-font';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    Inter_100Thin,
    Inter_900Black,
    Inter_700Bold,
    Inter_500Medium,
    Inter_400Regular
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
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
