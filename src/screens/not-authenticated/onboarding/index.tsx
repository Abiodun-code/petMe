import { View, TouchableOpacity, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { NOT_AUTHENTICATED__PATH } from '../../../types/notAuthentication'
import { NativeStackNavigatorProps } from 'react-native-screens/lib/typescript/native-stack/types'
import Container from '@shared/container'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated'
import Colors from '@utils/colors'
import { Text } from 'react-native-paper'

const Onboarding = () => {

  const navigation = useNavigation<NativeStackNavigatorProps>()

  const ring1 = useSharedValue(0)
  const ring2 = useSharedValue(0)
  
  useEffect(() => {
    ring1.value = 0
    ring2.value = 0
    ring1.value = withSpring(hp(5), { damping: 10, mass: 2 })
    ring2.value = withSpring(hp(3.7), { damping: 10, mass: 5 })
  }, [])
  
  return (
    <Container padX={hp(2)}>
     <View className='flex-1' >
        <Animated.View style={{ padding: ring1, backgroundColor:Colors.deepPrimary, borderRadius:hp(100) }}>
          <Animated.View style={{ padding: ring2, backgroundColor: Colors.white, borderRadius: hp(100) }}>
            <Image source={require("@assets/appImage/onboard.png")}
              style={{ width: hp(27), height: hp(25) }}
              className='bg-center object-center'
            />
          </Animated.View>
        </Animated.View>
        <Text></Text>
     </View>
    </Container>
  )
}

export default Onboarding