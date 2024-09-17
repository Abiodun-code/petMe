import { View, ViewProps } from 'react-native';
import React from 'react'
import Colors from '@utils/colors';
import { SafeAreaView } from 'react-native-safe-area-context';

const Container = ({children}:{children: React.ReactNode}) => {
  return (
    <View style={{flex: 1, backgroundColor: Colors.white}}>
      <SafeAreaView className='flex-1'>
        {children}
      </SafeAreaView>
    </View>
  )
}

export default Container