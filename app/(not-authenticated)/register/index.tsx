import { ScrollView, Text, View } from 'react-native'
import React from 'react'
import { heightPercentageToDP  as hp } from 'react-native-responsive-screen'
import Colors from '@utils/colors'
const Register = () => {
  return (
    <ScrollView contentContainerStyle={{ flex: 1, marginTop: hp(15) }} style={{ backgroundColor: Colors.white }}>
      <View className='flex-col items-center space-y-3' style={{ marginBottom: hp(5) }}>
        <Text style={{ fontFamily: 'i700', fontSize: hp(2.7) }}>Log in to your account</Text>
        <Text style={{ fontFamily: 'l400', fontSize: hp(2.3) }} className=' capitalize text-gray-500'>Welcome back, Please enter your details</Text>
      </View>
      
    </ScrollView>
  )
}

export default Register
