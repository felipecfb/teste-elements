import { convertToBRL } from '@/utils/convertToBRL'
import { RatingStars } from '../../../../components/rating-stars'

interface ProductProps {
  product: {
    title: string
    price: number
    category: string
    image: string
    rating: number
  }
}

export function ProductItem({ product }: ProductProps) {
  return (
    <div className="bg-zinc-50 rounded-lg overflow-hidden p-4 justify-between flex flex-col gap-8">
      <img
        src={product.image}
        alt={product.title}
        className="w-full object-contain flex-1"
      />

      <div className="flex flex-col items-start gap-2 justify-between">
        <section>
          <h3 className="text-base font-bold md:text-lg xl:text-xl">
            {product.title}
          </h3>
          <p className="text-sm md:text-base lg:text-lg capitalize">
            {product.category}
          </p>
        </section>
        <section className="flex items-center justify-between w-full">
          <p className="text-lg font-bold">{convertToBRL(product.price)}</p>
          <div className="relative flex items-center gap-1">
            <p className="text-base font-bold text-zinc-900">
              {product.rating}
            </p>
            <RatingStars rating={product.rating} />
          </div>
        </section>
      </div>
    </div>
  )
}
