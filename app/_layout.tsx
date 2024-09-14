import React from 'react'
import { Stack } from 'expo-router'
import 'react-native-reanimated'
import ConfigureWrapper from './configures';

const RootStack = () => {

  return (
    <ConfigureWrapper>
      <Stack>
        <Stack.Screen name='(auth)' options={{ headerShown: false }} />
        <Stack.Screen name='(drawer)' options={{ headerShown: false }} />
      </Stack>
    </ConfigureWrapper>
  )
}

export default RootStack
