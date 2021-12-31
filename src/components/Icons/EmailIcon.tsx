import { createIcon } from 'native-base'
import { Path } from 'react-native-svg'

export const EmailIcon = createIcon({
  viewBox: '0 0 20 20',
  path: [
    <Path
      key={Math.random()}
      d="M3.33366 3.3335H16.667C17.5837 3.3335 18.3337 4.0835 18.3337 5.00016V15.0002C18.3337 15.9168 17.5837 16.6668 16.667 16.6668H3.33366C2.41699 16.6668 1.66699 15.9168 1.66699 15.0002V5.00016C1.66699 4.0835 2.41699 3.3335 3.33366 3.3335Z"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
    <Path
      key={Math.random()}
      d="M18.3337 5L10.0003 10.8333L1.66699 5"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ]
})
