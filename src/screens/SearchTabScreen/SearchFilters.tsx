import { FunctionComponent, useCallback } from 'react'

import {
  Box,
  Button,
  Center,
  Divider,
  Heading,
  HStack,
  IconButton,
  Slider,
  Text
} from 'native-base'
import { Modal, ScrollView } from 'react-native'
import Animated, { SlideInRight, SlideOutRight } from 'react-native-reanimated'
import { Icons } from 'src/components'

const AnimatedBox = Animated.createAnimatedComponent(Box)

type Props = {
  close(): void
  visible: boolean
}

const categories = [
  {
    id: 1,
    title: 'Furniture'
  },
  {
    id: 2,
    title: 'Accessories'
  },
  {
    id: 3,
    title: 'Grocery'
  },
  {
    id: 4,
    title: 'Fashion'
  },
  {
    id: 5,
    title: 'Health & Beauty'
  },
  {
    id: 6,
    title: 'Baby'
  }
]

export const SearchFilters: FunctionComponent<Props> = ({ close, visible }) => {
  const apply = useCallback(close, [close])

  return (
    <Modal animationType="fade" hardwareAccelerated visible={visible}>
      <Box alignItems="flex-end" bg="overlay" h="full" pl={13} position="absolute" w="full">
        <AnimatedBox
          bg="white"
          borderLeftRadius="3xl"
          entering={SlideInRight}
          exiting={SlideOutRight}
          h="full"
          maxW={80}
          position="absolute"
          pb={2}
          pt={4}
          safeArea
          w="full">
          <Center>
            <IconButton
              colorScheme="gray"
              icon={<Icons.Close />}
              left={6}
              onPress={close}
              position="absolute"
              size="sm"
            />
            <Heading size="xl">Filters</Heading>
          </Center>
          <Divider bg="gray.50" mt={4} />
          <ScrollView showsVerticalScrollIndicator={false}>
            <Box pb={4} pt={6} px={6}>
              <Text mb={4} textTransform="uppercase" variant="caption2">
                categories
              </Text>
              <HStack flexWrap="wrap" space={4}>
                {categories.map((category) => (
                  <Button
                    colorScheme="secondary"
                    key={category.id}
                    mb={4}
                    size="sm"
                    variant="outline">
                    {category.title}
                  </Button>
                ))}
              </HStack>
              <HStack alignItems="center" justifyContent="center" mt={1} space={1}>
                <Text variant="caption3">Show more</Text>
                <Icons.ChevronDown size={3} />
              </HStack>
              <Divider bg="gray.50" my={5} />
              <Text mb={8} textTransform="uppercase" variant="caption2">
                price
              </Text>
              <Slider
                colorScheme="secondary"
                defaultValue={70}
                minValue={0}
                maxValue={100}
                accessibilityLabel="hello world"
                step={10}>
                <Slider.Track>
                  <Slider.FilledTrack />
                </Slider.Track>
                <Slider.Thumb />
              </Slider>
              <Divider bg="gray.50" my={5} />
              <Text mb={8} textTransform="uppercase" variant="caption2">
                rating
              </Text>
              <HStack flexWrap="wrap" space={4}>
                {[1, 2, 3, 4, 5].map((ratingGrade) => (
                  <Button
                    colorScheme="secondary"
                    key={ratingGrade}
                    mb={4}
                    px={3}
                    size="sm"
                    variant="outline">
                    <HStack space={1}>
                      {[...new Array(ratingGrade)].map((_, starIndex) => (
                        <Icons.Star key={`${ratingGrade}-${starIndex}`} size={5} />
                      ))}
                    </HStack>
                  </Button>
                ))}
              </HStack>
            </Box>
          </ScrollView>
          <Divider bg="gray.50" />
          <HStack justifyContent="space-between" pt={4} px={6} space={4}>
            <Button colorScheme="secondary" flex={1} size="md" variant="outline">
              Clear
            </Button>
            <Button colorScheme="secondary" flex={1} onPress={apply} size="md">
              Apply
            </Button>
          </HStack>
        </AnimatedBox>
      </Box>
    </Modal>
  )
}
