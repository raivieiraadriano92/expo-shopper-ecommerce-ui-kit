import { createIcon } from 'native-base'
import { Path } from 'react-native-svg'

export const ArrowRightIcon = createIcon({
  viewBox: '0 0 20 20',
  path: [
    <Path
      key={Math.random()}
      d="M1.66671 10L18.3334 10"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
    <Path
      key={Math.random()}
      d="M12.5 4.16671L18.3334 10L12.5 15.8334"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ]
})
