import { Button, Center, Heading, HStack, IconButton, Input, Text, VStack } from 'native-base'
import { AuthScreenTemplate, Icons } from 'src/components'
import { RootStackScreenComponent } from 'src/navigation'

import { useVerifyCodeScreen } from './useVerifyCodeScreen'

export const VerifyCodeScreen: RootStackScreenComponent<'VerifyCode'> = ({ navigation }) => {
  const {
    code,
    goToChangePassword,
    handleChange,
    handleKeyPress,
    refInput0,
    refInput1,
    refInput2,
    refInput3
  } = useVerifyCodeScreen({ navigation })

  return (
    <AuthScreenTemplate>
      <VStack space={3}>
        <Center>
          <Heading size="lg">Verify Code</Heading>
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
          Please enter verify code that we’ve sent to your email.
        </Text>
      </VStack>
      <HStack justifyContent="center" space={3}>
        <Input
          flex={1}
          keyboardType="number-pad"
          maxLength={1}
          maxW={13}
          onChangeText={(value) => handleChange(0, value)}
          ref={refInput0}
          textAlign="center"
          value={code[0] || ''}
        />
        <Input
          flex={1}
          keyboardType="number-pad"
          maxLength={1}
          maxW={13}
          onChangeText={(value) => handleChange(1, value)}
          onKeyPress={(e) => handleKeyPress(e, 1)}
          ref={refInput1}
          textAlign="center"
          value={code[1] || ''}
        />
        <Input
          flex={1}
          keyboardType="number-pad"
          maxLength={1}
          maxW={13}
          onChangeText={(value) => handleChange(2, value)}
          onKeyPress={(e) => handleKeyPress(e, 2)}
          ref={refInput2}
          textAlign="center"
          value={code[2] || ''}
        />
        <Input
          flex={1}
          keyboardType="number-pad"
          maxLength={1}
          maxW={13}
          onChangeText={(value) => handleChange(3, value)}
          onKeyPress={(e) => handleKeyPress(e, 3)}
          ref={refInput3}
          textAlign="center"
          value={code[3] || ''}
        />
      </HStack>
      <Button onPress={goToChangePassword}>Verify</Button>
    </AuthScreenTemplate>
  )
}
