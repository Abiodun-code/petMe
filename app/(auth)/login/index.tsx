import { View, ScrollView } from 'react-native'
import { Text, TextInput } from 'react-native-paper';
import React from 'react'
import Colors from '@utils/colors'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
const Login = () => {
  return (
    <ScrollView contentContainerStyle={{alignItems:'center', justifyContent:'center', flex:1}} className='px-3' style={{backgroundColor:Colors.white}}>
      <View>
        <Text>Log in to your account</Text>
        <Text style={{ fontFamily: 'l500', fontSize: hp(2.5) }} className=' capitalize'>Welcome Back to PETME Login to your account</Text>
      </View>
      <View className='flex-row'>
        <TextInput label={'Email'} mode='outlined' className='flex-1' style={{ backgroundColor: Colors.white, fontSize:hp(2.5)}} 
          outlineStyle={{borderRadius:hp(1.5), borderColor:Colors.gray}}
        />
      </View>
    </ScrollView>
  )
}

export default Login