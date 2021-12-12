import getData from '../../utilities'

if (!module.parent) {
  const transformedData: number[] = getData()
    .trim()
    .split('\n')
    .map((str) => Number(str))

  console.log('Answer:', countIncrements(transformedData))
}

export default function countIncrements(
  measurements: number[]
): number {
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

// Alternative solution
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
