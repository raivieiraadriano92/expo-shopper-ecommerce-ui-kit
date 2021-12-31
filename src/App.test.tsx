import { render, waitFor } from 'src/test-utils'

import { App } from './App'

describe('<App />', () => {
  it('renders correctly', async () => {
    const { findByTestId, toJSON } = render(<App />)

    await waitFor(() => findByTestId('AppWrapper'))

    expect(toJSON()).toMatchSnapshot()
  })
})
