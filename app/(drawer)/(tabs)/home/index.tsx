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

const Home = () => {
  
  const bottomSheetRef = useRef()

  const { } = useContext(HomeStackContext)
  
  return (
    <ScrollView className='flex-1' style={{backgroundColor:Colors.white, paddingTop: hp(6)}}>
      <HomeStack bottomSheetRef={bottomSheetRef}  />
     
      <BottomSheet bottomSheetRef={bottomSheetRef} children={undefined}/>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navBar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: "tomato",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000, // Ensure the nav bar is on top of other content
  },
  navText: {
    color: "white",
    fontSize: 18,
  },
  scrollView: {
    marginTop: 60, // Offset the scroll view content below the nav bar
  },
  item: {
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  itemText: {
    fontSize: 18,
  },
});