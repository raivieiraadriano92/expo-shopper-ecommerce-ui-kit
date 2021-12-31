import { FunctionComponent } from 'react'

import { render } from '@testing-library/react-native'

import { AppWrapper } from '../src/AppWrapper'

const Wrapper: FunctionComponent = ({ children }) => <AppWrapper>{children}</AppWrapper>

const customRender: typeof render = (ui, options) => render(ui, { wrapper: Wrapper, ...options })

// re-export everything
export * from '@testing-library/react-native'

// override render method
export { customRender as render }
