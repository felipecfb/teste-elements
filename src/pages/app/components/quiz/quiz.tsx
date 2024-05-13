import { Lightbulb } from 'lucide-react'

import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { useQuiz } from '@/hooks/use-quiz'
import { Question } from './question'
import { Welcome } from './welcome'
import { GameOver } from './game-over'

export function Quiz() {
  const { quizState } = useQuiz()

  return (
    <Dialog>
      <DialogTrigger className="fixed right-4 bottom-4 rounded-full p-4 cursor-pointer bg-black">
        <Lightbulb size={36} color="white" />
      </DialogTrigger>
      <DialogContent className="w-11/12 h-4/5 md:max-w-lg md:h-max">
        {quizState.gameStage === 'INITIAL' && <Welcome />}
        {quizState.gameStage === 'STARTED' && <Question />}
        {quizState.gameStage === 'FINISHED' && <GameOver />}
      </DialogContent>
    </Dialog>
  )
}
