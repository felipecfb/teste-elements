import { api } from '@/lib/axios'

type GetProductsResponse = {
  id: number
  title: string
  price: number
  category: string
  image: string
  rating: number
}[]

export async function getProducts() {
  const products = await api.get<GetProductsResponse>('/products')

  return products.data
}
