import { Text } from 'native-base'
import { render, waitFor } from 'test-utils'

import { BaseCard } from './BaseCard'

describe('<BaseCard />', () => {
  it('renders correctly', async () => {
    //@ts-ignore
    const { findByText, toJSON } = render(
      <BaseCard>
        <Text>testing</Text>
      </BaseCard>
    )

    await waitFor(() => findByText('testing'))

    expect(toJSON()).toMatchSnapshot()
  })
})
