import { render, waitFor } from 'test-utils'

import { TabBar } from './TabBar'

describe('<TabBar />', () => {
  it('renders correctly', async () => {
    const { findByTestId, toJSON } = render(<TabBar activeKey="home" onPress={() => {}} />)

    await waitFor(() => findByTestId('TabBarItem.home'))

    expect(toJSON()).toMatchSnapshot()
  })
})
