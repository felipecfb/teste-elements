import { data } from '@/data'
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
} from './ui/dialog'
import { RadioGroup } from './ui/radio-group'
import { Answer } from './answer'
import { useQuiz } from '@/hooks/use-quiz'

export function Question() {
  const { finishQuiz } = useQuiz()

  function handleEndQuiz() {
    finishQuiz()
  }

  return (
    <>
      {data.map((item, index) => (
        <DialogContent key={index}>
          <DialogHeader className="flex-row items-center">
            <p className="text-2xl text-zinc-900 font-medium">
              Questão 0{index + 1}
            </p>
            <span className="text-lg text-zinc-600">/0{data.length}</span>
          </DialogHeader>
          <DialogDescription className="text-lg text-zinc-900 font-medium">
            {item.question}
          </DialogDescription>
          <DialogFooter className="flex sm:flex-col items-start gap-4">
            <RadioGroup className="w-full">
              {item.options.map((option) => (
                <Answer key={option} option={option} />
              ))}
            </RadioGroup>

            <div className="w-full flex items-center gap-2 justify-end">
              <button
                className="w-max font-medium py-2 px-4 text-white bg-zinc-600 rounded-sm hover:bg-zinc-400"
                onClick={handleEndQuiz}
              >
                Voltar
              </button>
              <button
                className="w-max font-medium py-2 px-4 text-white bg-purple-800 rounded-sm hover:bg-purple-600"
                onClick={index === data.length - 1 ? handleEndQuiz : () => {}}
              >
                {index === data.length - 1 ? 'Finalizar' : 'Próxima'}
              </button>
            </div>
          </DialogFooter>
        </DialogContent>
      ))}
    </>
  )
}
