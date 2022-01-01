import { FunctionComponent } from 'react'

import {
  useFonts,
  Poppins_900Black,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_200ExtraLight,
  Poppins_300Light,
  Poppins_500Medium,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_100Thin
} from '@expo-google-fonts/poppins'
import { NavigationContainer } from '@react-navigation/native'
import AppLoading from 'expo-app-loading'
import { NativeBaseProvider } from 'native-base'

import { theme } from './theme'

export const AppWrapper: FunctionComponent = ({ children }) => {
  const [fontsLoaded] = useFonts({
    Poppins_900Black,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    Poppins_200ExtraLight,
    Poppins_300Light,
    Poppins_500Medium,
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_100Thin
  })

  return !fontsLoaded ? (
    <AppLoading />
  ) : (
    <NativeBaseProvider
      config={{
        enableRem: true,
        suppressColorAccessibilityWarning: true
      }}
      initialWindowMetrics={{
        frame: { x: 0, y: 0, width: 0, height: 0 },
        insets: { top: 0, left: 0, right: 0, bottom: 0 }
      }}
      {...{ theme }}>
      <NavigationContainer>{children}</NavigationContainer>
    </NativeBaseProvider>
  )
}
