import { api } from '@/lib/axios'
import { SortType } from '@/utils/sort-type'

export type OrderBy =
  | 'alphabetical-az'
  | 'alphabetical-za'
  | 'price-ascending'
  | 'price-descending'

interface GetProductsQuery {
  pageParam?: number
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

const LIMIT = 8

export async function getProducts({
  category,
  minPrice,
  rating,
  orderByType,
  pageParam = 1,
}: GetProductsQuery) {
  const { orderBy } = SortType({ type: orderByType })

  const { data } = await api.get<GetProductsResponse>('/products', {
    params: {
      category: category === 'all' ? undefined : category,
      price_gt: minPrice ?? undefined,
      rating_lte: rating ?? undefined,
      _sort: orderBy,
      _page: pageParam,
      _per_page: LIMIT,
    },
  })

  return {
    products: data,
    currentPage: pageParam,
    nextPage: pageParam + 1,
  }
}
