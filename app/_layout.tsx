import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { SplashScreen, Stack,Tabs } from 'expo-router'
import { Inter_100Thin, Inter_900Black, Inter_700Bold, Inter_500Medium, Inter_400Regular } from '@expo-google-fonts/inter';
import { useFonts } from 'expo-font';
import {FiraSans_100Thin} from '@expo-google-fonts/fira-sans'
SplashScreen.preventAutoHideAsync();

const RootStack = () => {
  const [loaded, error] = useFonts({
    Inter_100Thin,
    Inter_900Black,
    Inter_700Bold,
    Inter_500Medium,
    Inter_400Regular,
    FiraSans_100Thin
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
    <Stack/>
  )
}

export default RootStack