import { Text } from 'react-native-paper'
import React from 'react'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

interface Props {
  children: React.ReactNode,
  font?: string,
  variant?: string | undefined
}

const Title = ({children, font, variant}: Props) => {
  return (
    <Text
      variant={variant || 'titleMedium'}
      style={{ fontFamily: font || 'i700' }}
    >
      {children}
    </Text>
  )
}

export default Title
