import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import auth from '@react-native-firebase/auth';

WebBrowser.maybeCompleteAuthSession();

const Login = () => {

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome</Text>

    </View>
  )
}

export default Login
