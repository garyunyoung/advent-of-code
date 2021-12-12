import getData from '../../utilities'

if (!module.parent) {
  const transformedData: string[] = getData()
    .trim()
    .split('\n')

  console.log(
    'Answer:',
    countTreesEncountered(transformedData, 1, 3)
  )
}

export default function countTreesEncountered(
  arr: string[],
  down: number,
  right: number
) {
  const width = arr[0].length
  const height = arr.length

  let treeCount = 0
  let columnIndex = 0
  let rowIndex = 0

  while (columnIndex < height) {
    if (arr[columnIndex][rowIndex] === '#') {
      ++treeCount
    }

    rowIndex = (rowIndex + right) % width
    columnIndex += down
  }

  return treeCount
}
