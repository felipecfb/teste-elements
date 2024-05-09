import { QueryClientProvider } from '@tanstack/react-query'

import { AppProvider } from './hooks'

import { queryClient } from './lib/react-query'

import { Toaster } from './components/ui/toaster'
import { Header } from './components/header'
import { Quiz } from './components/quiz'
import { Products } from './components/products'

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <Header />
        <Quiz />

        <div className="bg-zinc-600 p-8">
          <Products />
        </div>

        <Toaster />
      </AppProvider>
    </QueryClientProvider>
  )
}
