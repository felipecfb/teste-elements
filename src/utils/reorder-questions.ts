import { DataProps } from '@/data/questions'

export function ReorderQuestions(data: DataProps[]) {
  const reorderedData = data.sort(() => Math.random() - 0.5)

  return reorderedData
}
