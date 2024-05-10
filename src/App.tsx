import { QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'

import { AppProvider } from './hooks'

import { queryClient } from './lib/react-query'

import { Toaster } from './components/ui/toaster'
import { router } from './routes'

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <RouterProvider router={router} />
        <Toaster />
      </AppProvider>
    </QueryClientProvider>
  )
}
