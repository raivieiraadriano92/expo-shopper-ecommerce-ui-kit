import { render, waitFor } from 'src/test-utils'

import { RootStackNavigator } from './RootStackNavigator'

describe('<RootStackNavigator />', () => {
  it('renders correctly', async () => {
    const { findByTestId, toJSON } = render(<RootStackNavigator />)

    await waitFor(() => findByTestId('AppWrapper'))

    expect(toJSON()).toMatchSnapshot()
  })
})
