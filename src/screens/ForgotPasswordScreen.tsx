// import { ForgotPasswordScreenTemplate } from '@shared'
import { Box, Text } from 'native-base'

import { RootStackScreenComponent } from '../navigation'

export const ForgotPasswordScreen: RootStackScreenComponent<'ForgotPassword'> = ({
  navigation
}) => (
  <Box alignItems="center" bg="gray.300" flex={1} justifyContent="center" safeAreaTop>
    <Text>Cart</Text>
  </Box>
  // <ForgotPasswordScreenTemplate
  //   goBack={() => navigation.goBack()}
  //   goToVerifyCode={() => navigation.navigate('VerifyCode')}
  // />
)
