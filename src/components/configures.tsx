// themeConfig.js
import { Inter_900Black, Inter_700Bold, Inter_500Medium, Inter_400Regular, Inter_300Light } from '@expo-google-fonts/inter';
import { LeagueSpartan_300Light, LeagueSpartan_400Regular, LeagueSpartan_500Medium, LeagueSpartan_700Bold, LeagueSpartan_900Black } from '@expo-google-fonts/league-spartan';
import { configureFonts, PaperProvider } from 'react-native-paper';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import ContextWrapper from '@contexts/index';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const ConfigureWrapper = ({ children }: { children: React.ReactNode }) => {

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
    fontFamily: 'i400',
  };

  const theme = {
    fonts: configureFonts({ config: fontConfig }),
  };

  return (
    <PaperProvider theme={theme}>
      <ContextWrapper>
        {children}
      </ContextWrapper>
    </PaperProvider>
  )
}

export default ConfigureWrapper