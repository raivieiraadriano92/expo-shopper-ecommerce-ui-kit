// import { HomeScreenTemplate } from '@shared'
import { Box, Text } from 'native-base'

import { TabStackScreenComponent } from '../navigation'

export const HomeScreen: TabStackScreenComponent<'Home'> = ({ navigation }) => (
  <Box alignItems="center" bg="gray.300" flex={1} justifyContent="center" safeAreaTop>
    <Text>Cart</Text>
  </Box>
  // <HomeScreenTemplate />
)
