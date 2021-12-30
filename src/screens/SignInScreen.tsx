import { Box, Text } from 'native-base'
// import { SignInScreenTemplate } from '@shared'

import { RootStackScreenComponent } from '../navigation'

export const SignInScreen: RootStackScreenComponent<'SignIn'> = ({ navigation }) => (
  <Box alignItems="center" bg="gray.300" flex={1} justifyContent="center" safeAreaTop>
    <Text>Search</Text>
  </Box>
  // <SignInScreenTemplate
  //   goToForgotPassword={() => navigation.navigate('ForgotPassword')}
  //   goToHome={() => navigation.replace('Tabs')}
  //   goToRegister={() => navigation.navigate('Register')}
  // />
)
