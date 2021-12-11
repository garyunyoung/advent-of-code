import getData from '../../utilities'

// Data
const data = getData()

const transformedData: number[] = data
  .trim()
  .split('\n')
  .map((str: string) => Number(str))

function totalFuel(modules: number[]): number {
  let sum = 0

  for (let module of modules) {
    let fuel: number = Math.floor(module / 3) - 2
    sum += fuel
  }

  return sum
}

console.log(totalFuel(transformedData))
