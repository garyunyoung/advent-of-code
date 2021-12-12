import getData from '../../utilities'

if (!module.parent) {
  const data: [string, number][] = getData()
    .trim()
    .split('\n')
    .map((instructions) => instructions.split(' '))
    .map(([direction, amount]) => [
      direction,
      Number(amount)
    ])

  console.log('Answer:', finalPosition(data))
}

export default function finalPosition(
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
