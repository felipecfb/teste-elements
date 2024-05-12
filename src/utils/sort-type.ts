import { OrderBy } from '@/api/get-products'

interface SortTypesProps {
  type: OrderBy | undefined
}

interface SortTypesResponse {
  orderBy: string
}

export function SortType({ type }: SortTypesProps): SortTypesResponse {
  let orderBy = ''

  switch (type) {
    case 'alphabetical-az':
      orderBy = 'title'
      break
    case 'alphabetical-za':
      orderBy = '-title'
      break
    case 'price-ascending':
      orderBy = 'price'
      break
    case 'price-descending':
      orderBy = '-price'
      break
    default:
      break
  }

  console.log(orderBy)

  return { orderBy }
}
