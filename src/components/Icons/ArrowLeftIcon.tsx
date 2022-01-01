import { createIcon } from 'native-base'
import { Path } from 'react-native-svg'

export const ArrowLeftIcon = createIcon({
  viewBox: '0 0 20 20',
  path: [
    <Path
      key={Math.random()}
      d="M18.3337 10H1.66699"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
    <Path
      key={Math.random()}
      d="M7.50033 15.8332L1.66699 9.99984L7.50033 4.1665"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ]
})
