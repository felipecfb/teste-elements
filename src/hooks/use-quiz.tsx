import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react'

import { ReorderQuestions } from '@/utils/reorder-questions'
import { sendDataToFakeDB } from '@/utils/send-data-to-fake-db'

import { questions } from '@/data/questions'

interface QuizProviderProps {
  children: ReactNode
}

const STAGES = ['INITIAL', 'STARTED', 'FINISHED']

type QuizActionType =
  | 'START_QUIZ'
  | 'REORDER_QUESTIONS'
  | 'NEXT_QUESTION'
  | 'BACK_TO_INITIAL'
  | 'PREVIOUS_QUESTION'
  | 'CHECK_ANSWER'
  | 'FINISH_QUIZ'
  | 'UPDATE_TIMER'
  | 'SET_FINISHED'

interface QuizAction {
  type: QuizActionType
  payload?: {
    answer: string
    option: string
  }
}

const initialState = {
  gameStage: STAGES[0],
  questions,
  name: '',
  currentQuestion: 0,
  score: 0,
  answerSelected: false,
  timer: 120,
}

interface QuizContextProps {
  quizStart: boolean
  quizState: typeof initialState
  startQuiz: () => void
  backToInitial: () => void
  nextQuestion: () => void
  previousQuestion: () => void
  isAtFirstQuestion: boolean
  isAtLastQuestion: boolean
  checkAnswer: (option: string) => void
  finishQuiz: () => void
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
        questions: ReorderQuestions(questions),
      }

    case 'NEXT_QUESTION':
      if (state.currentQuestion === state.questions.length - 1) {
        return {
          ...state,
          gameStage: STAGES[2],
          answerSelected: false,
        }
      }

      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
        answerSelected: false,
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
      return initialState

    case 'CHECK_ANSWER': {
      if (state.answerSelected) {
        return state
      }

      const { answer, option } = action.payload!
      let correctAnswer = 0

      if (answer === option) {
        correctAnswer = 1
      }

      return {
        ...state,
        score: state.score + correctAnswer,
        answerSelected: true,
      }
    }

    case 'UPDATE_TIMER':
      return {
        ...state,
        timer: state.timer - 1,
      }

    case 'FINISH_QUIZ':
      return {
        ...state,
        gameStage: STAGES[2],
      }

    case 'SET_FINISHED':
      return {
        ...state,
        finished: true,
      }

    default:
      return state
  }
}

const QuizContext = createContext({} as QuizContextProps)

function QuizProvider({ children }: QuizProviderProps) {
  const [state, dispatch] = useReducer(quizReducer, initialState)
  const [quizFinished, setQuizFinished] = useState<boolean>(false)

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined

    if (state.gameStage === STAGES[1]) {
      timer = setInterval(() => {
        dispatch({ type: 'UPDATE_TIMER' })
      }, 1000)
    }

    if (state.timer === 0) {
      clearInterval(timer)

      if (!quizFinished) {
        dispatch({ type: 'SET_FINISHED' })
        finishQuiz()
        setQuizFinished(true)
      }
    }

    return () => {
      clearInterval(timer)
    }
  }, [quizFinished, state.gameStage, state.timer])

  const quizStart = state.gameStage === STAGES[1]

  function startQuiz() {
    dispatch({ type: 'START_QUIZ' })
    dispatch({ type: 'REORDER_QUESTIONS' })
  }

  function backToInitial() {
    setQuizFinished(false)

    dispatch({ type: 'BACK_TO_INITIAL' })
  }

  function nextQuestion() {
    dispatch({ type: 'NEXT_QUESTION' })
  }

  function previousQuestion() {
    dispatch({ type: 'PREVIOUS_QUESTION' })
  }

  function checkAnswer(option: string) {
    const currentQuestion = state.questions[state.currentQuestion]

    dispatch({
      type: 'CHECK_ANSWER',
      payload: { answer: currentQuestion.answer, option },
    })
  }

  async function finishQuiz() {
    await sendDataToFakeDB({ name: state.name, score: state.score })

    dispatch({ type: 'FINISH_QUIZ' })
  }

  const isAtFirstQuestion = state.currentQuestion === 0
  const isAtLastQuestion = state.currentQuestion === state.questions.length - 1

  return (
    <QuizContext.Provider
      value={{
        quizStart,
        quizState: state,
        startQuiz,
        backToInitial,
        nextQuestion,
        previousQuestion,
        isAtFirstQuestion,
        isAtLastQuestion,
        checkAnswer,
        finishQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  )
}

function useQuiz() {
  const context = useContext(QuizContext)

  if (!context) {
    throw new Error('useQuiz must be used within an QuizProvider')
  }

  return context
}

export { QuizProvider, useQuiz }
