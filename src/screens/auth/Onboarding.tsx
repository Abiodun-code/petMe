import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Colors from '../../utils/colors'
const Onboarding = () => {
  return (
    <View className='flex-1 justify-center items-center bg-white'>
      <View className='flex justify-center items-center'>
        <Image source={require("../../../assets/appImage/onboard.png")}
          style={{ width: wp(100), height: hp(30) }}
          className='bg-center object-center'
        />
        <View  className='flex items-center px-3'>
          <Text className='uppercase' style={{ fontSize: hp(3), fontFamily:"Inter_900Black", marginBottom: 20, color:Colors.deepPrimary }}>PetMe</Text>
          <Text style={{ fontSize: 16, fontFamily:'Inter_400Regular' }}>Discover new friends, meet new pets, and build a strong bond.</Text>
        </View>
      </View>
    </View>
  )
}

export default Onboarding
