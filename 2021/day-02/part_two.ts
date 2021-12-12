import getData from '../../utilities'

if (!module.parent) {
  const transformedData: [string, number][] = getData()
    .trim()
    .split('\n')
    .map((instructions) => instructions.split(' '))
    .map(([direction, amount]) => [
      direction,
      Number(amount)
    ])

  console.log('Answer:', finalPosition(transformedData))
}

export default function finalPosition(
  instructions: [string, number][]
): number {
  let horizontal = 0
  let depth = 0
  let aim = 0

  for (let [direction, amount] of instructions) {
    switch (direction) {
      case 'forward':
        horizontal += amount
        depth += aim * amount
        break
      case 'up':
        aim -= amount
        break
      case 'down':
        aim += amount
        break
      default:
        break
    }
  }

  return horizontal * depth
}
