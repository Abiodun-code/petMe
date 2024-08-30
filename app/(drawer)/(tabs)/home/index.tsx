import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import HomeList from './components/home-list'
import Colors from '@utils/colors'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useNavigation } from 'expo-router'
import { DrawerActions } from '@react-navigation/native'
import HomeStack from './components/homeStack'

const Home = () => {
  
  return (
    <View className='flex-1' style={{backgroundColor:Colors.white, paddingTop: hp(6)}}>
      <HomeStack/>
      <Text className='text-blue-200'>Home</Text>
      <HomeList/>
    </View>
  )
}

export default Home