import { FunctionComponent } from 'react'

import Svg, { Path, Rect } from 'react-native-svg'

import { IllustrationsProps, resize } from './utils'

export const LogoIconIllustration: FunctionComponent<IllustrationsProps> = ({ size }) => (
  <Svg {...resize({ height: 48, size, width: 48 })} fill="none" viewBox="0 0 48 48">
    <Rect width={48} height={48} rx={10} fill="#07BFA5" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.767 10.997a2.4 2.4 0 10-1.6.118C9.289 18.855 15.95 24.8 24 24.8s14.712-5.945 15.834-13.685a2.401 2.401 0 10-1.6-.118C37.176 17.907 31.206 23.2 24 23.2c-7.205 0-13.175-5.293-14.233-12.203z"
      fill="#fff"
    />
  </Svg>
)
