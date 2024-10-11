import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import NotAuthenticated from './not-authenticated'

const Main = () => {
  return (
    <NavigationContainer>
      <NotAuthenticated/>
    </NavigationContainer>
  )
}

export default Main