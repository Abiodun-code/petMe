import { Button, Image, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { heightPercentageToDP as hp} from 'react-native-responsive-screen'
import { router } from 'expo-router';
import Colors from '@utils/colors';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import Container from '@shared/container';

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
      name: 'Create an account',
      link: '/register',
      bg: Colors.white,
      border: 2,
      borderCol: Colors.deepPrimary,
      color: Colors.deepPrimary,
    },
    {
      id: 1,
      name: 'Log in',
      link: '/(login)/loginUser',
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
          <Text className='uppercase' style={{ fontSize: hp(3), fontFamily: "i700", color: Colors.deepPrimary }}>PetMe 🐶🐱🦅🐰</Text>
        </View>
        <View className='space-y-4'>
          {LINK_DATA.map((item, index)=>(
            <TouchableOpacity style={{backgroundColor:item.bg, padding:hp(2), borderRadius:hp(7), borderWidth: item.border, borderColor:item.borderCol}} 
              className='flex items-center' key={index} activeOpacity={0.7} onPress={()=>{router.navigate(item.link)}}
            >
              <Text style={{fontFamily:"l400", fontSize:hp(2.1), color:item.color}}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </Container>
  )
}

export default Onboarding
