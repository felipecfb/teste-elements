import { DialogContent, DialogDescription, DialogHeader } from './ui/dialog'
import { RadioGroup } from './ui/radio-group'
import { Answer } from './answer'
import { useQuiz } from '@/hooks/use-quiz'
import { QuestionFooter } from './question-footer'

export function Question() {
  const { quizState, checkAnswer } = useQuiz()

  const currentQuestion = quizState.questions[quizState.currentQuestion]

  function handleSelectAnswer(option: string) {
    checkAnswer(option)
  }

  return (
    <>
      <DialogContent key={currentQuestion.question}>
        <DialogHeader className="flex flex-row items-center justify-between">
          <p className="text-2xl text-zinc-900 font-medium">
            Questão 0{quizState.currentQuestion + 1}
          </p>

          <p className="text-lg text-zinc-900 font-medium">
            0:{quizState.timer < 10 ? `0${quizState.timer}` : quizState.timer}
          </p>
        </DialogHeader>
        <DialogDescription className="text-lg text-zinc-900 font-medium">
          {currentQuestion.question}
        </DialogDescription>
        <div className="flex flex-col items-start gap-4">
          <RadioGroup className="w-full">
            {currentQuestion.options.map((option) => (
              <Answer
                key={option}
                option={option}
                onClick={(option) => handleSelectAnswer(option)}
              />
            ))}
          </RadioGroup>

          <QuestionFooter />
        </div>
      </DialogContent>
    </>
  )
}
