import { Image, View } from 'react-native'
import React from 'react'
import {Container, Title} from '@shared/index'
import { Text } from 'react-native-paper'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Colors from '@utils/colors'

const Welcome = () => {
  return (
    <Container padX={hp(2)}>
      <View className='flex-1 justify-center items-center space-y-3'>
        <Image source={require('@assets/appImage/welcome.png')}/>
        <Title variant='titleLarge' font='i500'>Welcome onboard</Title>
        <Text style={{ fontFamily: 'i400', color:Colors.black }} variant='bodyMedium' className=' capitalize text-center px-7'>Account validation complete. You can now start going!</Text>
      </View>
    </Container>
  )
}

export default Welcome