const fs = require('fs')

// PART TWO
function getThreeSums(arr, value) {
  let sum = null

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      for (let k = j; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] === value) {
          sum = arr[i] * arr[j] * arr[k]
        }
      }
    }
  }

  return sum
}

const data = fs.readFileSync('day-1-input.txt',
  { encoding: 'utf8', flag: 'r' })

const arr = data
  .trim()
  .split('\n')
  .map(str => Number(str))

console.log('PART TWO:', getThreeSums(arr, 2020))

