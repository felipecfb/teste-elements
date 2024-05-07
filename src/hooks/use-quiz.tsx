import { ReactNode, createContext, useContext } from 'react'

interface QuizProviderProps {
  children: ReactNode
}

interface QuizContextProps {}

const QuizContext = createContext({} as QuizContextProps)

function QuizProvider({ children }: QuizProviderProps) {
  return <QuizContext.Provider value={{}}>{children}</QuizContext.Provider>
}

function useQuiz() {
  const context = useContext(QuizContext)

  return context
}

export { QuizProvider, useQuiz }
