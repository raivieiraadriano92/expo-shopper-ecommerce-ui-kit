import { Box, Text } from 'native-base'
// import { RegisterScreenTemplate } from '@shared'

import { RootStackScreenComponent } from '../navigation'

export const RegisterScreen: RootStackScreenComponent<'Register'> = ({ navigation }) => (
  <Box alignItems="center" bg="gray.300" flex={1} justifyContent="center" safeAreaTop>
    <Text>Order</Text>
  </Box>
  // <RegisterScreenTemplate
  //   goToHome={() => navigation.replace('Tabs')}
  //   goToSignIn={() => navigation.navigate('SignIn')}
  // />
)
