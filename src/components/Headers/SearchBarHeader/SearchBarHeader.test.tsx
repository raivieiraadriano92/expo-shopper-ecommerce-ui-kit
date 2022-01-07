import { render, waitFor } from 'test-utils'

import { SearchBarHeader } from './SearchBarHeader'

describe('<SearchBarHeader />', () => {
  it('renders correctly', async () => {
    //@ts-ignore
    const { findByPlaceholderText, toJSON } = render(
      <SearchBarHeader active onActive={() => {}} onInactive={() => {}} openFilters={() => {}} />
    )

    await waitFor(() => findByPlaceholderText('Search'))

    expect(toJSON()).toMatchSnapshot()
  })
})
