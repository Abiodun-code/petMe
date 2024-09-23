import { ScrollView, View, TouchableOpacity, SafeAreaView } from 'react-native'
import { Text, TextInput } from 'react-native-paper';
import React from 'react'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Colors from '@utils/colors'
import { router } from 'expo-router';
import { Container } from '@shared/index';

const ForgetPassword = () => {

  return (
    <Container>
      <ScrollView  style={{ backgroundColor: Colors.white }}>
        <View className='flex-col items-center space-y-3' style={{ marginBottom: hp(7) }}>
          <Text style={{ fontFamily: 'i700', fontSize: hp(2.7) }}>Forget password</Text>
          <Text style={{ fontFamily: 'l400', fontSize: hp(2.3), marginHorizontal: hp(1.5), lineHeight: hp(3) }} className=' capitalize text-gray-500 text-center'>Enter your email address and we'll send you verification code</Text>
        </View>
        <View className='flex-row' style={{ marginBottom: hp(7), marginHorizontal: hp(1.5) }}>
          <TextInput label={'Email'} mode='outlined' className='flex-1' style={{ backgroundColor: Colors.white, fontSize: hp(2.3) }}
            outlineStyle={{ borderRadius: hp(1.5), borderColor: Colors.gray }}
            textColor={Colors.black} activeOutlineColor={Colors.black}
          />
        </View>
        <TouchableOpacity activeOpacity={0.6} onPress={()=>{router.navigate('./otpInput')}} style={{ marginHorizontal: hp(1.5), backgroundColor: Colors.deepPrimary, padding: hp(2), borderRadius: hp(2) }}>
          <Text style={{ fontFamily: 'l500', fontSize: hp(2.5), color: Colors.white }} className='text-center'>Continue</Text>
        </TouchableOpacity>
      </ScrollView>
    </Container>
  )
}

export default ForgetPassword
