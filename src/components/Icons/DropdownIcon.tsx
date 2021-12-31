import { createIcon } from 'native-base'
import { Path } from 'react-native-svg'

export const DropdownIcon = createIcon({
  viewBox: '0 0 20 20',
  path: [
    <Path
      key={Math.random()}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.40874 12.2553L6.07778 8.92597C5.92106 8.76932 5.83301 8.55685 5.83301 8.33531C5.83301 7.87398 6.20717 7.5 6.66872 7.5L13.3306 7.5C13.5523 7.5 13.7648 7.58801 13.9216 7.74466C14.2479 8.07087 14.2479 8.59976 13.9216 8.92597L10.5906 12.2553C10.2642 12.5816 9.7351 12.5816 9.40874 12.2553Z"
      //   fill="none"
      stroke="currentColor"
    />
  ]
})
