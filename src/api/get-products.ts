import { api } from '@/lib/axios'
import { SortType } from '@/utils/sort-type'

export type OrderBy =
  | 'alphabetical-az'
  | 'alphabetical-za'
  | 'price-ascending'
  | 'price-descending'

interface GetProductsQuery {
  category?: string
  minPrice?: string
  rating?: string
  orderByType?: OrderBy | undefined
}

export type GetProductsResponse = {
  id: number
  title: string
  price: number
  category: string
  image: string
  rating: number
}[]

export async function getProducts({
  category,
  minPrice,
  rating,
  orderByType,
}: GetProductsQuery) {
  const { orderBy } = SortType({ type: orderByType })

  const response = await api.get<GetProductsResponse>('/products', {
    params: {
      category: category === 'all' ? undefined : category,
      price_gt: minPrice ?? undefined,
      rating_lte: rating ?? undefined,
      _sort: orderBy,
    },
  })

  return response.data
}
