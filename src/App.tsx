import { Header } from './components/header'
import { QuizWrapper } from './components/quiz-wrapper'
import { AppProvider } from './hooks'

export function App() {
  return (
    <AppProvider>
      <Header />
      <QuizWrapper />
    </AppProvider>
  )
}
