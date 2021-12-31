import { FunctionComponent } from 'react'

import { Icon, IIconProps } from 'native-base'
import { Path } from 'react-native-svg'

export const HeartIcon: FunctionComponent<IIconProps & { filled?: boolean }> = ({
  filled,
  ...props
}) => (
  <Icon {...{ viewBox: '0 0 20 20', ...props }}>
    <Path
      key={Math.random()}
      d="M17.3845 4.28541C16.9771 3.8779 16.4935 3.55463 15.9612 3.33408C15.429 3.11352 14.8584 3 14.2822 3C13.706 3 13.1355 3.11352 12.6032 3.33408C12.071 3.55463 11.5873 3.8779 11.18 4.28541L10.3346 5.13075L9.4893 4.28541C8.66655 3.46265 7.55066 3.00042 6.38709 3.00042C5.22354 3.00042 4.10763 3.46265 3.28487 4.28541C2.4621 5.10817 1.99988 6.22407 1.99988 7.38764C1.99988 8.55118 2.4621 9.6671 3.28487 10.4898L4.1302 11.3352L10.3346 17.5397L16.5391 11.3352L17.3845 10.4898C17.792 10.0825 18.1152 9.59893 18.3358 9.0666C18.5564 8.53435 18.6699 7.96382 18.6699 7.38764C18.6699 6.81147 18.5564 6.24093 18.3358 5.70864C18.1152 5.17635 17.792 4.69273 17.3845 4.28541Z"
      fill={filled ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
)
