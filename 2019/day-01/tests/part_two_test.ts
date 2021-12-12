import calcTotalFuel from '../part_two'

const testData: number[] = [100756]

describe('calcTotalFuel', () => {
  it('Calculates total fuel', () => {
    let result = calcTotalFuel(testData)

    expect(result).toBe(50346)
  })
})
