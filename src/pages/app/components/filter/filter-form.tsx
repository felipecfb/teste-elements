import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { getProducts } from '@/api/get-products'

import { removeDuplicates } from '@/utils/remove-duplicates'
import { FormProvider, useForm } from 'react-hook-form'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { SheetClose } from '@/components/ui/sheet'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'

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

      return state
    })
  }

  const { data: result } = useQuery({
    queryKey: ['products-category'],
    queryFn: () => getProducts({ categories: '' }),
  })

  const categories = removeDuplicates(
    result?.map((product) => product.category),
  )

  function handleClearFilters() {
    setSearchParams((state) => {
      state.delete('categories')

      return state
    })

    form.reset({
      categories: [],
    })
  }

  return (
    <FormProvider {...form}>
      <div className="flex justify-between items-center">
        <SheetClose asChild>
          <Button
            variant="ghost"
            className="text-zinc-900 font-medium"
            onClick={handleClearFilters}
          >
            Limpar filtros
          </Button>
        </SheetClose>
      </div>
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

        <SheetClose asChild>
          <Button type="submit" className="w-full">
            Aplicar filtros
          </Button>
        </SheetClose>
      </form>
    </FormProvider>
  )
}
