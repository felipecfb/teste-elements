import { api } from '@/lib/axios'

export type getRakingWithScoreResponse = {
  name: string
  score: number
}[]

export async function getRankingWithScore() {
  const ranking = await api.get<getRakingWithScoreResponse>('/ranking')

  const sortedRanking = ranking.data.slice().sort((a, b) => b.score - a.score)

  return sortedRanking
}
