import React, { useEffect } from 'react'
import { SplashScreen, Stack } from 'expo-router'
import { Inter_900Black, Inter_700Bold, Inter_500Medium, Inter_400Regular, Inter_300Light } from '@expo-google-fonts/inter';
import { useFonts } from 'expo-font';
import { LeagueSpartan_300Light, LeagueSpartan_400Regular, LeagueSpartan_500Medium, LeagueSpartan_700Bold, LeagueSpartan_900Black} from '@expo-google-fonts/league-spartan'
import 'react-native-reanimated'
import ContextWrapper from '@contexts/index';
import { configureFonts, PaperProvider } from 'react-native-paper';

SplashScreen.preventAutoHideAsync();

const RootStack = () => {
  const [loaded, error] = useFonts({
    i300: Inter_300Light,
    i400: Inter_400Regular,
    i500: Inter_500Medium,
    i700: Inter_700Bold,
    i900: Inter_900Black,
    l300: LeagueSpartan_300Light,
    l400: LeagueSpartan_400Regular,
    l500: LeagueSpartan_500Medium,
    l700: LeagueSpartan_700Bold,
    l900: LeagueSpartan_900Black
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }


  const fontConfig = {
    fontFamily: 'l300',
  };

  const theme = {
    fonts: configureFonts({ config: fontConfig }),
  };

  return (
    <PaperProvider theme={theme}>
      <ContextWrapper>
        <Stack>
          <Stack.Screen name='(auth)' options={{ headerShown: false }} />
          <Stack.Screen name='(drawer)' options={{ headerShown: false }} />
        </Stack>
      </ContextWrapper>
    </PaperProvider>
  )
}

export default RootStack
