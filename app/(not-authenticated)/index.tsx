import { Image, View } from 'react-native'
import React, { useEffect } from 'react'
import { heightPercentageToDP as hp} from 'react-native-responsive-screen'
import { router } from 'expo-router';
import Colors from '@utils/colors';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import { Button, Container } from '@shared/index';
import { Text } from 'react-native-paper';
import {
  GoogleSignin,
  GoogleSigninButton,
  isErrorWithCode,
  isSuccessResponse,
  statusCodes
} from '@react-native-google-signin/google-signin'

const Onboarding = () => {
  
  const ring1 = useSharedValue(0)
  const ring2 = useSharedValue(0)

  useEffect(()=>{
    ring1.value = 0
    ring2.value = 0
    ring1.value = withSpring(hp(5), { damping: 2})
    ring2.value = withSpring(hp(3.7), { damping: 5})
  },[])

  const LINK_DATA = [
    {
      id: 0,
      name: 'Continue with Google',
      link: '/(authenticated)/home',
      bg: Colors.white,
      border: 2,
      borderCol: Colors.deepPrimary,
      color: Colors.deepPrimary,
    },
    {
      id: 1,
      name: 'Log in',
      link: '/login',
      bg: Colors.deepPrimary,
      border: 0,
      borderCol: 'none',
      color: Colors.white,
    }
  ]

  return (
    <Container padX={hp(2)}>
      <View className='flex-1 justify-center space-y-10' >
        <Animated.View className='rounded-full' style={{ padding: hp(5), backgroundColor: Colors.deepPrimary}}>
          <Animated.View className='rounded-full' style={{ padding: ring2, backgroundColor: Colors.white }}>
            <Image source={require("../../assets/appImage/onboard.png")}
              style={{ width: hp(27), height: hp(25) }}
              className='bg-center object-center'
            />
          </Animated.View>
        </Animated.View>
        <View className='flex justify-center items-center px-3'>
          <Text variant='headlineSmall' className='uppercase' style={{ fontFamily: "i700", color: Colors.deepPrimary }}>PetMe 🐶🐱🦅🐰</Text>
        </View>
        <View>
          {LINK_DATA.map((item, index)=>(
            <Button bg={item.bg} p={hp(2)} borderW={item.border} borderC={item.borderCol} mb={hp(3)}
             key={index} press={()=>{router.navigate(item.link)}}
            >
              <Text variant='titleSmall' style={{fontFamily:"i500", color:item.color}} className='text-center'>{item.name}</Text>
            </Button>
          ))}
        </View>
      </View>
    </Container>
  )
}

export default Onboarding
