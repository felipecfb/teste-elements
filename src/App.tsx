import { QueryClientProvider } from '@tanstack/react-query'
import { Header } from './components/header'
import { Quiz } from './components/quiz'
import { AppProvider } from './hooks'
import { queryClient } from './lib/react-query'

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <Header />
        <Quiz />
      </AppProvider>
    </QueryClientProvider>
  )
}
