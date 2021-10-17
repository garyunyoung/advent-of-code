const fs = require('fs')
const data = fs.readFileSync('inputs/day-3.txt',
  { encoding: 'utf8', flag: 'r' })

// PART TWO
function sumAllTreesEncountered(arr, moves) {
  let treeCount = 1

  for (const [down, right] of moves) {
    treeCount *= countTreesEncountered(arr, down, right)
  }

  return treeCount
}

const arr = data
  .trim()
  .split('\n')

console.log('PART ONE:', countTreesEncountered(arr, 1, 3))

const moves = [
  [1, 1],
  [1, 3],
  [1, 5],
  [1, 7],
  [2, 1]
]

console.log('PART TWO:', sumAllTreesEncountered(arr, moves))