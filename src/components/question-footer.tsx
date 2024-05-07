import { useQuiz } from '@/hooks/use-quiz'

export function QuestionFooter() {
  const { quizState, backToInitial, nextQuestion, previousQuestion } = useQuiz()

  function handleBackToInitial() {
    backToInitial()
  }

  function handleNextQuestion() {
    nextQuestion()
  }

  function handlePreviousQuestion() {
    previousQuestion()
  }

  const isAtFirstQuestion = quizState.currentQuestion === 0
  const isAtLastQuestion =
    quizState.currentQuestion === quizState.questions.length - 1

  const getBackButtonText = () => (isAtFirstQuestion ? 'Cancelar' : 'Voltar')
  const getNextButtonText = () => (isAtLastQuestion ? 'Finalizar' : 'Próxima')

  const handleBackButtonAction = () =>
    isAtFirstQuestion ? handleBackToInitial() : handlePreviousQuestion()
  const handleNextButtonAction = () =>
    isAtLastQuestion ? handleBackToInitial() : handleNextQuestion()

  return (
    <div className="w-full flex items-center gap-2 justify-end">
      <button
        className="w-max font-medium py-2 px-4 text-white bg-zinc-600 rounded-sm hover:bg-zinc-400"
        onClick={handleBackButtonAction}
      >
        {getBackButtonText()}
      </button>
      <button
        onClick={handleNextButtonAction}
        className={`w-max font-medium py-2 px-4 text-white rounded-sm ${
          isAtLastQuestion
            ? 'bg-green-600 hover:bg-green-400'
            : 'bg-purple-600 hover:bg-purple-400'
        }
                `}
      >
        {getNextButtonText()}
      </button>
    </div>
  )
}
