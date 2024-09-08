import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import {
  GoogleSignin,
  GoogleSigninButton,
  isErrorWithCode,
  isSuccessResponse,
  statusCodes
} from '@react-native-google-signin/google-signin'
import { EXPO_WEB_CLIENT_ID, EXPO_IOS_CLIENT_ID } from "@env"

const Login = () => {

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: EXPO_WEB_CLIENT_ID,
      iosClientId: EXPO_IOS_CLIENT_ID,
      offlineAccess: true,
      forceCodeForRefreshToken: true,
      profileImageSize: 120,
      scopes: ['profile', 'email'],
    });
  }, []);

  const [state, setState] = useState('')

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const response = await GoogleSignin.signIn();
      if (isSuccessResponse(response)) {
        const userInfo = response.data
        setState( userInfo);
        
      } else {
        // sign in was cancelled by user
      }
    } catch (error) {
      if (isErrorWithCode(error)) {
        switch (error.code) {
          case statusCodes.IN_PROGRESS:
            // operation (eg. sign in) already in progress
            break;
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            // Android only, play services not available or outdated
            break;
          default:
          // some other error happened
        }
      } else {
        // an error that's not related to google sign in occurred
      }
    }
    console.log(state.user)
  };


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome</Text>
      {state ? (
        // If userInfo is not null, display user information
        <View style={{ alignItems: 'center' }}>
          <Text>User is signed in!</Text>
          <Text>Email: {state.user.email}</Text>
        </View>
      ) : (
        // If userInfo is null, display the Google Sign-In button
        <GoogleSigninButton
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={signIn}
        />
      )}
    </View>
  )
}

export default Login
