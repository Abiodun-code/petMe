import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Colors from '@utils/colors'
import { router } from 'expo-router'

const CustomImage = () => {
  return (
    <TouchableOpacity onPress={()=>router.push('/profile')} activeOpacity={0.8} className=' space-y-2' style={{marginHorizontal:hp(2)}}>
      <Image
        source={require('@assets/appImage/git.jpg')}
        style={{ width: hp(6), height: hp(6) }}
        className='rounded-full'
      />
      <View>
        <Text style={{fontSize: hp(2), fontFamily:'i400', color: Colors.black }}>Username</Text>
      </View>
    </TouchableOpacity>
  )
}

export default CustomImage