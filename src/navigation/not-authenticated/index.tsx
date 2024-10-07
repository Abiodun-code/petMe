import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NOT_AUTHENTICATED__PATH, NOT_AUTHENTICATED_PARAM } from '../../types/notAuthentication';
import SignIn from '@screens/not-authenticated/sign-in';
import SignUp from '@screens/not-authenticated/sign-up';
import Onboarding from '@screens/not-authenticated/onboarding';

const Stack = createNativeStackNavigator<NOT_AUTHENTICATED_PARAM>()

const NotAuthenticated = () => {
  return (
    <Stack.Navigator initialRouteName={NOT_AUTHENTICATED__PATH.Onboarding} screenOptions={{headerShown:false}}>
      <Stack.Screen name={NOT_AUTHENTICATED__PATH.Onboarding} component={Onboarding} />
      <Stack.Screen name={NOT_AUTHENTICATED__PATH.SignIn} component={SignIn}/>
      <Stack.Screen name={NOT_AUTHENTICATED__PATH.SignUp} component={SignUp}/>
    </Stack.Navigator>
  )
}

export default NotAuthenticated
