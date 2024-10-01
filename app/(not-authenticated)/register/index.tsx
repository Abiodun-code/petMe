import { View, ScrollView } from 'react-native'
import { Text, TextInput } from 'react-native-paper';
import React, { useContext, useState } from 'react'
import Colors from '@utils/colors'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { router } from 'expo-router';
import { Button, Container, CustomInput, Title } from '@shared/index';
import { RegisterContext } from '@contexts/register/registerContext';
import auth from '@react-native-firebase/auth'

const Register = () => {

  const { passwordVisible, email, password, setEmail, setPassword, togglePasswordVisibility, isRegister, username, setUsername } = useContext(RegisterContext)

   const registerWithEmailPassword = async () => {
    try {
      // Create the user with email and password
      const userCredential = await auth().createUserWithEmailAndPassword(email, password);

      // Update user profile with the username
      await userCredential.user.updateProfile({
        displayName: username,
      });

      console.log('User registered successfully:', userCredential.user);
      return userCredential.user;
    } catch (error) {
      console.error('Error registering user:', error);
      throw error;
    }
  };


  return (
    <Container padX={hp(2)}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingTop: hp(2) }} style={{ flex: 1}}>
        <View className='flex-col items-center space-y-1' style={{ marginBottom: hp(5) }}>
          <Title>Create an account</Title>
        </View>
        <CustomInput label={'Username'} value={username} onChangeText={setUsername} />
        <CustomInput label={'Email'} value={email} onChangeText={setEmail} />
        <CustomInput label={'Password'} value={password} onChangeText={setPassword} secureTextEntry={!passwordVisible}
          right={<TextInput.Icon icon={passwordVisible ? 'eye-off' : 'eye'} onPress={togglePasswordVisibility} />}
        />
        <View style={{marginTop:hp(5)}}>
          <Button disabled={isRegister} bg={isRegister ? Colors.lightPrimary : Colors.deepPrimary} p={hp(2)} press={registerWithEmailPassword}>
            <Text variant='titleSmall' style={{ fontFamily: 'i500', color: Colors.white }} className='text-center'>Sign up</Text>
          </Button>
        </View>
      </ScrollView>
    </Container>
  )
}

export default Register
