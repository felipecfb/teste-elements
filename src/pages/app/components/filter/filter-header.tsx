import { SlidersHorizontal, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { FilterForm } from './filter-form'

export function FilterHeader() {
  return (
    <div className="flex items-center justify-between">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="flex items-center gap-2 hover:bg-transparent hover:underline"
          >
            <SlidersHorizontal size={16} />
            Filtros
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col justify-between">
          <SheetHeader className="flex flex-row items-center justify-between p-4">
            <SheetTitle className="text-2xl">Filtros</SheetTitle>
            <SheetClose>
              <X size={24} />
            </SheetClose>
          </SheetHeader>

          <FilterForm />
        </SheetContent>
      </Sheet>

      <div className="flex items-center gap-2">
        <p className="text-sm text-zinc-900 font-medium">Ordenar por:</p>
        <Select defaultValue="alphabetical-az">
          <SelectTrigger className="w-[180px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
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
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
