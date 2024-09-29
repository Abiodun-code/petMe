import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native'
import React, { useEffect } from 'react'
import { router, useNavigation } from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Colors from '@utils/colors';
const Profile = () => {
  
  return (
    <View className='flex-1'>
      <ImageBackground source={require('@assets/appImage/laptop.jpg')} style={{height:hp(20)}}>
        <View style={{ paddingTop: hp(6)}}>
          <TouchableOpacity activeOpacity={0.8} onPress={() => router.back()} className='rounded-full mx-3 flex justify-center items-center' style={{ backgroundColor: Colors.white, width: hp(4.5), height: hp(4.5) }}>
            <AntDesign name='arrowleft' size={hp(2.8)} color={Colors.black} />
          </TouchableOpacity>
        </View>
        <View className='flex-row justify-between absolute -bottom-10 mx-3 bg-white p-1 rounded-full'>
          <Image source={require('@assets/appImage/git.jpg')} className='rounded-full' style={{ width: hp(9), height: hp(9) }} />
        </View>
      </ImageBackground>
    </View>
  )
}

export default Profile