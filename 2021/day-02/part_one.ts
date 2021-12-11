import getData from '../../utilities'

// Data
const data = getData()

const _testData: [string, number][] = [
  ['forward', 5],
  ['down', 5],
  ['forward', 8],
  ['up', 3],
  ['down', 8],
  ['forward', 2]
]

const transformedData: [string, number][] = data
  .trim()
  .split('\n')
  .map((instructions) => instructions.split(' '))
  .map(([direction, amount]) => [direction, Number(amount)])

// Solution
function finalPosition(
  instructions: [string, number][]
): number {
  let horizontal = 0
  let depth = 0

  for (let [direction, amount] of instructions) {
    switch (direction) {
      case 'forward':
        horizontal += amount
        break
      case 'up':
        depth -= amount
        break
      case 'down':
        depth += amount
        break
      default:
        break
    }
  }

  return horizontal * depth
}

console.log('Answer:', finalPosition(transformedData))
