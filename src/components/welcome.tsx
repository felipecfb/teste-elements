import { SquarePen } from 'lucide-react'
import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './ui/dialog'

export function Welcome() {
  return (
    <>
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
          onClick={() => {}}
        >
          Começar
        </button>
      </DialogFooter>
    </>
  )
}
