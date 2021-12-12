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

  for (let i = 0; i < measurements.length - 1; i++) {
    if (measurements[i + 1] > measurements[i]) {
      ++count
    }
  }

  return count
}
