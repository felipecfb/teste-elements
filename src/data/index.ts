interface DataProps {
  question: string
  options: string[]
  answer: string
}

export const data: DataProps[] = [
  {
    question: 'What is the capital of France?',
    options: ['Madrid', 'Rome', 'Paris', 'Lisbon'],
    answer: 'Paris',
  },
]
