import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const LoginLayout = () => {
  return (
    <Stack>
      <Stack.Screen name='loginUser' options={{ headerShown: false }} />
      <Stack.Screen name='forget' options={{ headerShown: false }} />
    </Stack>
  )
}

export default LoginLayout