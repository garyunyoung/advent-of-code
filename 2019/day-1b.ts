import * as fs from 'fs'

const data = fs.readFileSync('inputs/day-1.txt', {
  encoding: 'utf8',
  flag: 'r'
})

const arr = data
  .trim()
  .split('\n')
  .map(str => Number(str))

function calcTotalFuel(modules: number[]): number {
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

console.log(calcTotalFuel(arr))
