import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { StackNavigationList } from '../types/stackType'
import Login from '../screens/auth/login'
import Onboarding from '../screens/auth/onboarding'
import Register from '../screens/auth/register'

const Stack = createNativeStackNavigator<StackNavigationList>()

const AuthStack = () => {
  return (
  <Stack.Navigator
  screenOptions={{
    headerShown:false
  }}>
    <Stack.Screen name="Onboarding" component={Onboarding} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Register" component={Register} />
  </Stack.Navigator>
  )
}

export default AuthStack