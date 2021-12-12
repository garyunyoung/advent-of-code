import getData from '../../utilities'
import countTreesEncountered from './part_one'

if (!module.parent) {
  const transformedData: string[] = getData()
    .trim()
    .split('\n')

  const moves = [
    [1, 1],
    [1, 3],
    [1, 5],
    [1, 7],
    [2, 1]
  ]

  console.log(
    'Answer:',
    sumAllTreesEncountered(transformedData, moves)
  )
}

export default function sumAllTreesEncountered(
  arr: string[],
  moves: number[][]
) {
  let treeCount = 1

  for (const [down, right] of moves) {
    treeCount *= countTreesEncountered(arr, down, right)
  }

  return treeCount
}
