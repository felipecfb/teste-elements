import { CircleHelpIcon } from 'lucide-react'

import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { useQuiz } from '@/hooks/use-quiz'
import { Question } from './question'
import { Welcome } from './welcome'
import { GameOver } from './game-over'

export function Quiz() {
  const { quizState } = useQuiz()

  return (
    <Dialog>
      <DialogTrigger className="fixed right-2 bottom-2 rounded-full p-2 cursor-pointer">
        <CircleHelpIcon size={30} />
      </DialogTrigger>
      {quizState.gameStage === 'INITIAL' && <Welcome />}
      {quizState.gameStage === 'STARTED' && <Question />}
      {quizState.gameStage === 'FINISHED' && <GameOver />}
    </Dialog>
  )
}
