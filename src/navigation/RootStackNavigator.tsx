import { FunctionComponent } from 'react'

import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack'

import {
  ChangePasswordScreen,
  ForgotPasswordScreen,
  OnboardingScreen,
  RegisterScreen,
  SignInScreen,
  VerifyCodeScreen
} from '../screens'
import { TabStackNavigator } from './TabStackNavigator'

type RootStackParamList = {
  ChangePassword: undefined
  ForgotPassword: undefined
  Onboarding: undefined
  Register: undefined
  SignIn: undefined
  Tabs: undefined
  VerifyCode: undefined
}

export type RootStackScreenComponent<RouteName extends keyof RootStackParamList> =
  FunctionComponent<NativeStackScreenProps<RootStackParamList, RouteName>>

const NativeStackNavigator = createNativeStackNavigator<RootStackParamList>()

export const RootStackNavigator: FunctionComponent = () => (
  <NativeStackNavigator.Navigator initialRouteName="Onboarding">
    <NativeStackNavigator.Screen component={OnboardingScreen} name="Onboarding" />
    <NativeStackNavigator.Group>
      <NativeStackNavigator.Screen component={ChangePasswordScreen} name="ChangePassword" />
      <NativeStackNavigator.Screen component={ForgotPasswordScreen} name="ForgotPassword" />
      <NativeStackNavigator.Screen component={RegisterScreen} name="Register" />
      <NativeStackNavigator.Screen component={SignInScreen} name="SignIn" />
      <NativeStackNavigator.Screen component={VerifyCodeScreen} name="VerifyCode" />
    </NativeStackNavigator.Group>
    <NativeStackNavigator.Screen component={TabStackNavigator} name="Tabs" />
  </NativeStackNavigator.Navigator>
)
