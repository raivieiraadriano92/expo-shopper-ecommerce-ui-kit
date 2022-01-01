import { render, waitFor } from 'test-utils'

import { WelcomeScreen } from './WelcomeScreen'

describe('<WelcomeScreen />', () => {
  it('renders correctly', async () => {
    //@ts-ignore
    const { findByText, toJSON } = render(<WelcomeScreen />)

    await waitFor(() => findByText('Welcome to'))

    expect(toJSON()).toMatchSnapshot()
  })
})
