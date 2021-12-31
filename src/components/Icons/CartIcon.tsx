import { createIcon } from 'native-base'
import { Path } from 'react-native-svg'

export const CartIcon = createIcon({
  viewBox: '0 0 20 20',
  path: [
    <Path
      key={Math.random()}
      d="M7.49996 18.3333C7.9602 18.3333 8.33329 17.9602 8.33329 17.5C8.33329 17.0397 7.9602 16.6666 7.49996 16.6666C7.03972 16.6666 6.66663 17.0397 6.66663 17.5C6.66663 17.9602 7.03972 18.3333 7.49996 18.3333Z"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
    <Path
      key={Math.random()}
      d="M16.6667 18.3333C17.1269 18.3333 17.5 17.9602 17.5 17.5C17.5 17.0397 17.1269 16.6666 16.6667 16.6666C16.2065 16.6666 15.8334 17.0397 15.8334 17.5C15.8334 17.9602 16.2065 18.3333 16.6667 18.3333Z"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
    <Path
      key={Math.random()}
      d="M0.833374 0.833374H4.16671L6.40004 11.9917C6.47624 12.3754 6.68496 12.72 6.98966 12.9653C7.29436 13.2106 7.67562 13.3409 8.06671 13.3334H16.1667C16.5578 13.3409 16.9391 13.2106 17.2438 12.9653C17.5484 12.72 17.7572 12.3754 17.8334 11.9917L19.1667 5.00004H5.00004"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ]
})
