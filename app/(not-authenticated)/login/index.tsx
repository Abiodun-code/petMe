import { View, ScrollView, TouchableOpacity } from 'react-native'
import { Text, TextInput } from 'react-native-paper';
import React, { useContext } from 'react'
import Colors from '@utils/colors'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { LoginContext } from '@contexts/login/loginContext';
import { router } from 'expo-router';
import { Button, Container, CustomInput, Loading, Title } from '@shared/index';

const Login = () => {

  const {passwordVisible, email, password, setEmail, setPassword, togglePasswordVisibility, isLogin} = useContext(LoginContext)

  return (
    <Container>
      <ScrollView contentContainerStyle={{ flex: 1, paddingTop:hp(2) }}>
        <View className='flex-col items-center space-y-1' style={{ marginBottom: hp(5) }}>
          <Title>Log in to your account</Title>
          <Text style={{ fontFamily: 'l400', fontSize: hp(2.3) }} className=' capitalize text-gray-500'>Welcome back, Please enter your details</Text>
        </View>
        <CustomInput label={'Email'} value={email} onChangeText={setEmail}/>
        <CustomInput label={'Password'} value={password} onChangeText={setPassword} secureTextEntry={!passwordVisible}
          right={<TextInput.Icon icon={passwordVisible ? 'eye-off' : 'eye'} onPress={togglePasswordVisibility} />}
        />
        <TouchableOpacity activeOpacity={0.6} onPress={() => { router.navigate('forget') }} className='' style={{ marginBottom: hp(7), marginHorizontal: hp(1.5) }}>
          <Text style={{ fontFamily: 'l500', fontSize: hp(2.2), color: Colors.deepPrimary }}>forget your password?</Text>
        </TouchableOpacity>
        <Button disabled={isLogin} bg={isLogin ? Colors.lightPrimary : Colors.deepPrimary}>
          <Text style={{ fontFamily: 'l500', fontSize: hp(2.5), color: Colors.white }} className='text-center'>Log in</Text>
        </Button>
        <View className='flex-1 justify-end items-center' style={{ marginBottom: hp(6) }}>
          <View className='flex-row items-center space-x-1'>
            <Text style={{ fontFamily: 'l400', fontSize: hp(2.2), color: Colors.black }}>Dont have an account?</Text>
            <TouchableOpacity activeOpacity={0.6} onPress={() => { router.navigate('/register') }}>
              <Text style={{ fontFamily: 'l500', fontSize: hp(2.2), color: Colors.deepPrimary }}>Create an account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </Container>
  )
}

export default Login
