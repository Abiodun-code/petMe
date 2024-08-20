import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
const Onboarding = () => {
  return (
    <View className='flex-1 bg-white'>
      <View className='flex justify-center items-center'>
        <Image source={require("../../../assets/appImage/onboard.png")}
          style={{ width: wp(100), height: hp(30) }}
          className='bg-center object-center'
        />
        <View  className='flex items-center px-3'>
          <Text className='uppercase' style={{ fontSize: hp(3), fontFamily:"Inter_900Black", marginBottom: 20 }}>PetMe</Text>
          <Text style={{ fontSize: 16, fontFamily:'Inter_400Regular' }}>Discover new friends, meet new pets, and build a strong bond.</Text>
        </View>
      </View>
      <View className='flex-1 justify-end items-center'>
        <Text style={{ fontSize: 14, color: '#2196F3', marginTop: 10 }}>Already have an account? Login</Text>
      </View>
    </View>
  )
}

export default Onboarding

const styles = StyleSheet.create({})