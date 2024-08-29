import { View, Text, Image } from 'react-native'
import React from 'react'
import {Drawer} from 'expo-router/drawer'
import CustomDrawer from '@components/drawer/customDrawer'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { router, useNavigation } from 'expo-router'
import { DrawerActions } from '@react-navigation/native'

const DrawerLayout = () => {
  const navigation = useNavigation()

  return (
    <Drawer 
      drawerContent={(props)=><CustomDrawer {...props}/>}
      screenOptions={{
        headerTitle: '',
        headerTintColor:'none',
        headerLeft:(()=>(
          <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.dispatch(DrawerActions.openDrawer())}>
            <Image 
              source={require('@assets/appImage/git.jpg')} 
              style={{width: hp(5), height:hp(5)}}
              className='rounded-full ml-2'
            />
          </TouchableOpacity>
        )),
      }}
    >
      <Drawer.Screen name='(tabs)' options={{ headerShown: true }} />
      <Drawer.Screen name='profile' options={{headerShown: false}} />
    </Drawer>
  )
}

export default DrawerLayout