import countIncrements from '../part_two'

const testData: number[] = [
  199, 200, 208, 210, 200, 207, 240, 269, 260, 263
]

describe('countIncrements', () => {
  it('Calculates increments', () => {
    let result = countIncrements(testData)

    expect(result).toBe(5)
  })
})
