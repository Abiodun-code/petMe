import { View, Text, Platform } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Colors from '@utils/colors'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { AntDesign } from '@expo/vector-icons'
import CustomTabs from '@components/tabs/CustomTabs'

const TabsLayout = () => {
  return (
    <Tabs tabBar={props => <CustomTabs {...props} />}>
      <Tabs.Screen name='home' options={{ headerShown: false }} />
      <Tabs.Screen name='search' options={{ headerShown: false }} />
      <Tabs.Screen name='settings' options={{ headerShown: false }} />
    </Tabs>
  )
}

export default TabsLayout