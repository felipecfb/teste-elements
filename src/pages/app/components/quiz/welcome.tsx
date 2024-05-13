import { SquarePen } from 'lucide-react'

import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../../../../components/ui/dialog'
import { ProfileForm } from './profile-form'
import { Ranking } from './ranking'

export function Welcome() {
  return (
    <>
      <DialogHeader className="space-y-6">
        <DialogTitle className="flex flex-col items-center gap-2 text-2xl text-zinc-900">
          <SquarePen size={48} />
          Quiz - Elements
        </DialogTitle>
        <DialogDescription className="text-center text-base flex flex-col gap-4">
          Teste seus conhecimentos sobre cadeira e ganhe um prêmio especial!
          <span className="text-sm">
            Obs: Você terá 2 minutos para responder 15 perguntas, boa sorte!
          </span>
        </DialogDescription>
      </DialogHeader>
      <DialogFooter className="sm:flex-col gap-4">
        <ProfileForm />

        <Ranking />
      </DialogFooter>
    </>
  )
}
