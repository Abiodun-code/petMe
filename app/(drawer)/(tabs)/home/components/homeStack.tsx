import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Colors from '@utils/colors'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useNavigation } from 'expo-router'
import { DrawerActions } from '@react-navigation/native'

const HomeStack = () => {

  const navigation = useNavigation()

  return (
    <View className='flex-row items-center justify-between'>
      <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
        <Image
          source={require('@assets/appImage/git.jpg')}
          style={{ width: hp(5), height: hp(5), marginLeft: hp(1) }}
          className='rounded-full'
        />
      </TouchableOpacity>
    </View>
  )
}

export default HomeStack