import { createIcon } from 'native-base'
import { Path } from 'react-native-svg'

export const CameraIcon = createIcon({
  viewBox: '0 0 20 20',
  path: [
    <Path
      key={Math.random()}
      d="M18.67 15.1236C18.67 15.5256 18.5103 15.911 18.2261 16.1952C17.9419 16.4794 17.5565 16.6391 17.1545 16.6391H3.51545C3.11353 16.6391 2.72807 16.4794 2.44387 16.1952C2.15966 15.911 2 15.5256 2 15.1236V6.78864C2 6.38671 2.15966 6.00125 2.44387 5.71705C2.72807 5.43285 3.11353 5.27318 3.51545 5.27318H6.54636L8.06182 3H12.6082L14.1236 5.27318H17.1545C17.5565 5.27318 17.9419 5.43285 18.2261 5.71705C18.5103 6.00125 18.67 6.38671 18.67 6.78864V15.1236Z"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
    <Path
      key={Math.random()}
      d="M10.3346 13.6082C12.0085 13.6082 13.3655 12.2512 13.3655 10.5773C13.3655 8.90337 12.0085 7.54639 10.3346 7.54639C8.6607 7.54639 7.30371 8.90337 7.30371 10.5773C7.30371 12.2512 8.6607 13.6082 10.3346 13.6082Z"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ]
})
