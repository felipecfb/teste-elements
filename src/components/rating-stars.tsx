import { Star } from 'lucide-react'

type RatingStarsProps = {
  rating: number
  fill?: string
}

export function RatingStars({ rating }: RatingStarsProps) {
  const roundedRating = Math.floor(rating)

  return (
    <div className="relative flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          size={20}
          fill={index < roundedRating ? 'yellow' : 'transparent'}
          className="stroke-zinc-500"
        />
      ))}
    </div>
  )
}
