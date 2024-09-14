import { View, ScrollView, TouchableOpacity } from 'react-native'
import { Text, TextInput } from 'react-native-paper';
import React, { useContext } from 'react'
import Colors from '@utils/colors'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { LoginContext } from '@contexts/login/loginContext';
import { router } from 'expo-router';

const Login = () => {

  const {passwordVisible, email, password, setEmail, setPassword, togglePasswordVisibility, isLogin} = useContext(LoginContext)

  return (
    <ScrollView contentContainerStyle={{flex:1, marginTop:hp(15)}} style={{backgroundColor:Colors.white}}>
      <View className='flex-col items-center space-y-3' style={{ marginBottom: hp(5) }}>
        <Text style={{ fontFamily: 'i700', fontSize: hp(2.7) }}>Log in to your account</Text>
        <Text style={{ fontFamily: 'l400', fontSize: hp(2.3) }} className=' capitalize text-gray-500'>Welcome back, Please enter your details</Text>
      </View>
      <View className='flex-row' style={{ marginBottom: hp(3), marginHorizontal: hp(1.5) }}>
        <TextInput label={'Email'} mode='outlined' className='flex-1' style={{ backgroundColor: Colors.white, fontSize: hp(2.3) }}
          outlineStyle={{ borderRadius: hp(1.5), borderColor: Colors.gray }}
          value={email} onChangeText={setEmail} textColor={Colors.black} activeOutlineColor={Colors.black}
        />
      </View>
      <View className='flex-row' style={{ marginBottom: hp(1), marginHorizontal: hp(1.5) }}>
        <TextInput label={'Password'} mode='outlined' className='flex-1' style={{ backgroundColor: Colors.white, fontSize: hp(2.3) }}
          outlineStyle={{ borderRadius: hp(1.5), borderColor: Colors.gray }} secureTextEntry={!passwordVisible} 
          right={<TextInput.Icon icon={passwordVisible ? 'eye-off' : 'eye'} onPress={togglePasswordVisibility}/>}
          value={password} onChangeText={setPassword} textColor={Colors.black} activeOutlineColor={Colors.black}
        />
      </View>
      <TouchableOpacity activeOpacity={0.6} className='' style={{ marginBottom: hp(7), marginHorizontal: hp(1.5) }}>
        <Text style={{ fontFamily: 'l500', fontSize: hp(2.2), color: Colors.deepPrimary }}>forget your password?</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.6} disabled={isLogin} style={{ marginHorizontal: hp(1.5), backgroundColor: isLogin ? Colors.lightPrimary : Colors.deepPrimary, padding:hp(2), borderRadius:hp(2) }}>
        <Text style={{ fontFamily: 'l500', fontSize: hp(2.5), color: Colors.white }} className='text-center'>Log in</Text>
      </TouchableOpacity>
      <View className='flex-1 justify-end items-center'  style={{marginBottom:hp(6)}}>
        <View className='flex-row items-center space-x-1'>
          <Text style={{ fontFamily: 'l400', fontSize: hp(2.2), color: Colors.black }}>Dont have an account?</Text>
          <TouchableOpacity activeOpacity={0.6} onPress={()=>{router.navigate('/register')}}>
            <Text style={{ fontFamily: 'l500', fontSize: hp(2.2), color: Colors.deepPrimary }}>Create an account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

export default Login
