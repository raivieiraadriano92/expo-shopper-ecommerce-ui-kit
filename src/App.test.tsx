import { render, waitFor } from '@testing-library/react-native'

import { App } from './App'

describe('<App />', () => {
  it('renders correctly', async () => {
    const { findByTestId, toJSON } = render(<App />)

    await waitFor(() => findByTestId('App'))

    expect(toJSON()).toMatchSnapshot()
  })
})
