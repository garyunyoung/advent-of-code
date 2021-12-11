import getData from '../../utilities'

// Data
const data = getData()

const transformedData: number[] = data
  .trim()
  .split('\n')
  .map((str: string) => Number(str))

// Solution
function getTwoSums(arr: number[], value: number) {
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

console.log('Answer', getTwoSums(transformedData, 2020))
