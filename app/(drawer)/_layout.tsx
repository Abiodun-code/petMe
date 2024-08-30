import React from 'react'
import {Drawer} from 'expo-router/drawer'
import CustomDrawer from '@components/drawer/customDrawer'


const DrawerLayout = () => {

  return (
    <Drawer 
      drawerContent={(props)=><CustomDrawer {...props}/>}>
      <Drawer.Screen name='(tabs)' options={{ headerShown: false }} />
      <Drawer.Screen name='profile' options={{headerShown: false}} />
    </Drawer>
  )
}

export default DrawerLayout