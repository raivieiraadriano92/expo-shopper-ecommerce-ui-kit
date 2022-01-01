import { render, waitFor } from 'test-utils'

import { RegisterScreen } from './RegisterScreen'

describe('<RegisterScreen />', () => {
  it('renders correctly', async () => {
    //@ts-ignore
    const { findAllByText, toJSON } = render(<RegisterScreen />)

    await waitFor(() => findAllByText('Register'))

    expect(toJSON()).toMatchSnapshot()
  })
})
