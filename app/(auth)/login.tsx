import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  GoogleSigninButton
} from '@react-native-google-signin/google-signin'

GoogleSignin.configure({
  webClientId: "550432230232-h9par2dckjkvakftjs72ga6lv7t00ctt.apps.googleusercontent.com",
  iosClientId: "550432230232-rlas4347sas72vopo9fdv2ct6n0birjp.apps.googleusercontent.com",
  offlineAccess: true,
  forceCodeForRefreshToken: true,
  profileImageSize: 120,
  scopes: ['profile', 'email'],
})
const Login = () => {

  const signInWithGoogle = async () => {
    try {
      // Get the user's ID token
      const { idToken } = await GoogleSignin.signIn();

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome</Text>
      <GoogleSigninButton
      size={GoogleSigninButton.Size.Wide}
      color={GoogleSigninButton.Color.Dark}
      onPress={signInWithGoogle}
      />
    </View>
  )
}

export default Login
