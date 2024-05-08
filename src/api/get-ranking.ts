import { api } from '@/lib/axios'

export async function getRanking() {
  const ranking = await api.get('/ranking')

  return ranking.data
}
