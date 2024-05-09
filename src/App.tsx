import { QueryClientProvider } from '@tanstack/react-query'

import { AppProvider } from './hooks'

import { queryClient } from './lib/react-query'

import { Toaster } from './components/ui/toaster'
import { Header } from './components/header'
import { Quiz } from './components/quiz/quiz'
import { Products } from './components/products'
import { Filter } from './components/filter/filter'

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <Header />

        <div className="container py-8 space-y-4">
          <Filter />
          <Products />
        </div>

        <Quiz />
        <Toaster />
      </AppProvider>
    </QueryClientProvider>
  )
}
