import { api } from '@/lib/axios'

interface GetProductsQuery {
  categories?: string[] | null
}

type GetProductsResponse = {
  id: number
  title: string
  price: number
  category: string
  image: string
  rating: number
}[]

export async function getProducts({ categories }: GetProductsQuery) {
  const products = await api.get<GetProductsResponse>('/products')

  if (categories) {
    return products.data.filter((product) =>
      categories.includes(product.category),
    )
  }

  return products.data
}
