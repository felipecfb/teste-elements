import { api } from '@/lib/axios'
import { getRakingWithScoreResponse } from './get-ranking-with-score'

export async function newRaking(name: string, score: number) {
  const { data } = await api.get<getRakingWithScoreResponse>('/ranking')

  const rankingWithSameName = data.find((ranking) => ranking.name === name)

  if (rankingWithSameName && rankingWithSameName.score < score) {
    await api.put(`/ranking/${rankingWithSameName.id}`, {
      ...rankingWithSameName,
      score,
    })
  }

  if (!rankingWithSameName) {
    await api.post('/ranking', { name, score })
  }
}
