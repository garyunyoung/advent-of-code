import finalPosition from '../part_one'

const testData: [string, number][] = [
  ['forward', 5],
  ['down', 5],
  ['forward', 8],
  ['up', 3],
  ['down', 8],
  ['forward', 2]
]

describe('finalPosition', () => {
  it('Calculates the final position', () => {
    let result = finalPosition(testData)

    expect(result).toBe(150)
  })
})
