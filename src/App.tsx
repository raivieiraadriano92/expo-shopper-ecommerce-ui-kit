import { FunctionComponent } from 'react'

import { NativeBaseProvider } from 'native-base'
import { enableFreeze } from 'react-native-screens'

import { RootStackNavigator } from './navigation'

enableFreeze(true)

export const App: FunctionComponent = () => (
  <NativeBaseProvider>
    <RootStackNavigator />
  </NativeBaseProvider>
)
