import { View, ViewProps } from 'react-native';
import React from 'react'
import Colors from '@utils/colors';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Props {
  children: React.ReactNode,
  bgColor?: string,
  padX?: number,
}
const Container = ({children, bgColor, padX}:Props) => {
  return (
    <View style={{ flex: 1, backgroundColor: bgColor ? bgColor : Colors.white, paddingHorizontal:padX }}>
      <SafeAreaView className='flex-1'>
        {children}
      </SafeAreaView>
    </View>
  )
}

export default Container