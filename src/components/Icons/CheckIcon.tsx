import { createIcon } from 'native-base'
import { Path } from 'react-native-svg'

export const CheckIcon = createIcon({
  viewBox: '0 0 20 20',
  path: [
    <Path
      key={Math.random()}
      d="M16.6667 5L7.50001 14.1667L3.33334 10"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ]
})
