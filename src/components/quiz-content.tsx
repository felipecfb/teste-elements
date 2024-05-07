import { useQuiz } from '@/hooks/use-quiz'

import { Question } from './question'
import { Welcome } from './welcome'

export function QuizContent() {
  const { quizStart } = useQuiz()

  return quizStart ? <Question /> : <Welcome />
}
