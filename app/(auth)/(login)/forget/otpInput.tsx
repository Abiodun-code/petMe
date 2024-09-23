import { ScrollView, View, TouchableOpacity, SafeAreaView } from 'react-native'
import { Text, TextInput } from 'react-native-paper';
import React from 'react'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Colors from '@utils/colors'
import Constants from 'expo-constants';
import Container from '@shared/container';

const OtpInput = () => {

  return (
    <Container>
      <ScrollView style={{ backgroundColor: Colors.white }}>
        <View className='flex-col items-center space-y-3' style={{ marginBottom: hp(7) }}>
          <Text style={{ fontFamily: 'i700', fontSize: hp(2.7) }}>Enter verification code</Text>
          <Text style={{ fontFamily: 'l400', fontSize: hp(2.3), marginHorizontal: hp(1.5), lineHeight: hp(3) }} className=' capitalize text-gray-500 text-center'>Enter verification code sent to user@gmail.com</Text>
        </View>
        <View>
          {/* <O /> */}
        </View>
      </ScrollView>
    </Container>
  )
}

export default OtpInput