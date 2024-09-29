import { View, ScrollView } from 'react-native'
import { Text, TextInput } from 'react-native-paper';
import React, { useContext } from 'react'
import Colors from '@utils/colors'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { LoginContext } from '@contexts/login/loginContext';
import { router } from 'expo-router';
import { Button, Container, CustomInput, Title } from '@shared/index';

const Login = () => {

  const {passwordVisible, email, password, setEmail, setPassword, togglePasswordVisibility, isLogin} = useContext(LoginContext)

  return (
    <Container padX={hp(2)}>
      <ScrollView contentContainerStyle={{ flex: 1, paddingTop:hp(2)}}>
        <View className='flex-col items-center space-y-1' style={{ marginBottom: hp(5) }}>
          <Title>Log in to your account</Title>
          <Text style={{ fontFamily: 'l400'}} variant='titleMedium' className=' capitalize text-gray-500'>Welcome back, Please enter your details</Text>
        </View>
        <CustomInput label={'Email'} value={email} onChangeText={setEmail}/>
        <CustomInput label={'Password'} value={password} onChangeText={setPassword} secureTextEntry={!passwordVisible}
          right={<TextInput.Icon icon={passwordVisible ? 'eye-off' : 'eye'} onPress={togglePasswordVisibility} />}
        />
        <Button press={() => { router.navigate('/forget') }} mb={hp(7)} >
          <Text variant='titleMedium' style={{ fontFamily: 'l500', color: Colors.deepPrimary }}>forget your password?</Text>
        </Button>
        <Button disabled={isLogin} bg={isLogin ? Colors.lightPrimary : Colors.deepPrimary}  p={hp(2)}>
          <Text variant='titleSmall' style={{ fontFamily: 'i700', color: Colors.white }} className='text-center'>Log in</Text>
        </Button>
        <View className='flex-1 justify-end items-center' style={{ marginBottom: hp(2)}}>
          <View className='flex-row items-center'>
            <Text variant='bodyLarge' style={{ fontFamily: 'l400', color: Colors.black }}>Dont have an account?</Text>
            <Button  press={() => { router.navigate('/register') }} pL={hp(1)}>
              <Text variant='bodyLarge' style={{ fontFamily: 'l500', color: Colors.deepPrimary }}>Create an account</Text>
            </Button>
          </View>
        </View>
      </ScrollView>
    </Container>
  )
}

export default Login
