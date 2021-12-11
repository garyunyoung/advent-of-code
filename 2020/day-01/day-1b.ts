import getData from '../../utilities'

// Data
const data = getData()

const transformedData: number[] = data
  .trim()
  .split('\n')
  .map((str: string) => Number(str))

// Solution
function getThreeSums(arr: number[], value: number) {
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

console.log('Answer:', getThreeSums(transformedData, 2020))
