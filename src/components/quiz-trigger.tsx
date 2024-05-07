import { CircleHelpIcon } from 'lucide-react'
import { DialogTrigger } from './ui/dialog'

export function QuizTrigger() {
  return (
    <DialogTrigger className="fixed right-2 bottom-2 rounded-full p-2 cursor-pointer">
      <CircleHelpIcon size={30} />
    </DialogTrigger>
  )
}
