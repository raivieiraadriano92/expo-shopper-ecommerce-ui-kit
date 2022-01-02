import { render, waitFor } from 'test-utils'

import { VerifyCodeScreen } from './VerifyCodeScreen'

describe('<VerifyCodeScreen />', () => {
  it('renders correctly', async () => {
    const { findAllByText, toJSON } = render(
      //@ts-ignore
      <VerifyCodeScreen navigation={{ goBack: () => {} }} />
    )

    await waitFor(() => findAllByText('Verify Code'))

    expect(toJSON()).toMatchSnapshot()
  })
})
