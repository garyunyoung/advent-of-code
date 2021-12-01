import * as fs from 'fs'

// PART TWO
function countIncrements(measurements: number[]): number {
  let count: number = 0

  for (let i = 0; i < measurements.length - 2; i++) {
    let firstWindow: number =
      measurements[i + 0] +
      measurements[i + 1] +
      measurements[i + 2]

    let secondWindow: number =
      measurements[i + 1] +
      measurements[i + 2] +
      measurements[i + 3]

    if (secondWindow > firstWindow) {
      ++count
    }
  }

  return count
}

const data = fs.readFileSync('inputs/day-1.txt', {
  encoding: 'utf8',
  flag: 'r'
})

const _testData: number[] = [
  199, 200, 208, 210, 200, 207, 240, 269, 260, 263
]

const transformedData: number[] = data
  .trim()
  .split('\n')
  .map((str) => Number(str))

console.log('PART TWO:', countIncrements(transformedData))
