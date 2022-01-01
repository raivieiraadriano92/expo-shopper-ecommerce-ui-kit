import { render, waitFor } from '@testing-library/react-native'
import { Text } from 'native-base'

import { AppWrapper } from './AppWrapper'

describe('<AppWrapper />', () => {
  it('renders correctly', async () => {
    const { findByText, toJSON } = render(
      <AppWrapper>
        <Text>testing...</Text>
      </AppWrapper>
    )

    await waitFor(() => findByText('testing...'))

    expect(toJSON()).toMatchSnapshot()
  })
})
