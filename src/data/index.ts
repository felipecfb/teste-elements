export interface DataProps {
  question: string
  options: string[]
  answer: string
}

export const data: DataProps[] = [
  {
    question: 'Qual é uma característica importante de uma cadeira gamer?',
    options: [
      'Conforto',
      'Durabilidade',
      'Estilo',
      'Preço competitivo',
      'Compatibilidade com consoles',
    ],
    answer: 'Conforto',
  },
  {
    question: 'Por que a ergonomia é importante em uma cadeira gamer?',
    options: [
      'Para aumentar a velocidade dos jogadores',
      'Para reduzir o cansaço e prevenir lesões',
      'Para adicionar mais recursos de iluminação',
      'Para tornar a cadeira mais pesada e estável',
      'Para melhorar a conectividade sem fio',
    ],
    answer: 'Para reduzir o cansaço e prevenir lesões',
  },
  {
    question: 'Quais são os benefícios de uma cadeira ergonômica?',
    options: [
      'Postura adequada e conforto prolongado',
      'Maior desempenho em jogos de computador',
      'Preço mais baixo em comparação com outras cadeiras',
      'Estilo moderno e atrativo',
      'Compatibilidade com múltiplas plataformas',
    ],
    answer: 'Postura adequada e conforto prolongado',
  },
  {
    question:
      'Quais são os elementos importantes a considerar ao escolher uma cadeira ergonômica?',
    options: [
      'Cor e design',
      'Material e ajustabilidade',
      'Tamanho do assento e preço',
      'Marca e popularidade entre gamers',
      'Suporte lombar e cervical',
    ],
    answer: 'Material e ajustabilidade',
  },
  {
    question:
      'Qual é a diferença entre uma cadeira gamer e uma cadeira ergonômica tradicional?',
    options: [
      'As cadeiras gamer são mais baratas',
      'As cadeiras ergonômicas tradicionais não são adequadas para longas sessões de jogo',
      'As cadeiras ergonômicas tradicionais focam mais na saúde postural',
      'As cadeiras gamer não têm ajustes de altura e inclinação',
      'As cadeiras ergonômicas tradicionais oferecem mais opções de cores',
    ],
    answer: 'As cadeiras ergonômicas tradicionais focam mais na saúde postural',
  },
]
