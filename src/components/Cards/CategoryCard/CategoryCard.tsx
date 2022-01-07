import { FunctionComponent } from 'react'

import { HStack, Image, Text } from 'native-base'
import { TouchableOpacity } from 'react-native'

type Props = {
  imageUri: string
  onPress(): void
  title: string
  totalProducts?: number
}

export const CategoryCard: FunctionComponent<Props> = ({
  imageUri,
  onPress,
  title,
  totalProducts
}) => (
  <TouchableOpacity {...{ onPress }}>
    <HStack
      alignItems="center"
      bg="gray.50"
      borderRadius="2xl"
      h={22}
      justifyContent="space-between"
      px={3}>
      <Text variant="body2">{title}</Text>
      <HStack alignItems="center" space={4}>
        {!!totalProducts && (
          <Text variant="body1">{`${totalProducts} product${totalProducts > 1 ? 's' : ''}`}</Text>
        )}
        <Image
          alt="Alternate Text"
          borderRadius="xl"
          resizeMode="contain"
          size={13}
          source={{
            uri: imageUri
          }}
        />
      </HStack>
    </HStack>
  </TouchableOpacity>
)
