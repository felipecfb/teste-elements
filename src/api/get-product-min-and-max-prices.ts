import { api } from '@/lib/axios'
import { GetProductsResponse } from './get-products'

interface GetProductMinAndMaxPricesResponse {
  minPrice: number
  maxPrice: number
}

export async function getProductMinAndMaxPrices(): Promise<GetProductMinAndMaxPricesResponse> {
  const { data } = await api.get<GetProductsResponse>('/products')

  const minPrice = Math.min(...data.map((product) => product.price))
  const maxPrice = Math.max(...data.map((product) => product.price))

  console.log(minPrice, maxPrice)

  return { minPrice, maxPrice }
}
