import { FunctionComponent, useCallback, useRef } from 'react'

import { Box, HStack, IconButton, useTheme } from 'native-base'
import { TextInput } from 'react-native'
import Animated, {
  Layout,
  SlideInLeft,
  SlideInRight,
  SlideOutLeft,
  SlideOutRight
} from 'react-native-reanimated'

import Icons from '../Icons'

type Props = {
  active: boolean
  onActive(): void
  onInactive(): void
  openFilters(): void
}

const AnimatedBox = Animated.createAnimatedComponent(Box)

export const SearchBarHeader: FunctionComponent<Props> = ({
  active,
  onActive,
  onInactive,
  openFilters
}) => {
  const refSearchInput = useRef<TextInput>(null)

  const theme = useTheme()

  const handleOnInactive = useCallback(() => {
    refSearchInput.current?.blur()

    onInactive()
  }, [onInactive])

  return (
    <HStack alignItems="center" pt={2} px={3} safeAreaTop>
      {active && (
        <AnimatedBox entering={SlideInLeft} exiting={SlideOutLeft} layout={Layout.springify()}>
          <IconButton
            colorScheme="gray"
            icon={<Icons.ArrowLeft />}
            mr={2}
            onPress={handleOnInactive}
            size="sm"
          />
        </AnimatedBox>
      )}
      <AnimatedBox
        alignItems="center"
        borderColor="gray.200"
        borderRadius="2xl"
        borderWidth="1px"
        flex={1}
        flexDirection="row"
        h={13}
        layout={Layout.springify()}>
        <Icons.Search color="gray.500" mx={4} size={5} />
        <TextInput
          onFocus={onActive}
          placeholder="Search"
          placeholderTextColor={theme.colors.gray[500]}
          ref={refSearchInput}
          style={{
            flex: 1,
            height: '100%'
          }}
        />
        {!active && (
          <AnimatedBox layout={Layout.springify()}>
            <IconButton
              colorScheme="gray"
              icon={<Icons.Camera />}
              mr={2}
              onPress={() => {}}
              size="sm"
            />
          </AnimatedBox>
        )}
      </AnimatedBox>
      {active && (
        <AnimatedBox
          entering={SlideInRight.delay(100)}
          exiting={SlideOutRight}
          layout={Layout.springify()}>
          <IconButton
            colorScheme="gray"
            icon={<Icons.Filter />}
            ml={2}
            onPress={openFilters}
            size="sm"
          />
        </AnimatedBox>
      )}
    </HStack>
  )
}
