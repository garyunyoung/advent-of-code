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

const arr = data
  .trim()
  .split('\n')

console.log('PART ONE:', countTreesEncountered(arr, 1, 3))