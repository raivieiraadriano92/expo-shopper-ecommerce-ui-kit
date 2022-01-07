import { FunctionComponent } from 'react'

import { Badge, Heading, HStack, IconButton, Image, Text } from 'native-base'

import Icons from '../../Icons'
import { Rating } from '../../Rating'
import { BaseCard } from '../BaseCard/BaseCard'

type Props = {
  discount?: {
    percentage: number
    price: number
  }
  imageUri: string
  liked?: boolean
  onPress(): void
  price: number
  ratingGrade: number
  title: string
}

const bottomOffset = 5

export const ProductCard: FunctionComponent<Props> = ({
  discount,
  imageUri,
  liked,
  onPress,
  price,
  ratingGrade,
  title
}) => (
  <BaseCard mb={bottomOffset} pb={9} pt={3} px={5}>
    <HStack
      left={3}
      justifyContent={discount ? 'space-between' : 'flex-end'}
      position="absolute"
      right={3}
      top={3}
      zIndex={1}>
      {discount && (
        <Badge bg="red.500" _text={{ color: 'white' }}>
          {`${discount.percentage}%`}
        </Badge>
      )}
      <Icons.Heart {...(liked ? { color: 'red.500', filled: true } : {})} size={5} />
    </HStack>
    <Image
      alt="Alternate Text"
      resizeMode="contain"
      size={24}
      source={{
        uri: imageUri
      }}
    />
    <Text mt={2} variant="caption3">
      {title}
    </Text>
    <HStack alignItems="center" mb={2} mt={1} space={1}>
      <Heading size="xs">{`$${price.toFixed(2)}`}</Heading>
      {discount && (
        <Text color="gray.500" strikeThrough variant="caption3">
          {`$${discount?.price.toFixed(2)}`}
        </Text>
      )}
    </HStack>
    <Rating grade={ratingGrade} />
    <IconButton
      bg="primary.500"
      bottom={0}
      icon={<Icons.Add color="white" />}
      mb={-bottomOffset}
      onPress={onPress}
      position="absolute"
      size="sm"
      style={{
        shadowColor: '#08bfa5',
        shadowOffset: {
          width: 8,
          height: 0
        },
        shadowOpacity: 0.3,
        shadowRadius: 20,
        elevation: 24
      }}
    />
  </BaseCard>
)
