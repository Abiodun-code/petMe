import { View, Text, TouchableOpacity, GestureResponderEvent } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Colors from '@utils/colors'

interface Props {
  children: React.ReactNode,
  disabled: boolean,
  bg? : any,
  press?: ((event: GestureResponderEvent) => void) | undefined
  
}

const Button = ({ children, disabled, bg, press }: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.6} disabled={disabled} 
      style={{ marginHorizontal: hp(1.5), backgroundColor: bg, padding: hp(2), borderRadius: hp(2) }}
      onPress={press}
    >
      {children}
    </TouchableOpacity>
  )
}

export default Button