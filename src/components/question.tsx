import { data } from '@/data'
import { DialogDescription, DialogFooter, DialogHeader } from './ui/dialog'
import { RadioGroup } from './ui/radio-group'
import { Answer } from './answer'

export function Question() {
  return (
    <>
      {data.map((item, index) => (
        <>
          <DialogHeader className="flex-row items-center">
            <p className="text-2xl text-zinc-900 font-medium">
              Questão 0{index + 1}
            </p>
            <span className="text-lg text-zinc-600">/0{data.length}</span>
          </DialogHeader>
          <DialogDescription className="text-lg text-zinc-900 font-medium">
            {item.question}
          </DialogDescription>
          <DialogFooter>
            <RadioGroup className="w-full">
              {item.options.map((option) => (
                <Answer key={option} option={option} />
              ))}
            </RadioGroup>

            <div>
              <button
                className="font-medium w-full py-2 text-white bg-purple-800 rounded-lg hover:bg-purple-600"
                onClick={() => {}}
              >
                Voltar
              </button>
              <button
                className="font-medium w-full py-2 text-white bg-purple-800 rounded-lg hover:bg-purple-600"
                onClick={() => {}}
              >
                {index === data.length - 1 ? 'Finalizar' : 'Próxima'}
              </button>
            </div>
          </DialogFooter>
        </>
      ))}
    </>
  )
}
