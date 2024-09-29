import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native'
import React, { useContext, useRef } from 'react'
import Colors from '@utils/colors'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useNavigation } from 'expo-router'
import { DrawerActions } from '@react-navigation/native'
import HomeStack from './components/homeStack'
import BottomSheet from './components/homeBottom'
import { HomeStackContext } from '@contexts/home/homeStackContet'
import Animated from 'react-native-reanimated'
import HomeContent from './components/homeContent'

const Home = () => {
  
  const bottomSheetRef = useRef()

  const { } = useContext(HomeStackContext)
  
  return (
    <View className='flex-1' style={{backgroundColor:Colors.white, paddingTop: hp(6)}}>
      <HomeStack bottomSheetRef={bottomSheetRef}  />
      <ScrollView>
        <HomeContent />
      </ScrollView>
      <BottomSheet bottomSheetRef={bottomSheetRef} children={undefined}/>
    </View>
  )
}

export default Home
