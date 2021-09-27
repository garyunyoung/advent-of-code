const fs = require('fs')
const data = fs.readFileSync('day-3-input.txt',
  { encoding: 'utf8', flag: 'r' })

// PART ONE
function countTreesEncountered(arr, down, right) {
  const width = arr[0].length
  const height = arr.length

  let treeCount = 0
  let columnIndex = 0
  let rowIndex = 0

  while (columnIndex < height) {
    if (arr[columnIndex][rowIndex] === '#') {
      ++treeCount
    }

    rowIndex = (rowIndex + right) % width
    columnIndex += down
  }

  return treeCount
}

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