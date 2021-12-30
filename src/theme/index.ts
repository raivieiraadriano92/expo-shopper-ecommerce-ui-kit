import { extendTheme } from 'native-base'

import { colors } from './colors'
import { Badge } from './components/badge'
import { Button } from './components/button'
import { Checkbox } from './components/checkbox'
import { Heading } from './components/heading'
import { IconButton } from './components/icon-button'
import { Input } from './components/input'
import { Text } from './components/text'
import { sizes } from './sizes'
import { spacing } from './space'
import { typography } from './typography'

export const theme = extendTheme({
  colors,
  components: { Badge, Button, Checkbox, Heading, IconButton, Input, Text },
  config: {
    useSystemColorMode: false,
    initialColorMode: 'light'
  },
  sizes,
  space: spacing,
  ...typography
})

type CustomThemeType = typeof theme

// 3. Extend the internal NativeBase Theme
declare module 'native-base' {
  interface ICustomTheme extends CustomThemeType {}
}
