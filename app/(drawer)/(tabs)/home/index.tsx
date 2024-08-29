import { View, Text } from 'react-native'
import React from 'react'
import HomeList from './components/home-list'
import Colors from '@utils/colors'

const Home = () => {
  return (
    <View className='flex-1' style={{backgroundColor:Colors.white}}>
      <Text>Home</Text>
      <HomeList/>
    </View>
  )
}

export default Home