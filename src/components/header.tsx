import { Armchair } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <Link to="/">
      <header className="flex items-center justify-center py-4 bg-zinc-900">
        <Armchair className="h-10 w-10" color="#9333EA" />
      </header>
    </Link>
  )
}
