import getData from '../utilities'

// Data

// Preconditions
// - Numbers are same lengths

const transformedData = getData('day-3').trim().split('\n')

const _testData = [
  '00100',
  '11110',
  '10110',
  '10111',
  '10101',
  '01111',
  '00111',
  '11100',
  '10000',
  '11001',
  '00010',
  '01010'
]

// Solution
function powerConsumption(data: string[]): number {
  let tally: number[] = new Array(data[0].length).fill(0)

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
      data[i][j] === '1' ? ++tally[j] : --tally[j]
    }
  }

  const gammaRate: string = tally
    .map((num) => (num <= 0 ? 0 : 1))
    .join('')

  const epsilonRate: string = tally
    .map((num) => (num <= 0 ? 1 : 0))
    .join('')

  const powerConsumption: number =
    parseInt(gammaRate, 2) * parseInt(epsilonRate, 2)

  return powerConsumption
}

console.log('Answer:', powerConsumption(transformedData))
