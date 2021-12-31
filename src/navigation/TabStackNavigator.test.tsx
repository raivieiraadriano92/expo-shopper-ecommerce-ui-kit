import { render, waitFor } from 'src/test-utils'

import { TabStackNavigator } from './TabStackNavigator'

describe('<TabStackNavigator />', () => {
  it('renders correctly', async () => {
    const { findByTestId, toJSON } = render(<TabStackNavigator />)

    await waitFor(() => findByTestId('AppWrapper'))

    expect(toJSON()).toMatchSnapshot()
  })
})
