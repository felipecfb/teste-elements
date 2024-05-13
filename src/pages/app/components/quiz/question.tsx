import { Answer } from './answer'
import { useQuiz } from '@/hooks/use-quiz'
import { QuestionFooter } from './question-footer'
import { formatSecondsToMinute } from '@/utils/format-seconds-to-minute'
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
} from '@/components/ui/dialog'
import { RadioGroup } from '@/components/ui/radio-group'

export function Question() {
  const { quizState, checkAnswer } = useQuiz()

  const currentQuestion = quizState.questions[quizState.currentQuestion]

  function handleSelectAnswer(option: string) {
    checkAnswer(option)
  }

  return (
    <>
      <DialogHeader className="flex flex-row items-center justify-between">
        <p className="text-2xl text-zinc-900 font-medium">
          Questão{' '}
          {quizState.currentQuestion < 9
            ? `0${quizState.currentQuestion + 1}`
            : quizState.currentQuestion + 1}
        </p>

        <p className="text-lg text-zinc-900 font-medium">
          {formatSecondsToMinute(quizState.timer)}
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
    </>
  )
}
