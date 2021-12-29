import { FunctionComponent } from 'react'

import { Box, NativeBaseProvider, Text } from 'native-base'

export const App: FunctionComponent = () => (
  <NativeBaseProvider>
    <Box alignItems="center" flex={1} justifyContent="center">
      <Text>Hello world</Text>
    </Box>
  </NativeBaseProvider>
)
