import getData from '../../utilities'

if (!module.parent) {
  const transformedData: number[] = getData()
    .trim()
    .split('\n')
    .map((str: string) => Number(str))

  console.log('Answer', getTwoSums(transformedData, 2020))
}

export default function getTwoSums(
  arr: number[],
  value: number
) {
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
