import * as fs from 'fs'

const data = fs.readFileSync('inputs/day-1.txt', {
  encoding: 'utf8',
  flag: 'r'
})

const arr = data
  .trim()
  .split('\n')
  .map((str) => Number(str))

function totalFuel(modules: number[]): number {
  let sum = 0

  for (let module of modules) {
    let fuel: number = Math.floor(module / 3) - 2
    sum += fuel
  }

  return sum
}

console.log(totalFuel(arr))
