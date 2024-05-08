import { api } from '@/lib/axios'

export async function newRaking(name: string, score: number) {
  await api.post('/ranking', { name, score })
}
