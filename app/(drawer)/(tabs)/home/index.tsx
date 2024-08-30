import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useRef } from 'react'
import HomeList from './components/home-list'
import Colors from '@utils/colors'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useNavigation } from 'expo-router'
import { DrawerActions } from '@react-navigation/native'
import HomeStack from './components/homeStack'
import BottomSheet from './components/homeBottom'
import { ScrollView } from 'react-native-gesture-handler'

const Home = () => {
  
  const bottomSheetRef = useRef()
  
  return (
    <ScrollView className='flex-1' style={{backgroundColor:Colors.white, paddingTop: hp(6)}}>
      <HomeStack bottomSheetRef={bottomSheetRef} />
      <Text className='text-blue-200'>Home</Text>
      <BottomSheet bottomSheetRef={bottomSheetRef} children={undefined}/>
    </ScrollView>
  )
}

export default Home