import React from 'react'
import { ActivityIndicator } from 'react-native-paper'
import Colors from '@utils/colors'

interface Props {
  color?: string,
  size?: any | number,
}
const Loading = ({color, size}: Props) => {
  return (
    <ActivityIndicator animating={true} color={color || Colors.white} size={size || 'small'}/>
  )
}

export default Loading