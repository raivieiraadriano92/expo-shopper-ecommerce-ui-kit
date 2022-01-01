import { render, waitFor } from 'test-utils'

import { OnboardingScreen } from './OnboardingScreen'

describe('<OnboardingScreen />', () => {
  it('renders correctly', async () => {
    //@ts-ignore
    const { findByText, toJSON } = render(<OnboardingScreen />)

    await waitFor(() => findByText('Explore Us'))

    expect(toJSON()).toMatchSnapshot()
  })
})
