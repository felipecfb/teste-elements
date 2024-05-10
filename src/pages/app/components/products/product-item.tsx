import { convertToBRL } from '@/utils/convertToBRL'
import { RatingStars } from '../../../../components/rating-stars'

interface ProductProps {
  title: string
  price: number
  category: string
  image: string
  rating: number
}

export function ProductItem({
  title,
  price,
  category,
  image,
  rating,
}: ProductProps) {
  return (
    <div className="bg-zinc-50 rounded-lg overflow-hidden p-4 justify-between flex flex-col gap-8">
      <img src={image} alt={title} className="w-full object-contain flex-1" />

      <div className="flex flex-col items-start gap-2 justify-between">
        <section>
          <h3 className="text-base font-bold md:text-lg xl:text-xl">{title}</h3>
          <p className="text-sm md:text-base lg:text-lg capitalize">
            {category}
          </p>
        </section>
        <section className="flex items-center justify-between w-full">
          <p className="text-lg font-bold">{convertToBRL(price)}</p>
          <div className="relative flex items-center gap-1">
            <p className="text-base font-bold text-zinc-900">{rating}</p>
            <RatingStars rating={rating} />
          </div>
        </section>
      </div>
    </div>
  )
}
