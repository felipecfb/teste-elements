import { CircleHelpIcon } from 'lucide-react'

import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { useQuiz } from '@/hooks/use-quiz'
import { Question } from './question'
import { Welcome } from './welcome'

export function Quiz() {
  const { quizStart } = useQuiz()

  return (
    <Dialog>
      <DialogTrigger className="fixed right-2 bottom-2 rounded-full p-2 cursor-pointer">
        <CircleHelpIcon size={30} />
      </DialogTrigger>
      {quizStart ? <Question /> : <Welcome />}
    </Dialog>
  )
}
