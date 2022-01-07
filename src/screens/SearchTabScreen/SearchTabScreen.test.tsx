import { render, waitFor } from 'test-utils'

import { SearchTabScreen } from './SearchTabScreen'

describe('<SearchTabScreen />', () => {
  it('renders correctly', async () => {
    //@ts-ignore
    const { findByPlaceholderText, toJSON } = render(<SearchTabScreen />)

    await waitFor(() => findByPlaceholderText('Search'))

    expect(toJSON()).toMatchSnapshot()
  })
})
