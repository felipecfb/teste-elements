import { OrderBy, getProducts } from '@/api/get-products'
import { useQuery } from '@tanstack/react-query'
import { ProductItem } from './product-item'
import { useSearchParams } from 'react-router-dom'
import { ProductsEmpty } from './products-empty'

export function Products() {
  const [searchParams, _] = useSearchParams()

  const category = searchParams.get('category') ?? ''
  const minPrice = searchParams.get('minPrice') ?? ''
  const rating = searchParams.get('rating') ?? ''
  const orderByType =
    (searchParams.get('orderBy') as OrderBy | undefined) ?? 'alphabetical-az'

  const { data: result } = useQuery({
    queryKey: ['products', category, minPrice, rating, orderByType],
    queryFn: () => getProducts({ category, minPrice, rating, orderByType }),
  })

  return (
    <>
      {result?.length === 0 ? (
        <ProductsEmpty />
      ) : (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <>
            {result?.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </>
        </div>
      )}
    </>
  )
}
