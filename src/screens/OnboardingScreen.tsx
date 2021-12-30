import { Box, Text } from 'native-base'
// import { WelcomeScreenTemplate } from '@shared'

import { RootStackScreenComponent } from '../navigation'

export const OnboardingScreen: RootStackScreenComponent<'Onboarding'> = ({ navigation }) => (
  <Box alignItems="center" bg="gray.300" flex={1} justifyContent="center" safeAreaTop>
    <Text>Cart</Text>
  </Box>
  // <WelcomeScreenTemplate
  //   goToRegisterScreen={() => navigation.navigate('Register')}
  //   goToSignInScreen={() => navigation.navigate('SignIn')}
  // />
)
