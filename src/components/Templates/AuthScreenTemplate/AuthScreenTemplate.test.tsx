import { Text } from 'native-base'
import { render, waitFor } from 'test-utils'

import { AuthScreenTemplate } from './AuthScreenTemplate'

describe('<AuthScreenTemplate />', () => {
  it('renders correctly', async () => {
    const { findByText, toJSON } = render(
      <AuthScreenTemplate>
        <Text>testing...</Text>
      </AuthScreenTemplate>
    )

    await waitFor(() => findByText('testing...'))

    expect(toJSON()).toMatchSnapshot()
  })
})
