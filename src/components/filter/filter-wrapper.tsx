import { ReactNode } from 'react'

import { Accordion } from '../ui/accordion'

interface FilterWrapperProps {
  children: ReactNode
}

export function FilterWrapper({ children }: FilterWrapperProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {children}
    </Accordion>
  )
}
