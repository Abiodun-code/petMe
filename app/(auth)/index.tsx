import { Button, Image, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Colors from '../../src/utils/colors'

import { router } from 'expo-router';



const Onboarding = () => {

  useEffect(() => {
    const timer = setTimeout(() => {
      // router.navigate('/login');
    }, 1000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View className='flex-1 justify-center items-center bg-white'>
      <View className='flex justify-center items-center'>
        <Image source={require("../../assets/appImage/onboard.png")}
          style={{ width: wp(100), height: hp(30) }}
          className='bg-center object-center mb-5'
        />
        <View  className='flex items-center px-3 space-y-3'>
          <Text className='uppercase' style={{ fontSize: hp(3), fontFamily:"Inter_900Black", color:Colors.black }}>PetMe</Text>
          <Text style={{ fontSize: hp(2.2), fontFamily:'Inter_400Regular',  }}>Discover new friends, meet new pets, and build a strong bond.</Text>
        </View>
      </View>
    </View>
  )
}

export default Onboarding
