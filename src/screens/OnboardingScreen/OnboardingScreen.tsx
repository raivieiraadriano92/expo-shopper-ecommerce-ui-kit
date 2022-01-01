import bgOnboarding from 'assets/bg-onboarding.png'
import { Button, Center, Container, Heading, HStack, Text, VStack } from 'native-base'
import { ImageBackground } from 'react-native'
import { Icons, Illustrations } from 'src/components'
import { RootStackScreenComponent } from 'src/navigation'

import { useOnboardingScreen } from './useOnboardingScreen'

export const OnboardingScreen: RootStackScreenComponent<'Onboarding'> = ({ navigation }) => {
  const { goToNextStep, goToWelcomeScreen, stepContent, stepIndex } = useOnboardingScreen({
    navigation
  })

  return (
    <ImageBackground resizeMode="contain" source={bgOnboarding} style={{ flex: 1 }}>
      <VStack {...(stepIndex ? { bg: 'white' } : {})} alignItems="center" flex={1} p={6} safeArea>
        <Container flex={1} maxW="md" w="full">
          {stepIndex ? (
            <>
              <VStack space={4} w="full">
                <Heading size="2xl">{stepContent?.heading}</Heading>
                <Text color="gray.500" variant="body2">
                  {stepContent?.text}
                </Text>
              </VStack>
              <Center flex={1} w="full">
                {stepContent?.illustration}
              </Center>
            </>
          ) : (
            <Center flex={1} w="full">
              <Illustrations.Logo size={238} />
            </Center>
          )}
          <HStack justifyContent="space-between" w="full">
            {!!stepIndex && (
              <Button colorScheme="secondary" onPress={goToWelcomeScreen} variant="link">
                Skip
              </Button>
            )}
            <Button
              {...(stepIndex ? { rightIcon: <Icons.ArrowRight size={5} /> } : { w: 'full' })}
              colorScheme="secondary"
              onPress={goToNextStep}>
              {stepIndex ? 'Next' : 'Explore Us'}
            </Button>
          </HStack>
        </Container>
      </VStack>
    </ImageBackground>
  )
}
