import { FunctionComponent } from 'react'

import { Box, Button, HStack, ScrollView } from 'native-base'
import { FlatList } from 'react-native'
import Animated, { FadeInRight, FadeOutRight } from 'react-native-reanimated'
import { Cards, TAB_BAR_HEIGHT_TOKEN } from 'src/components'

const products = [
  {
    id: 1,
    imageUri: 'https://philco.vteximg.com.br/arquivos/ids/175970/PFO01BTP.jpg?v=637111522912700000',
    price: 68,
    ratingGrade: 4,
    title: 'Green Chair'
  },
  {
    id: 2,
    imageUri: 'https://philco.vteximg.com.br/arquivos/ids/175970/PFO01BTP.jpg?v=637111522912700000',
    price: 52,
    ratingGrade: 3,
    title: 'Wingback Chair'
  },
  {
    id: 3,
    imageUri: 'https://philco.vteximg.com.br/arquivos/ids/175970/PFO01BTP.jpg?v=637111522912700000',
    price: 55,
    ratingGrade: 3,
    title: 'Color Chair'
  },
  {
    id: 4,
    imageUri: 'https://philco.vteximg.com.br/arquivos/ids/175970/PFO01BTP.jpg?v=637111522912700000',
    price: 24,
    ratingGrade: 4,
    title: 'Vintage Lamp'
  },
  {
    id: 5,
    imageUri: 'https://philco.vteximg.com.br/arquivos/ids/175970/PFO01BTP.jpg?v=637111522912700000',
    price: 16,
    ratingGrade: 2,
    title: 'Black Lamp'
  },
  {
    id: 6,
    imageUri: 'https://philco.vteximg.com.br/arquivos/ids/175970/PFO01BTP.jpg?v=637111522912700000',
    price: 68,
    ratingGrade: 4,
    title: 'Wood Chair'
  }
]

const tags = [
  {
    id: 1,
    title: 'Best-seller'
  },
  {
    id: 2,
    title: 'Popular'
  },
  {
    id: 3,
    title: 'New'
  },
  {
    id: 4,
    title: 'Special'
  }
]

const AnimatedBox = Animated.createAnimatedComponent(Box)

export const SearchProductList: FunctionComponent = () => (
  <AnimatedBox entering={FadeInRight} exiting={FadeOutRight}>
    <FlatList
      data={products}
      ListFooterComponent={<Box h={TAB_BAR_HEIGHT_TOKEN} pb={6} safeAreaBottom />}
      ListHeaderComponent={
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <HStack pb={6} pt={3} px={6} space={4}>
            {tags.map((tag, tagIndex) => (
              <Button
                {...(tagIndex ? { variant: 'outline' } : {})}
                colorScheme="secondary"
                key={tag.id}
                size="sm">
                {tag.title}
              </Button>
            ))}
          </HStack>
        </ScrollView>
      }
      numColumns={2}
      renderItem={({ index: productIndex, item: product }) => (
        <Box
          {...(productIndex % 2 === 0 ? { pl: 6, pr: 2 } : { pl: 2, pr: 6 })}
          {...(productIndex > 1 ? { pt: 5 } : {})}
          w="1/2">
          <Cards.Product
            key={product.id}
            imageUri={product.imageUri}
            onPress={() => {}}
            price={product.price}
            ratingGrade={product.ratingGrade}
            title={product.title}
          />
        </Box>
      )}
      showsVerticalScrollIndicator={false}
    />
  </AnimatedBox>
)
