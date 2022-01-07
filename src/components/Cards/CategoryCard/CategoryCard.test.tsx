import { render, waitFor } from 'test-utils'

import { CategoryCard } from './CategoryCard'

describe('<CategoryCard />', () => {
  it('renders correctly', async () => {
    //@ts-ignore
    const { findByText, toJSON } = render(
      <CategoryCard
        imageUri="https://philco.vteximg.com.br/arquivos/ids/175970/PFO01BTP.jpg?v=637111522912700000"
        onPress={() => {}}
        title="category title"
      />
    )

    await waitFor(() => findByText('category title'))

    expect(toJSON()).toMatchSnapshot()
  })
})
