import { render, waitFor } from 'test-utils'

import { SignInScreen } from './SignInScreen'

describe('<SignInScreen />', () => {
  it('renders correctly', async () => {
    //@ts-ignore
    const { findAllByText, toJSON } = render(<SignInScreen />)

    await waitFor(() => findAllByText('Sign In'))

    expect(toJSON()).toMatchSnapshot()
  })
})
