import { getProducts } from '@/api/get-products'
import { useQuery } from '@tanstack/react-query'
import { ProductItem } from './product-item'
import { useSearchParams } from 'react-router-dom'

export function Products() {
  const [searchParams, _] = useSearchParams()

  const categoriesFromSearchParams = searchParams.get('categories')?.split(',')

  const { data: productsData } = useQuery({
    queryFn: () =>
      getProducts({
        categories: categoriesFromSearchParams,
      }),
    queryKey: ['products'],
  })

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {productsData?.map((product) => (
        <ProductItem key={product.id} {...product} />
      ))}
    </div>
  )
}
