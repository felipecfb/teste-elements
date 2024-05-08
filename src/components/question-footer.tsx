import { useQuiz } from '@/hooks/use-quiz'

export function QuestionFooter() {
  const {
    quizState,
    backToInitial,
    nextQuestion,
    previousQuestion,
    isAtFirstQuestion,
    isAtLastQuestion,
  } = useQuiz()

  function handleBackToInitial() {
    backToInitial()
  }

  function handleNextQuestion() {
    nextQuestion()
  }

  function handlePreviousQuestion() {
    previousQuestion()
  }

  return (
    <div className="w-full flex items-center gap-2 justify-end">
      <button
        className="w-max font-medium py-2 px-4 text-white bg-zinc-600 rounded-sm hover:bg-zinc-400"
        onClick={
          isAtFirstQuestion ? handleBackToInitial : handlePreviousQuestion
        }
      >
        {isAtFirstQuestion ? 'Cancelar' : 'Voltar'}
      </button>
      <button
        onClick={isAtLastQuestion ? handleBackToInitial : handleNextQuestion}
        className={`w-max font-medium py-2 px-4 text-white rounded-sm
          ${!quizState.answerSelected && 'cursor-not-allowed opacity-50'}
          ${
            isAtLastQuestion
              ? 'bg-green-600 hover:bg-green-400'
              : 'bg-purple-600 hover:bg-purple-400'
          }`}
        disabled={!quizState.answerSelected}
      >
        {isAtLastQuestion ? 'Finalizar' : 'Próxima'}
      </button>
    </div>
  )
}
