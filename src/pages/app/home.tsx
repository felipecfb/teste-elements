import { Filter } from '@/pages/app/components/filter/filter'
import { Header } from '@/components/header'
import { Products } from '@/pages/app/components/products/products'
import { Quiz } from '@/pages/app/components/quiz/quiz'

export function Home() {
  return (
    <>
      <Header />

      <div className="container py-8 space-y-4">
        <Filter />
        <Products />
      </div>

      <Quiz />
    </>
  )
}
