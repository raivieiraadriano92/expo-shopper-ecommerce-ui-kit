import { FunctionComponent } from 'react'

import { HStack, Text } from 'native-base'

import Icons from './Icons'

type Props = {
  grade: number
  hideGrade?: boolean
}

export const Rating: FunctionComponent<Props> = ({ grade, hideGrade }) => (
  <HStack alignItems="center" space={1}>
    {[1, 2, 3, 4, 5].map((star) => (
      <Icons.Star
        {...(grade >= star ? { color: 'pink.500', filled: true } : { color: 'gray.500' })}
        key={star}
        size={{ base: 3, lg: 4 }}
      />
    ))}
    {!hideGrade && <Text variant={{ base: 'caption3', lg: 'body1' }}>{grade.toFixed(1)}</Text>}
  </HStack>
)
