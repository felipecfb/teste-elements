import { data } from '@/data'
import { ReorderQuestions } from '@/utils/reorder-questions'
import { ReactNode, createContext, useContext, useReducer } from 'react'

interface QuizProviderProps {
  children: ReactNode
}

const STAGES = ['INITIAL', 'STARTED', 'FINISHED']

interface QuizAction {
  type:
    | 'START_QUIZ'
    | 'REORDER_QUESTIONS'
    | 'NEXT_QUESTION'
    | 'BACK_TO_INITIAL'
    | 'PREVIOUS_QUESTION'
}

const initialState = {
  gameStage: STAGES[0],
  questions: data,
  currentQuestion: 0,
}

interface QuizContextProps {
  quizStart: boolean
  quizState: typeof initialState
  startQuiz: () => void
  backToInitial: () => void
  nextQuestion: () => void
  previousQuestion: () => void
}

const quizReducer = (state: typeof initialState, action: QuizAction) => {
  switch (action.type) {
    case 'START_QUIZ':
      return {
        ...state,
        gameStage: STAGES[1],
      }

    case 'REORDER_QUESTIONS':
      return {
        ...state,
        questions: ReorderQuestions(data),
      }

    case 'NEXT_QUESTION':
      if (state.currentQuestion === state.questions.length - 1) {
        return {
          ...state,
          gameStage: STAGES[2],
        }
      }

      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
      }

    case 'PREVIOUS_QUESTION':
      if (state.currentQuestion === 0) {
        return state
      }

      return {
        ...state,
        currentQuestion: state.currentQuestion - 1,
      }

    case 'BACK_TO_INITIAL':
      return {
        ...state,
        gameStage: STAGES[0],
        currentQuestion: 0,
      }

    default:
      return state
  }
}

const QuizContext = createContext({} as QuizContextProps)

function QuizProvider({ children }: QuizProviderProps) {
  const [state, dispatch] = useReducer(quizReducer, initialState)

  const quizStart = state.gameStage === STAGES[1]

  function startQuiz() {
    dispatch({ type: 'START_QUIZ' })
    dispatch({ type: 'REORDER_QUESTIONS' })
  }

  function backToInitial() {
    dispatch({ type: 'BACK_TO_INITIAL' })
  }

  function nextQuestion() {
    dispatch({ type: 'NEXT_QUESTION' })
  }

  function previousQuestion() {
    dispatch({ type: 'PREVIOUS_QUESTION' })
  }

  return (
    <QuizContext.Provider
      value={{
        quizStart,
        quizState: state,
        startQuiz,
        backToInitial,
        nextQuestion,
        previousQuestion,
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