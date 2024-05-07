import { DialogContent } from './ui/dialog'

import { Question } from './question'
import { Welcome } from './welcome'

export function QuizContent() {
  const quizStarted = false

  return (
    <DialogContent>{quizStarted ? <Question /> : <Welcome />}</DialogContent>
  )
}
