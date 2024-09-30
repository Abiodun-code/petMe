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
import Container from '@shared/container'

const Home = () => {
  
  const bottomSheetRef = useRef()

  const { } = useContext(HomeStackContext)
  
  return (
   <Container padX={hp(2)}>
      <View className='flex-1' style={{ backgroundColor: Colors.white }}>
        <HomeStack bottomSheetRef={bottomSheetRef} />
        <ScrollView>
          <HomeContent />
        </ScrollView>
        <BottomSheet bottomSheetRef={bottomSheetRef} children={undefined} />
      </View>
   </Container>
  )
}

export default Home
