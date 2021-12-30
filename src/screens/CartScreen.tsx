import { Box, Text } from 'native-base'

import { TabStackScreenComponent } from '../navigation'

export const CartScreen: TabStackScreenComponent<'Cart'> = ({ navigation }) => (
  <Box alignItems="center" bg="gray.300" flex={1} justifyContent="center" safeAreaTop>
    <Text>Cart</Text>
  </Box>
)
