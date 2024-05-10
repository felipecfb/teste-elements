import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../../../components/ui/accordion'
import { Checkbox } from '../../../../components/ui/checkbox'
import { Button } from '../../../../components/ui/button'
import { useQuery } from '@tanstack/react-query'
import { getProducts } from '@/api/get-products'
import { removeDuplicates } from '@/utils/remove-duplicates'
import { useSearchParams } from 'react-router-dom'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '../../../../components/ui/form'

const filterCategorySchema = z.object({
  categories: z
    .array(z.string())
    .refine((value) => value.some((item) => item), {
      message: 'You have to select at least one item.',
    }),
})

type FilterCategorySchema = z.infer<typeof filterCategorySchema>

export function FilterForm() {
  const [searchParams, setSearchParams] = useSearchParams()

  const categoriesFromSearchParams = searchParams.get('categories')?.split(',')

  const form = useForm<FilterCategorySchema>({
    resolver: zodResolver(filterCategorySchema),
    defaultValues: {
      categories: categoriesFromSearchParams ?? [],
    },
  })

  function handleFilter({ categories }: FilterCategorySchema) {
    setSearchParams((state) => {
      if (categories) {
        const categoriesForSearchParams = categories.join(',')

        state.set('categories', categoriesForSearchParams)
      } else {
        state.delete('categories')
      }

      // if (minPrice) {
      //   setPriceFilter(parseInt(minPrice))

      //   state.set('minPrice', minPrice)
      // } else {
      //   state.delete('minPrice')
      // }

      // if (maxRating) {
      //   state.set('maxRating', maxRating)
      // } else {
      //   state.delete('maxRating')
      // }

      return state
    })
  }

  const { data: productsData } = useQuery({
    queryFn: () => getProducts({ categories: null }),
    queryKey: ['products'],
  })

  const categories = removeDuplicates(
    productsData?.map((product) => product.category),
  )

  return (
    <FormProvider {...form}>
      <form
        action=""
        onSubmit={form.handleSubmit(handleFilter)}
        className="flex flex-col justify-between gap-4 h-full"
      >
        <div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Categorias</AccordionTrigger>
              <AccordionContent className="space-y-2">
                <FormField
                  control={form.control}
                  name="categories"
                  render={() => (
                    <FormItem>
                      {categories?.map((category, index) => (
                        <FormField
                          key={index}
                          control={form.control}
                          name="categories"
                          render={({ field }) => {
                            return (
                              <FormItem
                                key={index}
                                className="flex items-center gap-2"
                              >
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(category)}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([
                                            ...field.value,
                                            category,
                                          ])
                                        : field.onChange(
                                            field.value?.filter(
                                              (value) => value !== category,
                                            ),
                                          )
                                    }}
                                  />
                                </FormControl>
                                <FormLabel>{category.toUpperCase()}</FormLabel>
                              </FormItem>
                            )
                          }}
                        />
                      ))}
                    </FormItem>
                  )}
                ></FormField>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          {/* <FilterWrapper>
          <AccordionItem value="item-1">
            <AccordionTrigger>Preço</AccordionTrigger>
            <AccordionContent className="space-y-2">
              <div className="w-full text-center">
                <p>
                  <span>{convertToBRL(priceFilter!)}</span> -{' '}
                  <span>{convertToBRL(maxPrice)}</span>
                </p>
              </div>
              <Slider
                min={minPriceFilter}
                max={maxPriceFilter}
                onValueChange={(value) => handlePriceChange(value[0])}
                className="p-4"
                {...register('minPrice')}
              />
            </AccordionContent>
          </AccordionItem>
        </FilterWrapper> */}
        </div>

        <Button type="submit" className="w-full">
          Aplicar filtros
        </Button>
      </form>
    </FormProvider>
  )
}
