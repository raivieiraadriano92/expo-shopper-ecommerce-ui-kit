import { createIcon } from 'native-base'
import { Path } from 'react-native-svg'

export const LockIcon = createIcon({
  viewBox: '0 0 20 20',
  path: [
    <Path
      key={Math.random()}
      d="M15.8333 9.1665H4.16667C3.24619 9.1665 2.5 9.9127 2.5 10.8332V16.6665C2.5 17.587 3.24619 18.3332 4.16667 18.3332H15.8333C16.7538 18.3332 17.5 17.587 17.5 16.6665V10.8332C17.5 9.9127 16.7538 9.1665 15.8333 9.1665Z"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
    <Path
      key={Math.random()}
      d="M5.83301 9.1665V5.83317C5.83301 4.7281 6.27199 3.66829 7.0534 2.88689C7.8348 2.10549 8.89461 1.6665 9.99967 1.6665C11.1047 1.6665 12.1646 2.10549 12.946 2.88689C13.7274 3.66829 14.1663 4.7281 14.1663 5.83317V9.1665"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ]
})
