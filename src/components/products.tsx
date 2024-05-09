import { getProducts } from '@/api/get-products'
import { useQuery } from '@tanstack/react-query'
import { ProductItem } from './product-item'

export function Products() {
  const { data: productsData } = useQuery({
    queryFn: getProducts,
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
