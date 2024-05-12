import { api } from '@/lib/axios'
import { removeDuplicates } from '@/utils/remove-duplicates'
import { GetProductsResponse } from './get-products'

export type GetProductCategoriesResponse = string[]

export async function getProductCategories(): Promise<GetProductCategoriesResponse> {
  const response = await api.get<GetProductsResponse>('/products')

  const categories = removeDuplicates(
    response.data.map((product) => product.category),
  )

  return categories
}
