import { useSearchParams } from 'react-router-dom'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { FormControl, FormField, FormItem } from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const sortProductsSchema = z.object({
  orderBy: z.string(),
})

type SortProductsSchema = z.infer<typeof sortProductsSchema>

export function Sort() {
  const [searchParams, setSearchParams] = useSearchParams()

  const orderBy = searchParams.get('orderBy')

  const form = useForm<SortProductsSchema>({
    resolver: zodResolver(sortProductsSchema),
    defaultValues: {
      orderBy: orderBy ?? 'alphabetical-az',
    },
  })

  function handleSort({ orderBy }: SortProductsSchema) {
    setSearchParams((state) => {
      if (orderBy) {
        const orderByForSearchParams = orderBy

        state.set('orderBy', orderByForSearchParams)
      } else {
        state.delete('orderBy')
      }

      return state
    })
  }

  return (
    <FormProvider {...form}>
      <form action="" onSubmit={form.handleSubmit(handleSort)}>
        <FormField
          control={form.control}
          name="orderBy"
          render={({ field }) => (
            <FormItem>
              <Select
                onValueChange={(value) => {
                  field.onChange(value)
                  form.handleSubmit(handleSort)()
                }}
                defaultValue="alphabetical-az"
                value={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="alphabetical-az">
                    Ordem alfabética, A-Z
                  </SelectItem>
                  <SelectItem value="alphabetical-za">
                    Ordem alfabética, Z-A
                  </SelectItem>
                  <SelectItem value="price-ascending">
                    Preço, ordem crescente
                  </SelectItem>
                  <SelectItem value="price-descending">
                    Preço, ordem decrescente
                  </SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
      </form>
    </FormProvider>
  )
}
