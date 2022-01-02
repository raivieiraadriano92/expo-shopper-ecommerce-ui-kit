import { render, waitFor } from 'test-utils'

import { ForgotPasswordScreen } from './ForgotPasswordScreen'

describe('<ForgotPasswordScreen />', () => {
  it('renders correctly', async () => {
    const { findAllByText, toJSON } = render(
      //@ts-ignore
      <ForgotPasswordScreen navigation={{ goBack: () => {} }} />
    )

    await waitFor(() => findAllByText('Forgot Password'))

    expect(toJSON()).toMatchSnapshot()
  })
})
