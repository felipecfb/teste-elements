import { Dialog } from '@/components/ui/dialog'

import { QuizTrigger } from './quiz-trigger'
import { QuizContent } from './quiz-content'

export function QuizWrapper() {
  return (
    <Dialog>
      <QuizTrigger />
      <QuizContent />
    </Dialog>
  )
}
