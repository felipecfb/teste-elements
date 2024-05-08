import { SquarePen } from 'lucide-react'

import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './ui/dialog'
import { ProfileForm } from './profile-form'
import { Ranking } from './ranking'

export function Welcome() {
  return (
    <DialogContent>
      <DialogHeader className="space-y-6">
        <DialogTitle className="flex flex-col items-center gap-2 text-2xl text-zinc-900">
          <SquarePen size={48} />
          Quiz - Elements
        </DialogTitle>
        <DialogDescription className="text-center text-base flex flex-col gap-4">
          Teste seus conhecimentos sobre cadeira e ganhe um prêmio especial!
          <span className="text-sm">
            Obs: Você terá 1 minuto para responder o máximo de perguntas
            possíveis.
          </span>
        </DialogDescription>
      </DialogHeader>
      <DialogFooter className="sm:flex-col gap-4">
        <ProfileForm />

        <Ranking />
      </DialogFooter>
    </DialogContent>
  )
}
