import { createIcon } from 'native-base'
import { Path } from 'react-native-svg'

export const ChevronDownIcon = createIcon({
  viewBox: '0 0 20 20',
  path: [
    <Path
      key={Math.random()}
      d="M4.375 8.125L10 13.75L15.625 8.125"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ]
})
