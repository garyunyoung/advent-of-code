import getData from '../../utilities'

if (!module.parent) {
  // Data
  // - Precondition: numbers are same lengths
  const data = getData()
  const transformedData = data.trim().split('\n')

  console.log('Answer:', powerConsumption(transformedData))
}

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

export default powerConsumption
