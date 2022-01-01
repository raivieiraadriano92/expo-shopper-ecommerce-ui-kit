import { render } from '@testing-library/react-native'
import { AppWrapper } from 'src/AppWrapper'

const customRender: typeof render = (ui, options) => render(ui, { wrapper: AppWrapper, ...options })

// re-export everything
export * from '@testing-library/react-native'

// override render method
export { customRender as render }
