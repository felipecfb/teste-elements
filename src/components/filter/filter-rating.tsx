import { RatingStars } from '../rating-stars'

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Label } from '../ui/label'

export function FilterRating() {
  return (
    <AccordionItem value="item-1">
      <AccordionTrigger>Classificação</AccordionTrigger>
      <AccordionContent className="space-y-2">
        <RadioGroup defaultValue="five-stars">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="five-stars" id="five-stars" />
            <Label htmlFor="five-stars">
              <RatingStars rating={5} />
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="four-stars" id="four-stars" />
            <Label htmlFor="four-stars">
              <RatingStars rating={4} />
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="three-stars" id="three-stars" />
            <Label htmlFor="three-stars">
              <RatingStars rating={3} />
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="two-stars" id="two-stars" />
            <Label htmlFor="two-stars">
              <RatingStars rating={2} />
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="one-star" id="one-star" />
            <Label htmlFor="one-star">
              <RatingStars rating={1} />
            </Label>
          </div>
        </RadioGroup>
      </AccordionContent>
    </AccordionItem>
  )
}
