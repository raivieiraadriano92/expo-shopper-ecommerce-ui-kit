import { render, waitFor } from 'test-utils'

import { TabStackNavigator } from './TabStackNavigator'

describe('<TabStackNavigator />', () => {
  it('renders correctly', async () => {
    //@ts-ignore
    const { findByText, toJSON } = render(<TabStackNavigator />)

    await waitFor(() => findByText('home'))

    expect(toJSON()).toMatchSnapshot()
  })
})
