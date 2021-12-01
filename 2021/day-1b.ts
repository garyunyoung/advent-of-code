import getData from '../utilities'

// Data
const data = getData('day-1')

const _testData: number[] = [
  199, 200, 208, 210, 200, 207, 240, 269, 260, 263
]

const transformedData: number[] = data
  .trim()
  .split('\n')
  .map((str) => Number(str))

// Part Two
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

    if (firstWindow < secondWindow) {
      ++count
    }
  }

  return count
}

// Part Two - alternative solution
function countIncrementsAlternative(
  measurements: number[]
): number {
  let count: number = 0

  for (let i = 0; i < measurements.length - 2; i++) {
    if (measurements[i] < measurements[i + 3]) {
      ++count
    }
  }

  return count
}

console.log('PART TWO:', countIncrements(transformedData))
