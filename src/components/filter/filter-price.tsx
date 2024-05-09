import { useState } from 'react'

import { convertToBRL } from '@/utils/convertToBRL'

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion'
import { Slider } from '../ui/slider'

interface FilterPriceProps {
  prices: number[]
}

export function FilterPrice({ prices }: FilterPriceProps) {
  const [priceFilter, setPriceFilter] = useState<number>(9.99)

  const minPrice = Math.min(...prices)
  const maxPrice = Math.max(...prices)

  function handlePriceChange(value: number) {
    setPriceFilter(value)
  }

  return (
    <AccordionItem value="item-1">
      <AccordionTrigger>Preço</AccordionTrigger>
      <AccordionContent className="space-y-2">
        <div className="w-full text-center">
          <p>
            <span>{convertToBRL(priceFilter)}</span> -{' '}
            <span>{convertToBRL(maxPrice)}</span>
          </p>
        </div>
        <Slider
          min={minPrice}
          max={maxPrice}
          onValueChange={(value) => handlePriceChange(value[0])}
          className="p-4"
        />
      </AccordionContent>
    </AccordionItem>
  )
}
