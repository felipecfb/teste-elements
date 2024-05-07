import { ReactNode } from 'react'
import { QuizProvider } from './use-quiz'

interface AppProviderProps {
  children: ReactNode
}

function AppProvider({ children }: AppProviderProps) {
  return <QuizProvider>{children}</QuizProvider>
}

export { AppProvider }
