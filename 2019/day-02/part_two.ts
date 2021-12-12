import getData from '../../utilities'

if (!module.parent) {
  const transformedData: number[] = getData()
    .trim()
    .split(',')
    .map((str: string) => Number(str))

  console.log(getOutput(transformedData, 12, 2))
  console.log(findNounAndVerb(transformedData, 19690720))
}

function getOutput(
  data: number[],
  noun: number,
  verb: number
): number {
  let dataCopy: number[] = Array.from(data)

  dataCopy[1] = noun
  dataCopy[2] = verb

  let i: number = 0

  while (dataCopy[i] !== 99) {
    const instruction: number = dataCopy[i]
    const pos2: number = dataCopy[i + 1]
    const pos3: number = dataCopy[i + 2]
    const pos4: number = dataCopy[i + 3]

    if (instruction === 1) {
      dataCopy[pos4] = dataCopy[pos2] + dataCopy[pos3]
    }

    if (instruction === 2) {
      dataCopy[pos4] = dataCopy[pos2] * dataCopy[pos3]
    }

    i += 4
  }

  return dataCopy[0]
}

function findNounAndVerb(
  arr: number[],
  target: number
): number | string {
  for (let noun: number = 0; noun < 100; noun++) {
    for (let verb: number = 0; verb < 100; verb++) {
      if (getOutput(arr, noun, verb) === target) {
        return 100 * noun + verb
      }
    }
  }
  return 'sorry no match'
}

export default { getOutput, findNounAndVerb }
