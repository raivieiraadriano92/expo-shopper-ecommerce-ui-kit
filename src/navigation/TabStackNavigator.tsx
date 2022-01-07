import { FunctionComponent } from 'react'

import { createBottomTabNavigator, BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { Box, useTheme } from 'native-base'
import { TabBar, TabBarKeyItem } from 'src/components'
import { HomeScreen, SearchTabScreen, CartScreen, OrderScreen, AccountScreen } from 'src/screens'

import { RootStackScreenComponent } from './RootStackNavigator'

type TabStackParamList = {
  Home: undefined
  Search: undefined
  Cart: undefined
  Order: undefined
  Account: undefined
}

export type TabStackScreenComponent<RouteName extends keyof TabStackParamList> = FunctionComponent<
  BottomTabScreenProps<TabStackParamList, RouteName>
>

const Tab = createBottomTabNavigator<TabStackParamList>()

export const TabStackNavigator: RootStackScreenComponent<'Tabs'> = () => {
  const theme = useTheme()

  return (
    <Tab.Navigator
      initialRouteName="Home"
      sceneContainerStyle={{
        backgroundColor: theme.colors.white
      }}
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: 'transparent' }
      }}
      tabBar={(tabBarProps) => (
        <Box bottom={0} position="absolute" w="full">
          <TabBar
            activeKey={
              `${tabBarProps.state.routeNames[tabBarProps.state.index]
                .substr(0, 1)
                .toLocaleLowerCase()}${tabBarProps.state.routeNames[tabBarProps.state.index].substr(
                1
              )}` as TabBarKeyItem
            }
            onPress={(tabBarKeyItem) => {
              tabBarProps.navigation.navigate(
                `${tabBarKeyItem.substr(0, 1).toUpperCase()}${tabBarKeyItem.substr(1)}`
              )
            }}
          />
        </Box>
      )}>
      <Tab.Screen component={HomeScreen} name="Home" />
      <Tab.Screen component={SearchTabScreen} name="Search" />
      <Tab.Screen component={CartScreen} name="Cart" />
      <Tab.Screen component={OrderScreen} name="Order" />
      <Tab.Screen component={AccountScreen} name="Account" />
    </Tab.Navigator>
  )
}
