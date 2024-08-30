import { View, Text, Image } from 'react-native'
import React from 'react'
import {Drawer} from 'expo-router/drawer'
import CustomDrawer from '@components/drawer/customDrawer'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { router, useNavigation } from 'expo-router'
import { DrawerActions } from '@react-navigation/native'
import { AntDesign, Ionicons } from '@expo/vector-icons'
import Colors from '@utils/colors'

const DrawerLayout = () => {
  const navigation = useNavigation()

  return (
    <Drawer 
      drawerContent={(props)=><CustomDrawer {...props}/>}
      screenOptions={{
        headerTitle: '',
        headerTintColor:'none',
        // headerStyle:{ backgroundColor: 'white', borderBottomColor: 'none', shadowColor: 'none', elevation: 0, shadowOpacity: 0 },
        // headerLeft:(()=>(
        //   <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.dispatch(DrawerActions.openDrawer())}>
        //     <Image 
        //       source={require('@assets/appImage/git.jpg')} 
        //       style={{width: hp(5), height:hp(5), marginLeft: hp(1)}}
        //       className='rounded-full'
        //     />
        //   </TouchableOpacity>
        // )),
        // headerRight: (() => (
        //   <TouchableOpacity className='mr-2' activeOpacity={0.8} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
        //     <Ionicons name="notifications-outline" size={hp(4)} color={Colors.black}/>
        //   </TouchableOpacity>
        // )),
      }}
    >
      <Drawer.Screen name='(tabs)' options={{ headerShown: false }} />
      <Drawer.Screen name='profile' options={{headerShown: false}} />
    </Drawer>
  )
}

export default DrawerLayout