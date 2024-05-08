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
  const { data: rankingOrderWithScore } = useQuery({
    queryKey: ['quizRanking'],
    queryFn: getRankingWithScore,
  })

  const rankingFormattedWithThreeFirsts = rankingOrderWithScore?.slice(0, 3)

  return (
    <div>
      <Table>
        <TableCaption>Maiores pontuações</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[20px]">Posição</TableHead>
            <TableHead className="w-full">Nome</TableHead>
            <TableHead className="w-[20px]">Score</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rankingFormattedWithThreeFirsts &&
          rankingFormattedWithThreeFirsts.length > 0 ? (
            rankingFormattedWithThreeFirsts!.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium w-[20px] text-center">
                  {index + 1}
                </TableCell>
                <TableCell className="w-full">{item.name}</TableCell>
                <TableCell className="w-[20px] text-center">
                  {item.score}
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={3} className="text-center">
                Jogue para aparecer no ranking!
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
