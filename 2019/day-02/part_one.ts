import getData from '../../utilities'

if (!module.parent) {
  const transformedData: number[] = getData()
    .trim()
    .split(',')
    .map((str: string) => Number(str))

  console.log(calcProgram(transformedData))
}

export default function calcProgram(
  data: number[]
): number {
  let dataCopy: number[] = data

  dataCopy[1] = 12
  dataCopy[2] = 2

  let i: number = 0

  while (dataCopy[i] !== 99) {
    const pos1: number = dataCopy[i]
    const pos2: number = dataCopy[i + 1]
    const pos3: number = dataCopy[i + 2]
    const pos4: number = dataCopy[i + 3]

    if (pos1 === 1) {
      dataCopy[pos4] = dataCopy[pos2] + dataCopy[pos3]
    }

    if (pos1 === 2) {
      dataCopy[pos4] = dataCopy[pos2] * dataCopy[pos3]
    }

    i += 4
  }

  return dataCopy[0]
}
