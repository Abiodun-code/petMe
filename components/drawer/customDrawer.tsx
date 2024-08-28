import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { AntDesign, Feather } from '@expo/vector-icons'
import { router, usePathname } from 'expo-router'
import Colors from '@utils/colors'

const CustomDrawer = (props) => {
  const pathname = usePathname()
  useEffect(() => {
    console.log(pathname)
    // You can check current path to set active tab
  }, [pathname    ])
  
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem 
        icon={({ color, size }) => (<AntDesign name='home' color={pathname == '/home' ? Colors.white : Colors.black} size={size}/>)} 
        label={"Home"}
        onPress={()=>{router.push('/(tabs)/home')}}
        style={{ backgroundColor: pathname == '/home' ? Colors.black : Colors.white }}
        labelStyle={{color: pathname == '/home' ? Colors.white : Colors.black}}
        
      />
      <DrawerItem 
        icon={({ color, size }) => (<AntDesign name='setting' color={pathname == '/settings' ? Colors.white : Colors.black} size={size} />)}
        label={"Settings"}
        onPress={() => { router.push('/(tabs)/settings') }}
        style={{ backgroundColor: pathname == '/settings' ? Colors.black : Colors.white }}
        labelStyle={{ color: pathname == '/settings' ? Colors.white : Colors.black }}
      />
    </DrawerContentScrollView>
  )
}

export default CustomDrawer