import { useCallback, useMemo, useState } from 'react'

import { Illustrations } from 'src/components'
import { RootStackScreenComponentProps } from 'src/navigation'

const steps = [
  null,
  {
    heading: 'A wide range of goods',
    illustration: <Illustrations.Products size={327} />,
    text: 'Shopper allows customers to choose a product or service of their choice from any supplier anywhere in the world.'
  },
  {
    heading: 'Get anything pickup & delivered at your doorstep',
    illustration: <Illustrations.Delivery size={327} />,
    text: 'Order online to get groceries, medicines, laundry & may more delivered at doorstep.'
  },
  {
    heading: 'Create your own store',
    illustration: <Illustrations.OpenStore size={327} />,
    text: "Make it your own. As you're setting up your online store, you have the ability to customize your retail store online to start selling products."
  }
]

export const useOnboardingScreen = ({
  navigation
}: Pick<RootStackScreenComponentProps<'Onboarding'>, 'navigation'>) => {
  const [stepIndex, setStepIndex] = useState(0)

  const stepContent = useMemo(() => steps[stepIndex], [stepIndex])

  const goToWelcomeScreen = useCallback(() => navigation.replace('Welcome'), [navigation])

  const goToNextStep = useCallback(() => {
    if (stepIndex < 3) {
      setStepIndex((prev) => prev + 1)

      return
    }

    goToWelcomeScreen()
  }, [stepIndex, goToWelcomeScreen])

  return {
    goToNextStep,
    goToWelcomeScreen,
    stepContent,
    stepIndex
  }
}
