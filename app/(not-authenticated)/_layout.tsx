import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const AuthLayout = () => {
  return (
    <Stack>
      <Stack.Screen name='index' options={{headerShown:false}}/>
      <Stack.Screen name='login' options={{ headerShown: false }} />
      <Stack.Screen name='register' options={{ headerShown: false }} />
      <Stack.Screen name='forget' options={{ headerShown: false }} />
      <Stack.Screen name='welcome' options={{ headerShown: false }} />
    </Stack>
  )
}

export default AuthLayout