import { ReactNode, createContext, useContext, useState } from 'react'

interface QuizProviderProps {
  children: ReactNode
}

interface QuizContextProps {
  quizStart: boolean
  startQuiz: () => void
  finishQuiz: () => void
}

const QuizContext = createContext({} as QuizContextProps)

function QuizProvider({ children }: QuizProviderProps) {
  const [quizStart, setQuizStart] = useState(false)

  function startQuiz() {
    setQuizStart(true)
  }

  function finishQuiz() {
    setQuizStart(false)
  }

  return (
    <QuizContext.Provider
      value={{
        quizStart,
        startQuiz,
        finishQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  )
}

function useQuiz() {
  const context = useContext(QuizContext)

  return context
}

export { QuizProvider, useQuiz }
