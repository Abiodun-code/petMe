import { ScrollView, Text, View } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Colors from '@utils/colors'
import Constants from 'expo-constants';

const ForgetPassword = () => {
  console.log(Constants.deviceName)
  return (
    <ScrollView contentContainerStyle={{ flex: 1, marginTop: Constants.statusBarHeight }} style={{ backgroundColor: Colors.white }}>
      <View className='flex-col items-center space-y-3' style={{ marginBottom: hp(5) }}>
        <Text style={{ fontFamily: 'i700', fontSize: hp(2.7) }}>Forget password</Text>
        <Text style={{ fontFamily: 'l400', fontSize: hp(2.3) }} className=' capitalize text-gray-500'>Welcome back, Please enter your details</Text>
      </View>

    </ScrollView>
  )
}

export default ForgetPassword