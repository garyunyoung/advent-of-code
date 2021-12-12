import getData from '../../utilities'

if (!module.parent) {
  const transformedData: number[] = getData()
    .trim()
    .split('\n')
    .map((str: string) => Number(str))

  console.log(totalFuel(transformedData))
}

export default function totalFuel(
  modules: number[]
): number {
  let sum = 0

  for (let module of modules) {
    let fuel: number = Math.floor(module / 3) - 2
    sum += fuel
  }

  return sum
}
