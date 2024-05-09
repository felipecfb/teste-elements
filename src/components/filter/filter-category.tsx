import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion'
import { Checkbox } from '../ui/checkbox'

type FilterCategoryProps = {
  categories: string[]
}

export function FilterCategory({ categories }: FilterCategoryProps) {
  return (
    <AccordionItem value="item-1">
      <AccordionTrigger>Categorias</AccordionTrigger>
      <AccordionContent className="space-y-2">
        {categories?.map((category) => (
          <div className="flex items-center space-x-2" key={category}>
            <Checkbox id={category} />
            <label
              htmlFor={category}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {category.toUpperCase()}
            </label>
          </div>
        ))}
      </AccordionContent>
    </AccordionItem>
  )
}
