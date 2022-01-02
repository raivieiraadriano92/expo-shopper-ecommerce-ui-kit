import { render, waitFor } from 'test-utils'

import { ChangePasswordScreen } from './ChangePasswordScreen'

describe('<ChangePasswordScreen />', () => {
  it('renders correctly', async () => {
    const { findAllByText, toJSON } = render(
      //@ts-ignore
      <ChangePasswordScreen navigation={{ goBack: () => {} }} />
    )

    await waitFor(() => findAllByText('Change Password'))

    expect(toJSON()).toMatchSnapshot()
  })
})
