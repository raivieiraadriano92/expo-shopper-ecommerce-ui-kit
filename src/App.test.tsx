import { render, waitFor } from '@testing-library/react-native'

import { App } from './App'

describe('<App />', () => {
  it('renders correctly', async () => {
    const { findByText, toJSON } = render(<App />)

    await waitFor(() => findByText('Explore Us'))

    expect(toJSON()).toMatchSnapshot()
  })
})
