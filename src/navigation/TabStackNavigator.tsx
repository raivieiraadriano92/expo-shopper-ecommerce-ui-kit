import { FunctionComponent } from 'react'

import { createBottomTabNavigator, BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { HomeScreen, SearchScreen, CartScreen, OrderScreen, AccountScreen } from 'src/screens'

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

export const TabStackNavigator: RootStackScreenComponent<'Tabs'> = () => (
  <Tab.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: false,
      tabBarStyle: { backgroundColor: 'transparent' }
    }}>
    <Tab.Screen component={HomeScreen} name="Home" />
    <Tab.Screen component={SearchScreen} name="Search" />
    <Tab.Screen component={CartScreen} name="Cart" />
    <Tab.Screen component={OrderScreen} name="Order" />
    <Tab.Screen component={AccountScreen} name="Account" />
  </Tab.Navigator>
)
