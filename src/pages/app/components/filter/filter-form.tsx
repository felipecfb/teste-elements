import { useQuery } from '@tanstack/react-query'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useSearchParams } from 'react-router-dom'

import { getProductCategories } from '@/api/get-product-categories'
import { getProductMinAndMaxPrices } from '@/api/get-product-min-and-max-prices'

import { convertToBRL } from '@/utils/convertToBRL'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { SheetClose } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { Slider } from '@/components/ui/slider'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { RatingStars } from '@/components/rating-stars'
import { Sort } from './sort'

const filterCategorySchema = z.object({
  category: z.string().optional(),
  minPrice: z.number().optional(),
  rating: z.string().optional(),
})

type FilterCategorySchema = z.infer<typeof filterCategorySchema>

export function FilterForm() {
  const [searchParams, setSearchParams] = useSearchParams()

  const categoryFromSearchParams = searchParams.get('category')
  const minPriceFromSearchParams = searchParams.get('minPrice')
  const ratingFromSearchParams = searchParams.get('rating')

  const form = useForm<FilterCategorySchema>({
    resolver: zodResolver(filterCategorySchema),
    defaultValues: {
      category: categoryFromSearchParams ?? '',
      minPrice: Number(minPriceFromSearchParams) ?? 0,
      rating: ratingFromSearchParams ?? '5',
    },
  })

  function handleFilter({ category, minPrice, rating }: FilterCategorySchema) {
    setSearchParams((state) => {
      if (category) {
        const categoryForSearchParams = category

        state.set('category', categoryForSearchParams)
      } else {
        state.delete('category')
      }

      if (minPrice) {
        state.set('minPrice', minPrice.toString())
      } else {
        state.delete('minPrice')
      }

      if (rating) {
        state.set('rating', rating)
      } else {
        state.delete('rating')
      }

      return state
    })
  }

  const { data: productCategories } = useQuery({
    queryKey: ['product-categories'],
    queryFn: getProductCategories,
  })

  const { data: productMinAndMaxPrice } = useQuery({
    queryKey: ['product-min-and-max-prices'],
    queryFn: getProductMinAndMaxPrices,
  })

  function handleClearFilters() {
    setSearchParams((state) => {
      state.delete('category')
      state.delete('minPrice')
      state.delete('rating')

      return state
    })

    form.reset({
      category: '',
      minPrice: productMinAndMaxPrice?.minPrice ?? 0,
      rating: '5',
    })
  }

  return (
    <FormProvider {...form}>
      <SheetClose asChild>
        <Button
          variant="ghost"
          className="text-zinc-900 font-medium"
          onClick={handleClearFilters}
        >
          Limpar filtros
        </Button>
      </SheetClose>
      <Form {...form}>
        <form
          action=""
          onSubmit={form.handleSubmit(handleFilter)}
          className="flex-1 flex flex-col justify-between"
        >
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Categorias</AccordionTrigger>
              <AccordionContent className="space-y-2 flex flex-col">
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue="all"
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione uma categoria" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="all">
                            Todas as categorias
                          </SelectItem>
                          {productCategories?.map((category) => (
                            <SelectItem key={category} value={category}>
                              {category.charAt(0).toUpperCase() +
                                category.slice(1)}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Preço</AccordionTrigger>
              <AccordionContent className="space-y-2 flex flex-col">
                <FormField
                  control={form.control}
                  name="minPrice"
                  render={({ field }) => (
                    <FormItem>
                      <div className="w-full text-center">
                        <p>
                          <span className="font-medium">
                            {convertToBRL(field.value ?? 0)}
                          </span>{' '}
                          -{' '}
                          <span className="font-medium">
                            {convertToBRL(productMinAndMaxPrice?.maxPrice ?? 0)}
                          </span>
                        </p>
                      </div>
                      <Slider
                        min={productMinAndMaxPrice?.minPrice ?? 0}
                        max={productMinAndMaxPrice?.maxPrice ?? 0}
                        step={1}
                        defaultValue={[productMinAndMaxPrice?.minPrice ?? 0]}
                        onValueChange={(value) => field.onChange(value[0])}
                      />
                    </FormItem>
                  )}
                />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Avaliações</AccordionTrigger>
              <AccordionContent className="space-y-2 flex flex-col">
                <FormField
                  control={form.control}
                  name="rating"
                  render={({ field }) => (
                    <FormItem>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue="5"
                        value={field.value ?? '5'}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="5">
                            <RatingStars rating={5} />
                          </SelectItem>
                          <SelectItem value="4">
                            <RatingStars rating={4} />
                          </SelectItem>
                          <SelectItem value="3">
                            <RatingStars rating={3} />
                          </SelectItem>
                          <SelectItem value="2">
                            <RatingStars rating={2} />
                          </SelectItem>
                          <SelectItem value="1">
                            <RatingStars rating={1} />
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="md:hidden">
              <AccordionTrigger>Ordernar por</AccordionTrigger>
              <AccordionContent className="space-y-2 flex flex-col">
                <Sort />
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <SheetClose asChild>
            <Button type="submit" className="w-full">
              Aplicar filtros
            </Button>
          </SheetClose>
        </form>
      </Form>
    </FormProvider>
  )
}
