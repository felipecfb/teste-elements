import { SlidersHorizontal, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { FilterForm } from './filter-form'
import { Sort } from './sort'

export function Filter() {
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
        <Sort />
      </div>
    </div>
  )
}
