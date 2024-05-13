import { Loader2 } from 'lucide-react'

export function Loading() {
  return (
    <div className="flex items-center justify-center h-10">
      <Loader2 size={64} className="animate-spin" />
    </div>
  )
}
