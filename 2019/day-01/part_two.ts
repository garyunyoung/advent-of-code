import getData from '../../utilities'

if (!module.parent) {
  const transformedData: number[] = getData()
    .trim()
    .split('\n')
    .map((str) => Number(str))

  console.log(calcTotalFuel(transformedData))
}

export default function calcTotalFuel(
  modules: number[]
): number {
  let sum = 0

  for (let moduleMass of modules) {
    let fuel: number = calcFuel(moduleMass)

    while (fuel > 0) {
      sum += fuel
      fuel = calcFuel(fuel)
    }
  }

  return sum
}

function calcFuel(moduleMass: number): number {
  return Math.floor(moduleMass / 3) - 2
}
