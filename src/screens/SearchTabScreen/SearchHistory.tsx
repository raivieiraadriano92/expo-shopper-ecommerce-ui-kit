import { FunctionComponent } from 'react'

import { Box, Divider, Heading, HStack, IconButton, Text } from 'native-base'
import { FlatList } from 'react-native'
import Animated, { FadeInLeft, FadeOutLeft } from 'react-native-reanimated'
import { Cards, Icons, TAB_BAR_HEIGHT_TOKEN } from 'src/components'

const categories = [
  {
    id: 1,
    imageUri: 'https://philco.vteximg.com.br/arquivos/ids/175970/PFO01BTP.jpg?v=637111522912700000',
    title: 'Camera'
  },
  {
    id: 2,
    imageUri: 'https://philco.vteximg.com.br/arquivos/ids/175970/PFO01BTP.jpg?v=637111522912700000',
    title: 'Lamp'
  },
  {
    id: 3,
    imageUri: 'https://philco.vteximg.com.br/arquivos/ids/175970/PFO01BTP.jpg?v=637111522912700000',
    title: 'Sneaker'
  },
  {
    id: 4,
    imageUri: 'https://philco.vteximg.com.br/arquivos/ids/175970/PFO01BTP.jpg?v=637111522912700000',
    title: 'Sofa'
  },
  {
    id: 5,
    imageUri: 'https://philco.vteximg.com.br/arquivos/ids/175970/PFO01BTP.jpg?v=637111522912700000',
    title: 'Bag'
  },
  {
    id: 6,
    imageUri: 'https://philco.vteximg.com.br/arquivos/ids/175970/PFO01BTP.jpg?v=637111522912700000',
    title: 'Mobile'
  }
]

const AnimatedBox = Animated.createAnimatedComponent(Box)

export const SearchHistory: FunctionComponent = () => (
  <AnimatedBox entering={FadeInLeft} exiting={FadeOutLeft}>
    <FlatList
      data={categories}
      ListFooterComponent={<Box h={TAB_BAR_HEIGHT_TOKEN} pb={6} safeAreaBottom />}
      ListHeaderComponent={
        <Box pb={5}>
          <Box px={6}>
            <Heading mb={5} mt={6} size="lg">
              Recent search
            </Heading>
            {['Fujifilm camera', 'T-shirt', 'Bucket hat'].map((item, itemIndex) => (
              <HStack
                {...(itemIndex ? { mt: 1 } : {})}
                alignItems="center"
                key={item}
                justifyContent="space-between">
                <Text>{item}</Text>
                <IconButton
                  colorScheme="gray"
                  icon={<Icons.Close />}
                  mr={2}
                  onPress={() => {}}
                  size="sm"
                />
              </HStack>
            ))}
          </Box>
          <Divider my={6} />
          <Box px={6}>
            <Heading size="lg">Trending search</Heading>
          </Box>
        </Box>
      }
      numColumns={2}
      renderItem={({ index: categoryIndex, item: category }) => (
        <Box
          {...(categoryIndex % 2 === 0 ? { pl: 6, pr: 2 } : { pl: 2, pr: 6 })}
          {...(categoryIndex > 1 ? { pt: 4 } : {})}
          w="1/2">
          <Cards.Category
            key={category.id}
            imageUri={category.imageUri}
            onPress={() => {}}
            title={category.title}
          />
        </Box>
      )}
      showsVerticalScrollIndicator={false}
    />
  </AnimatedBox>
)
