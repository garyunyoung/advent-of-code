import getData from '../../utilities'
import countTreesEncountered from './day-3a'

// Data
const data = getData()

const transformedData: string[] = data.trim().split('\n')

// Solution
function sumAllTreesEncountered(
  arr: string[],
  moves: number[][]
) {
  let treeCount = 1

  for (const [down, right] of moves) {
    treeCount *= countTreesEncountered(arr, down, right)
  }

  return treeCount
}

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
