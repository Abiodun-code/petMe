import { View, Text, TouchableOpacity, Image, TextInput, KeyboardAvoidingView } from 'react-native'
import React, { useContext } from 'react'
import Colors from '@utils/colors'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useNavigation } from 'expo-router'
import { DrawerActions } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import { HomeStackContext } from '@contexts/home/homeStackContet'
import Animated from 'react-native-reanimated'

const SearchStack = () => {

  const navigation = useNavigation()

  return (
    <KeyboardAvoidingView className='flex-1'>
      <View className='flex-row items-center justify-between' style={{ marginBottom: hp(4) }}>
        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Image
            source={require('@assets/appImage/git.jpg')}
            style={{ width: hp(5), height: hp(5), marginLeft: hp(1) }}
            className='rounded-full'
          />
        </TouchableOpacity>
        <TextInput
          className='border outline-none rounded-3xl pl-5'
          style={{ width: hp(30), padding: hp(1), borderColor: Colors.gray, fontFamily: 'i400', fontSize: hp(2) }}
          placeholder='Search'
          cursorColor={Colors.black}
        />
        <TouchableOpacity
          activeOpacity={0.8} style={{ marginRight: hp(1) }}
        >
          <Ionicons name="settings-outline" size={hp(4)} color={Colors.black} />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default SearchStack