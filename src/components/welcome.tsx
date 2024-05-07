import { SquarePen } from 'lucide-react'
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './ui/dialog'
import { useQuiz } from '@/hooks/use-quiz'

export function Welcome() {
  const { startQuiz } = useQuiz()

  function handleStartQuiz() {
    startQuiz()
  }

  return (
    <DialogContent>
      <DialogHeader className="space-y-6">
        <DialogTitle className="flex flex-col items-center gap-2 text-2xl text-zinc-900">
          <SquarePen size={48} />
          Quiz - Elements
        </DialogTitle>
        <DialogDescription className="text-center text-base">
          Teste seus conhecimentos sobre a nossa marca e ganhe prêmios.
          <br />
          Vamos lá?
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <button
          className="font-medium w-full py-2 text-white bg-purple-800 rounded-lg hover:bg-purple-600"
          onClick={handleStartQuiz}
        >
          Começar
        </button>
      </DialogFooter>
    </DialogContent>
  )
}
