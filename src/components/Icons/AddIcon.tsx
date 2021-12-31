import { createIcon } from 'native-base'
import { Path } from 'react-native-svg'

export const AddIcon = createIcon({
  viewBox: '0 0 20 20',
  path: [
    <Path
      key={Math.random()}
      d="M9.99978 2.92893V17.0711"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
    <Path
      key={Math.random()}
      d="M2.92871 10H17.0708"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ]
})
