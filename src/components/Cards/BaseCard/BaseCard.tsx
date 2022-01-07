import { ComponentProps, FunctionComponent } from 'react'

import { Center } from 'native-base'

export const BaseCard: FunctionComponent<ComponentProps<typeof Center>> = ({
  children,
  ...props
}) => (
  <Center
    bg="white"
    borderRadius="2xl"
    style={{
      shadowColor: '#1b1956',
      shadowOffset: {
        width: 4,
        height: 0
      },
      shadowOpacity: 0.1,
      shadowRadius: 30,
      elevation: 24
    }}
    {...props}>
    {children}
  </Center>
)
