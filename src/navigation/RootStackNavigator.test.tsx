import { render, waitFor } from 'test-utils'

import { RootStackNavigator } from './RootStackNavigator'

describe('<RootStackNavigator />', () => {
  it('renders correctly', async () => {
    const { findByText, toJSON } = render(<RootStackNavigator />)

    await waitFor(() => findByText('Explore Us'))

    expect(toJSON()).toMatchSnapshot()
  })
})
