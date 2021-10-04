
import * as fs from 'fs' 

// PART ONE 
function getTwoSums(arr, value) {
  let sum = null

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] + arr[j] === value) {
        sum = arr[i] * arr[j]
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

console.log('PART ONE:', getTwoSums(arr, 2020))
