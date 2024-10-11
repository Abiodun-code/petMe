import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NOT_AUTHENTICATED_STACK } from './stackData'
import { NOT_AUTHENTICATED_PARAM } from '@/types/index'

const { Navigator, Screen } = createNativeStackNavigator<NOT_AUTHENTICATED_PARAM>()

const NotAuthenticated = () => {

  const Screens = NOT_AUTHENTICATED_STACK.map((item, index) => (
    <Screen key={index} name={item.name} component={item.screen} />
  ))

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      {Screens}
    </Navigator>
  )
}

export default NotAuthenticated