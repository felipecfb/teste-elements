import { newRaking } from '@/api/new-ranking'

type Rank = {
  name: string
  score: number
}

export async function sendDataToFakeDB(data: Rank) {
  await newRaking(data.name, data.score)
}
