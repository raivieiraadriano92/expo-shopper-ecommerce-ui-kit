import { useCallback, useState } from 'react'

import { Button, Center, Heading, IconButton, Input, VStack } from 'native-base'
import { AuthScreenTemplate, Icons } from 'src/components'
import { RootStackScreenComponent } from 'src/navigation'

export const ChangePasswordScreen: RootStackScreenComponent<'ChangePassword'> = ({
  navigation
}) => {
  const [showPassword, setShowPassword] = useState(false)

  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const goToSignIn = useCallback(() => navigation.navigate('SignIn'), [navigation])

  const toggleShowPassword = useCallback(() => setShowPassword(!showPassword), [showPassword])

  const toggleShowConfirmPassword = useCallback(
    () => setShowConfirmPassword(!showConfirmPassword),
    [showConfirmPassword]
  )

  return (
    <AuthScreenTemplate>
      <Center>
        <Heading size="lg">Change Password</Heading>
        <IconButton
          colorScheme="gray"
          icon={<Icons.ArrowLeft />}
          left={0}
          onPress={navigation.goBack}
          position="absolute"
          size={{ base: 'sm', lg: 'md' }}
        />
      </Center>
      <VStack space={4}>
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
        <Input
          InputLeftElement={<Icons.Lock ml={4} size={5} />}
          InputRightElement={
            <IconButton
              colorScheme="gray"
              icon={<Icons.Eye hide={showConfirmPassword} />}
              mr={2}
              onPress={toggleShowConfirmPassword}
              size="sm"
            />
          }
          placeholder="Confirm Password"
          type={showConfirmPassword ? 'text' : 'password'}
        />
      </VStack>
      <Button onPress={goToSignIn}>Save Change</Button>
    </AuthScreenTemplate>
  )
}
