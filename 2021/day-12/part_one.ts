import getData from '../../utilities'

if (!module.parent) {
  const cavesData: string[] = getData()
    .trim()
    .split('\n')
    .map((str: string) => str.split('-'))
    .flat()

  const pathsData: string[][] = getData()
    .trim()
    .split('\n')
    .map((str: string) => str.split('-'))

  const caves: string[] = [...new Set(cavesData)]
  const paths: number[][] = Array.from(
    Array(caves.length),
    () => []
  )

  for (let [a, b] of pathsData) {
    let aIndex: number = caves.indexOf(a)
    let bIndex: number = caves.indexOf(b)

    paths[aIndex].push(bIndex)
    paths[bIndex].push(aIndex)
  }

  console.log(sumOfCavePaths(caves, paths))
}

export default function sumOfCavePaths(
  caves: string[],
  paths: number[][]
) {
  return paths
}
