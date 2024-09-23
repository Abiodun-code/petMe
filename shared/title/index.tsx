import { Text } from 'react-native-paper'
import React from 'react'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

interface Props {
  children: React.ReactNode,
  font?: string,
  size?: number | undefined,
}

const Title = ({children, font, size}: Props) => {
  return (
    <Text
      style={{ fontFamily: font || 'i700', fontSize: size || hp(2.7) }}
    >
      {children}
    </Text>
  )
}

export default Title
