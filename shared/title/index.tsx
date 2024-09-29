import { Text } from 'react-native-paper'
import React from 'react'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

interface Props {
  children: React.ReactNode,
  font?: string,
}

const Title = ({children, font}: Props) => {
  return (
    <Text
      variant='titleMedium'
      style={{ fontFamily: font || 'i700' }}
    >
      {children}
    </Text>
  )
}

export default Title
