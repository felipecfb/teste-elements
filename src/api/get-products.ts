import { api } from '@/lib/axios'

interface GetProductsQuery {
  category: string
  minPrice: string
  rating: string
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
}: GetProductsQuery) {
  const response = await api.get<GetProductsResponse>('/products', {
    params: {
      category: category === 'all' ? undefined : category,
      price_gt: minPrice ?? undefined,
      rating_lte: rating ?? undefined,
    },
  })

  return response.data
}
