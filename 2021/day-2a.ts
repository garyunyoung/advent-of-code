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

  instructions.forEach(([instruction, movement]) => {
    switch (instruction) {
      case 'forward':
        horizontal += movement
        break
      case 'up':
        depth -= movement
        break
      case 'down':
        depth += movement
        break
      default:
        break
    }
  })

  return horizontal * depth
}

console.log('Answer:', finalPosition(transformedData))
