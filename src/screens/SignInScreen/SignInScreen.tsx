import { useCallback, useState } from 'react'

import { Box, Button, Heading, HStack, IconButton, Input, Text, VStack } from 'native-base'
import { TouchableOpacity } from 'react-native'
import { AuthScreenTemplate, Icons } from 'src/components'
import { RootStackScreenComponent } from 'src/navigation'

export const SignInScreen: RootStackScreenComponent<'SignIn'> = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false)

  const goToForgotPassword = useCallback(() => navigation.navigate('ForgotPassword'), [navigation])

  const goToHome = useCallback(() => navigation.navigate('Tabs'), [navigation])

  const goToRegister = useCallback(() => navigation.navigate('Register'), [navigation])

  const toggleShowPassword = useCallback(() => setShowPassword(!showPassword), [showPassword])

  return (
    <AuthScreenTemplate useSignSocial>
      <HStack justifyContent="space-between" px={{ base: 5, lg: 10 }}>
        <Box
          bg={{
            linearGradient: {
              colors: ['pink.500', 'white', 'white', 'white'],
              start: [1, 1],
              end: [1, 0]
            }
          }}>
          <Heading size="xl">Sign In</Heading>
        </Box>
        <TouchableOpacity onPress={goToRegister}>
          <Box
            bg={{
              linearGradient: {
                colors: ['pink.500', 'white', 'white', 'white'],
                start: [1, 1],
                end: [1, 0]
              }
            }}>
            <Heading color="gray.500" opacity={0.5} size="xl">
              Register
            </Heading>
          </Box>
        </TouchableOpacity>
      </HStack>
      <VStack space={4}>
        <Input InputLeftElement={<Icons.Email ml={4} size={5} />} placeholder="Email" />
        <Input
          InputLeftElement={<Icons.Lock ml={4} size={5} />}
          InputRightElement={
            <IconButton
              colorScheme="gray"
              icon={<Icons.Eye hide={showPassword} />}
              mr={2}
              onPress={toggleShowPassword}
              size="sm"
            />
          }
          placeholder="Password"
          type={showPassword ? 'text' : 'password'}
        />
        <TouchableOpacity onPress={goToForgotPassword}>
          <Text textAlign="right" variant="caption1">
            Forgot password?
          </Text>
        </TouchableOpacity>
      </VStack>
      <Button onPress={goToHome}>Sign In</Button>
    </AuthScreenTemplate>
  )
}
