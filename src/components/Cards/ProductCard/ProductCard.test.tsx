import { render, waitFor } from 'test-utils'

import { ProductCard } from './ProductCard'

describe('<ProductCard />', () => {
  it('renders correctly', async () => {
    //@ts-ignore
    const { findByText, toJSON } = render(
      <ProductCard
        imageUri="https://philco.vteximg.com.br/arquivos/ids/175970/PFO01BTP.jpg?v=637111522912700000"
        onPress={() => {}}
        price={12}
        ratingGrade={3}
        title="product title"
      />
    )

    await waitFor(() => findByText('product title'))

    expect(toJSON()).toMatchSnapshot()
  })
})
