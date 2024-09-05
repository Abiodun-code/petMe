import { Button, Image, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { router } from 'expo-router';
import Colors from '@utils/colors';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';

const Onboarding = () => {
  
  const ring1 = useSharedValue(0)
  const ring2 = useSharedValue(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      router.navigate("/login")
    }, 500);

    return () => clearTimeout(timer);
  }, [router]);

  useEffect(()=>{
    ring1.value = 0
    ring2.value = 0
    ring1.value = withSpring(hp(5), { damping: 10, mass:1, stiffness: 100 })
    ring2.value = withSpring(hp(3.7), { damping: 10, mass: 1, stiffness: 100 })
  },[])

  return (
    <View className='flex-1 justify-center items-center space-y-10' style={{backgroundColor:Colors.deepPrimary}}>
      <Animated.View className='bg-gray-200 rounded-full' style={{ padding: ring1 }}>
        <Animated.View className='bg-gray-50 rounded-full' style={{ padding: ring2 }}>
          <Image source={require("../../assets/appImage/onboard.png")}
            style={{ width: hp(27), height: hp(25) }}
            className='bg-center object-center'
          />
        </Animated.View>
      </Animated.View>
      <View className='flex items-center px-3 space-y-3'>
        <Text className='uppercase' style={{ fontSize: hp(3), fontFamily: "i900", color: Colors.white }}>PetMe</Text>
        <Text style={{ fontSize: hp(2.2), fontFamily: 'i300', color: Colors.white}} className='capitalize leading-5 text-center'>Discover new friends, meet new pets, and build a strong bond.</Text>
      </View>
    </View>
  )
}

export default Onboarding
