import React from 'react'
import { Stack } from 'expo-router'
import 'react-native-reanimated'
import ConfigureWrapper from './configures';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

const RootStack = () => {

  return (
    <ConfigureWrapper>
     <SafeAreaProvider>
        <StatusBar style='dark' />
        <Stack initialRouteName='not-authenticated'>
          <Stack.Screen name='(not-authenticated)' options={{ headerShown: false }} />
          <Stack.Screen name='(authenticated)' options={{ headerShown: false }} />
        </Stack>
     </SafeAreaProvider>
    </ConfigureWrapper>
  )
}

export default RootStack
