import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Colors from '@utils/colors'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useNavigation } from 'expo-router'
import { DrawerActions } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import Animated from 'react-native-reanimated'

interface Props {
  bottomSheetRef: React.MutableRefObject<any>,
}
const HomeStack = ({ bottomSheetRef }: Props) => {

  const navigation = useNavigation()

  return (
    <View className='flex-row items-center justify-between' style={{marginBottom:hp(4)}}>
      <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
        <Image
          source={require('@assets/appImage/git.jpg')}
          style={{ width: hp(5), height: hp(5), marginLeft: hp(1) }}
          className='rounded-full'
        />
      </TouchableOpacity>
      <Text className='uppercase' style={{ fontFamily: 'i700' }}>Petme</Text>
      <TouchableOpacity
        activeOpacity={0.8} style={{ marginRight: hp(1) }} 
        onPress={() => bottomSheetRef.current.open()}
      >
        <Ionicons name="notifications-outline" size={hp(4)} color={Colors.black}/>
      </TouchableOpacity>
    </View>
  )
}

export default HomeStack