import { createIcon } from 'native-base'
import { Path } from 'react-native-svg'

export const HomeIcon = createIcon({
  viewBox: '0 0 20 20',
  path: [
    <Path
      key={Math.random()}
      d="M2.5 7.49996L10 1.66663L17.5 7.49996V16.6666C17.5 17.1087 17.3244 17.5326 17.0118 17.8451C16.6993 18.1577 16.2754 18.3333 15.8333 18.3333H4.16667C3.72464 18.3333 3.30072 18.1577 2.98816 17.8451C2.67559 17.5326 2.5 17.1087 2.5 16.6666V7.49996Z"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
    <Path
      key={Math.random()}
      d="M7.5 18.3333V10H12.5V18.3333"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ]
})
