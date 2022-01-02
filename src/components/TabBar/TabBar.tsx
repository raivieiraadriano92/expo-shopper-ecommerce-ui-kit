import { FunctionComponent } from 'react'

import { Box, HStack, IconButton } from 'native-base'

import Icons from '../Icons'

export type TabBarKeyItem = 'home' | 'search' | 'cart' | 'order' | 'account'

type TabBarItem = {
  key: TabBarKeyItem
  icon: keyof typeof Icons
}

type Props = {
  activeKey: TabBarKeyItem
  onPress(key: TabBarKeyItem): void
}

const items: TabBarItem[] = [
  { key: 'home', icon: 'Home' },
  { key: 'search', icon: 'Search' },
  { key: 'cart', icon: 'Cart' },
  { key: 'order', icon: 'List' },
  { key: 'account', icon: 'User' }
]

export const TAB_BAR_HEIGHT_TOKEN = 16

export const TabBar: FunctionComponent<Props> = ({ activeKey, onPress }) => (
  <Box
    bg="white"
    borderTopRadius="3xl"
    safeAreaBottom
    style={{
      shadowColor: '#1b1956',
      shadowOffset: {
        width: 4,
        height: 0
      },
      shadowOpacity: 0.1,
      shadowRadius: 30,
      elevation: 24
    }}>
    <HStack alignItems="center" h={TAB_BAR_HEIGHT_TOKEN} justifyContent="space-between" px={4}>
      {items.map((item) => {
        const IconComponent = Icons[item.icon]

        return (
          <IconButton
            {...(activeKey === item.key ? { bg: 'primary.500' } : {})}
            icon={<IconComponent {...(activeKey === item.key ? { color: 'white' } : {})} />}
            key={item.key}
            onPress={() => onPress(item.key)}
            size="sm"
            testID={`TabBarItem.${item.key}`}
            _hover={{
              bg: 'primary.500',
              _icon: { color: 'white' }
            }}
            _pressed={{
              bg: 'primary.500',
              _icon: { color: 'white' }
            }}
          />
        )
      })}
    </HStack>
  </Box>
)
