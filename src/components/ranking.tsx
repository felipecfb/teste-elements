import { getRankingWithScore } from '@/api/get-ranking-with-score'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { useQuery } from '@tanstack/react-query'

export function Ranking() {
  const { data } = useQuery({
    queryKey: ['quizRanking'],
    queryFn: getRankingWithScore,
  })

  const dataFormattedWithThreeFirsts = data?.slice(0, 3)

  return (
    <div>
      <Table>
        <TableCaption>Ranking do Quiz</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[20px]">Posição</TableHead>
            <TableHead className="w-full">Nome</TableHead>
            <TableHead className="w-[20px]">Score</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {dataFormattedWithThreeFirsts &&
            dataFormattedWithThreeFirsts.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium w-[20px] text-center">
                  {index + 1}
                </TableCell>
                <TableCell className="w-full">{item.name}</TableCell>
                <TableCell className="w-[20px] text-center">
                  {item.score}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  )
}
