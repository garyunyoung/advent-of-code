import getData from '../../utilities'

// Data
const data = getData()

const _testData: number[] = [
  199, 200, 208, 210, 200, 207, 240, 269, 260, 263
]

const transformedData: number[] = data
  .trim()
  .split('\n')
  .map((str) => Number(str))

// Solution
function countIncrements(measurements: number[]): number {
  let count: number = 0

  for (let i = 0; i < measurements.length - 1; i++) {
    if (measurements[i + 1] > measurements[i]) {
      ++count
    }
  }

  return count
}

console.log('Answer:', countIncrements(transformedData))
