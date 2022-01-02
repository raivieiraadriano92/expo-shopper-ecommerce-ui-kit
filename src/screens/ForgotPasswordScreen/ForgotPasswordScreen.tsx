import { useCallback } from 'react'

import { Button, Center, Heading, IconButton, Input, Text, VStack } from 'native-base'
import { AuthScreenTemplate, Icons } from 'src/components'
import { RootStackScreenComponent } from 'src/navigation'

export const ForgotPasswordScreen: RootStackScreenComponent<'ForgotPassword'> = ({
  navigation
}) => {
  const goToVerifyCode = useCallback(() => navigation.navigate('VerifyCode'), [navigation])

  return (
    <AuthScreenTemplate>
      <VStack space={3}>
        <Center>
          <Heading size="lg">Forgot Password</Heading>
          <IconButton
            colorScheme="gray"
            icon={<Icons.ArrowLeft />}
            left={0}
            onPress={navigation.goBack}
            position="absolute"
            size={{ base: 'sm', lg: 'md' }}
          />
        </Center>
        <Text color="gray.500" px={5} textAlign="center" variant="body2">
          Please enter your email, we will send an verify code.
        </Text>
      </VStack>
      <Input InputLeftElement={<Icons.Email ml={4} size={5} />} placeholder="Email" />
      <Button onPress={goToVerifyCode}>Verify</Button>
    </AuthScreenTemplate>
  )
}
