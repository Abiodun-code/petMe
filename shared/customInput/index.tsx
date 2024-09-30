import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { TextInput, TextInputProps } from 'react-native-paper'
import Colors from '@utils/colors'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

interface CustomTextProps extends TextInputProps {
  label?: string,
  disabled?: boolean,
}
const CustomInput: React.FC<CustomTextProps> = ({
  label,
  disabled,
  ...props
}) => {
  
  return (
    <View className='flex-row' style={{ marginBottom: hp(2.5)}}>
      <TextInput label={label} className='flex-1' style={{ backgroundColor: Colors.white, fontSize: hp(1.9) }}
        outlineStyle={{ borderRadius: hp(1.5), borderColor: Colors.gray }} mode='outlined'
        textColor={Colors.black} activeOutlineColor={Colors.black} disabled={disabled}
        {...props}
      />
    </View>
  )
}

export default CustomInput