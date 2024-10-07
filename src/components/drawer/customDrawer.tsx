import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { AntDesign, Ionicons } from '@expo/vector-icons'
import { router, useNavigation, usePathname } from 'expo-router'
import Colors from '@utils/colors'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import CustomImage from './customImage'

const CustomDrawer = (props: any) => {

  const navigation = useNavigation()

  const pathname = usePathname()
  useEffect(() => {
    console.log(pathname)
    // You can check current path to set active tab
  }, [pathname])
  
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1, justifyContent:'space-between' }}>
      <View className='space-y-5'>
        <View className='space-y-4'>
          <CustomImage/>
        </View>
        <View>
          <DrawerItem
            icon={({ color, size }) => (<AntDesign name='home' color={pathname == '/home' ? Colors.black : Colors.black} size={size} />)}
            label={"Home"}
            onPress={() => { router.navigate('/(tabs)/home') }}
            style={{ backgroundColor: pathname == '/home' ? Colors.lightPrimary : Colors.white }}
            labelStyle={{ color: pathname == '/home' ? Colors.black : Colors.black, marginLeft: -hp(3), fontFamily: 'i500', fontSize: hp(2) }}
            
          />
          <DrawerItem
            icon={({ color, size }) => (<Ionicons name="settings-outline" color={pathname == '/settings' ? Colors.black : Colors.black} size={size} />)}
            label={"Settings"}
            onPress={() => { router.navigate('/(tabs)/settings') }}
            style={{ backgroundColor: pathname == '/settings' ? Colors.lightPrimary : Colors.white }}
            labelStyle={{ color: pathname == '/settings' ? Colors.black : Colors.black, marginLeft: -hp(3), fontFamily: 'i500', fontSize: hp(2) }}
          />
        </View>
      </View>
      <TouchableOpacity activeOpacity={0.8} className=' mb-4 border-t flex-row justify-between items-center' style={{ marginHorizontal:hp(3), paddingVertical:hp(2), borderTopColor:Colors.deepPrimary}}>
        <Text className='capitalize' style={{fontFamily:'l500', fontSize:hp(2.2)}}>Log out</Text>
        <Ionicons name="log-out-outline" size={hp(3.5)} color={Colors.black}/>
      </TouchableOpacity>
    </DrawerContentScrollView>
  )
}

export default CustomDrawer