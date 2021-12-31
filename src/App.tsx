import { FunctionComponent } from 'react'

import { AppWrapper } from './AppWrapper'
import { RootStackNavigator } from './navigation'

export const App: FunctionComponent = () => {
  return (
    <AppWrapper>
      <RootStackNavigator />
    </AppWrapper>
  )
}
