import { useInView } from 'react-intersection-observer'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useSearchParams } from 'react-router-dom'

import { ProductItem } from './product-item'

import { OrderBy, getProducts } from '@/api/get-products'
import { useEffect } from 'react'
import { Loading } from '@/components/loading'

export function Products() {
  const [searchParams, _] = useSearchParams()

  const category = searchParams.get('category') ?? ''
  const minPrice = searchParams.get('minPrice') ?? ''
  const rating = searchParams.get('rating') ?? ''
  const orderByType =
    (searchParams.get('orderBy') as OrderBy | undefined) ?? 'alphabetical-az'

  const { data, error, status, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['products', category, minPrice, rating, orderByType],
      queryFn: ({ pageParam }) =>
        getProducts({ category, minPrice, rating, orderByType, pageParam }),
      initialPageParam: 1,
      getNextPageParam: (lastPage) => {
        if (lastPage.products.next === null) {
          return undefined
        }

        return lastPage.nextPage
      },
    })

  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView) {
      handleLoadMore()
    }
  }, [fetchNextPage, inView])

  async function handleLoadMore() {
    console.log('handleLoadMore')

    await fetchNextPage()
  }

  return (
    <>
      {status === 'pending' && <Loading />}
      {status === 'error' && <div>Error: {error.message}</div>}
      {status === 'success' && (
        <>
          {data.pages.map((page) => {
            return (
              <div
                key={page.currentPage}
                className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
              >
                {page.products.data.map((product) => (
                  <ProductItem key={product.id} product={product} />
                ))}
              </div>
            )
          })}

          <div ref={ref}>{isFetchingNextPage ? <Loading /> : null}</div>
        </>
      )}
    </>
  )
}
