import { createIcon } from 'native-base'
import { Path } from 'react-native-svg'

export const BagIcon = createIcon({
  viewBox: '0 0 20 20',
  path: [
    <Path
      key={Math.random()}
      d="M5 1.66675L2.5 5.00008V16.6667C2.5 17.1088 2.67559 17.5327 2.98816 17.8453C3.30072 18.1578 3.72464 18.3334 4.16667 18.3334H15.8333C16.2754 18.3334 16.6993 18.1578 17.0118 17.8453C17.3244 17.5327 17.5 17.1088 17.5 16.6667V5.00008L15 1.66675H5Z"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
    <Path
      key={Math.random()}
      d="M2.5 5H17.5"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
    <Path
      key={Math.random()}
      d="M13.3337 8.33325C13.3337 9.21731 12.9825 10.0652 12.3573 10.6903C11.7322 11.3154 10.8844 11.6666 10.0003 11.6666C9.11627 11.6666 8.26842 11.3154 7.6433 10.6903C7.01818 10.0652 6.66699 9.21731 6.66699 8.33325"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ]
})
