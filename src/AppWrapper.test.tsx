import { render, waitFor } from '@testing-library/react-native'

import { AppWrapper } from './AppWrapper'

describe('<AppWrapper />', () => {
  it('renders correctly', async () => {
    const { findByTestId, toJSON } = render(<AppWrapper />)

    await waitFor(() => findByTestId('AppWrapper'))

    expect(toJSON()).toMatchSnapshot()
  })
})
