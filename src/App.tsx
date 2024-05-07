import { Header } from './components/header'
import { Quiz } from './components/quiz'
import { AppProvider } from './hooks'

export function App() {
  return (
    <AppProvider>
      <Header />
      <Quiz />
    </AppProvider>
  )
}
