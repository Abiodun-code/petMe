import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Colors from '@utils/colors'
import { router } from 'expo-router'

const CustomImage = () => {
  return (
    <TouchableOpacity onPress={()=>router.push('/profile')} activeOpacity={0.8} className=' space-y-2 justify-center items-center'>
      <Image
        source={require('@assets/appImage/git.jpg')}
        style={{ width: hp(10), height: hp(10) }}
        className='rounded-full'
      />
      <View className='flex justify-center items-center'>
        <Text className='capitalize tracking-wide' style={{fontSize: hp(2.3), fontFamily:'l700', color: Colors.black }}>Username</Text>
        <Text style={{ fontSize: hp(2), fontFamily: 'l300', color: Colors.black }}>Pet Owner</Text>
      </View>
    </TouchableOpacity>
  )
}

export default CustomImage