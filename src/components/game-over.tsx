import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
} from './ui/dialog'
import { useQuiz } from '@/hooks/use-quiz'
import { useToast } from './ui/use-toast'
import { Ranking } from './ranking'

export function GameOver() {
  const { quizState, backToInitial } = useQuiz()

  const handleCouponClick = async () => {
    try {
      await navigator.clipboard.writeText('QUIZ5')

      toast({
        title: 'Cupom copiado para a área de transferência!',
        className: 'bg-green-500 text-white',
      })
    } catch (err) {
      toast({
        title: 'Erro ao copiar cupom',
        variant: 'destructive',
      })
    }
  }

  const { toast } = useToast()

  function handlePlayAgain() {
    backToInitial()
  }

  return (
    <DialogContent>
      <DialogHeader>
        <p className="text-2xl text-zinc-900 font-medium text-center">
          Fim de jogo
        </p>

        <p className="text-center">
          Sua pontuação foi de
          <span className="text-rose-500 font-bold font-xl">
            {' '}
            {quizState.score}{' '}
          </span>
          pontos.
        </p>
      </DialogHeader>
      <DialogDescription className="text-center">
        Obrigado por jogar! Você acaba de receber um cupom de 5% de desconto.
        Use o código{' '}
        <span
          className="text-rose-500 font-bold text-lg underline cursor-pointer"
          onClick={handleCouponClick}
        >
          QUIZ5
        </span>{' '}
        na sua próxima compra.
      </DialogDescription>
      <DialogFooter className="sm:flex-col gap-6">
        <Ranking />

        <button
          className="w-full text-white font-medium rounded-md py-2 bg-purple-800 hover:bg-purple-600"
          onClick={handlePlayAgain}
        >
          Voltar ao início
        </button>
      </DialogFooter>
    </DialogContent>
  )
}
