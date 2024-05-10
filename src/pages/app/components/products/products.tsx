import { getProducts } from '@/api/get-products'
import { useQuery } from '@tanstack/react-query'
import { ProductItem } from './product-item'
import { useSearchParams } from 'react-router-dom'

export function Products() {
  const [searchParams, _] = useSearchParams()

  const categories = searchParams.get('categories') ?? ''

  const { data: result } = useQuery({
    queryKey: ['products', categories],
    queryFn: () => getProducts({ categories }),
  })

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {result && (
        <>
          {result.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </>
      )}
    </div>
  )
}
