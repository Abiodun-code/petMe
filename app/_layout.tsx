import React, { useEffect } from 'react'
import { Stack } from 'expo-router'
import 'react-native-reanimated'
import ConfigureWrapper from './configures';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { loadUser, loadUserFromStorage } from '@services/state/not-authenticated/registerSlice';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { RootState, store } from '@services/state/store';
import { useProtectedRoute } from '@services/state/not-authenticated/auth.guide';

const RootStack = () => {

  useProtectedRoute()
  
  return (
    <ConfigureWrapper>
      <SafeAreaProvider>
        <StatusBar style='dark' />
        <Stack>
            <Stack.Screen name='(authenticated)' options={{ headerShown: false }} />
            <Stack.Screen name='(not-authenticated)' options={{ headerShown: false }} />
        </Stack>
      </SafeAreaProvider>
    </ConfigureWrapper>
  )
}

export default function App () {
  return(
    <Provider store={store}>
      <RootStack />
    </Provider>
  )
}
