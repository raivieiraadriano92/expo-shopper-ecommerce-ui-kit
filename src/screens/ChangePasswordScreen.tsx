// import { ChangePasswordScreenTemplate } from '@shared'

import { Box, Text } from 'native-base'

import { RootStackScreenComponent } from '../navigation'

export const ChangePasswordScreen: RootStackScreenComponent<'ChangePassword'> = ({
  navigation
}) => {
  return (
    <Box alignItems="center" bg="gray.300" flex={1} justifyContent="center" safeAreaTop>
      <Text>Cart</Text>
    </Box>
    // <ChangePasswordScreenTemplate
    //   goBack={() => navigation.goBack()}
    //   goToSignIn={() => navigation.navigate('SignIn')}
    // />
  )
}
