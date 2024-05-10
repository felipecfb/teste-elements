import { api } from '@/lib/axios'

interface GetProductsQuery {
  categories: string
}

export type GetProductsResponse = {
  id: number
  title: string
  price: number
  category: string
  image: string
  rating: number
}[]

export async function getProducts({ categories }: GetProductsQuery) {
  const response = await api.get<GetProductsResponse>('/products')

  if (categories) {
    const filteredProducts = response.data.filter((product) => {
      return categories.split(',').includes(product.category)
    })

    return filteredProducts
  }

  return response.data
}
