import { View, ScrollView } from 'react-native'
import { Text, TextInput } from 'react-native-paper';
import React, { useContext, useState } from 'react'
import Colors from '@utils/colors'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { router } from 'expo-router';
import { Button, Container, CustomInput, Title } from '@shared/index';
import { RegisterContext } from '@contexts/register/registerContext';
import PhoneInput from 'react-native-phone-number-input';

const Register = () => {

  const [phoneNumber, setPhoneNumber] = useState('');

  const { passwordVisible, email, password, setEmail, setPassword, togglePasswordVisibility, isRegister, username, setUsername } = useContext(RegisterContext)

  return (
    <Container padX={hp(2)}>
      <ScrollView contentContainerStyle={{ flex: 1, paddingTop: hp(2) }}>
        <View className='flex-col items-center space-y-1' style={{ marginBottom: hp(5) }}>
          <Title>Create an account</Title>
        </View>
        <CustomInput label={'Username'} value={username} onChangeText={setUsername} />
        <CustomInput label={'Email'} value={email} onChangeText={setEmail} />
        <CustomInput label={'Password'} value={password} onChangeText={setPassword} secureTextEntry={!passwordVisible}
          right={<TextInput.Icon icon={passwordVisible ? 'eye-off' : 'eye'} onPress={togglePasswordVisibility} />}
        />
        <PhoneInput
          defaultValue={phoneNumber}
          defaultCode="US"
          onChangeFormattedText={(text) => {
            setPhoneNumber(text);
          }}
          containerStyle={{
            borderBottomWidth: 1,
            backgroundColor: '#fff',
            borderColor: Colors.gray,
            borderWidth: 1,
            width: hp(43),
            height: hp(6.5),
            // flex:1
            borderRadius:hp(7)
          }}
          textContainerStyle={{ backgroundColor: 'none' }}
        />
        <View style={{marginTop:hp(5)}}>
          <Button disabled={isRegister} bg={isRegister ? Colors.lightPrimary : Colors.deepPrimary} p={hp(2)} press={()=>router.navigate('/welcome')}>
            <Text variant='titleSmall' style={{ fontFamily: 'i500', color: Colors.white }} className='text-center'>Sign up</Text>
          </Button>
        </View>
      </ScrollView>
    </Container>
  )
}

export default Register
