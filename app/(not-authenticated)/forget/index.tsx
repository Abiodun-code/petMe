import { ScrollView, View } from 'react-native'
import { Text } from 'react-native-paper';
import React from 'react'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Colors from '@utils/colors'
import { Button, Container, CustomInput, Title } from '@shared/index';

const ForgetPassword = () => {

  return (
    <Container padX={hp(2)}>
      <ScrollView style={{ backgroundColor: Colors.white, paddingTop: hp(2) }}>
        <View className='flex-col items-center space-y-3' style={{ marginBottom: hp(7) }}>
          <Title>Forget password</Title>
          <Text variant='titleSmall' style={{ fontFamily: 'i400', lineHeight: hp(3) }} className=' capitalize text-gray-500 text-center'>Enter your email address and we'll send you verification code</Text>
        </View>
        <CustomInput label='Email'/>
        <Button bg={Colors.deepPrimary} p={hp(2)}>
          <Text variant='titleSmall' style={{ fontFamily: 'i500', color: Colors.white }} className='text-center'>Log in</Text>
        </Button>
      </ScrollView>
    </Container>
  )
}

export default ForgetPassword
