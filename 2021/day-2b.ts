import getData from '../utilities'

// Data
const data = getData('day-2')

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
  .map(([instruction, movement]) => [
    instruction,
    Number(movement)
  ])

// Solution
function finalPosition(
  instructions: [string, number][]
): number {
  let horizontal = 0
  let depth = 0
  let aim = 0

  for (let [instruction, movement] of instructions) {
    switch (instruction) {
      case 'forward':
        horizontal += movement
        depth += aim * movement
        break
      case 'up':
        aim -= movement
        break
      case 'down':
        aim += movement
        break
      default:
        break
    }
  }

  return horizontal * depth
}

console.log('Answer:', finalPosition(transformedData))
