import { Box, Text } from 'native-base'
// import { VerifyCodeScreenTemplate } from '@shared'

import { RootStackScreenComponent } from '../navigation'

export const VerifyCodeScreen: RootStackScreenComponent<'VerifyCode'> = ({ navigation }) => (
  <Box alignItems="center" bg="gray.300" flex={1} justifyContent="center" safeAreaTop>
    <Text>Search</Text>
  </Box>
  // <VerifyCodeScreenTemplate
  //   goBack={() => navigation.goBack()}
  //   goToChangePassword={() => navigation.navigate('ChangePassword')}
  // />
)
