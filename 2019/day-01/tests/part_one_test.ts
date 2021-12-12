import totalFuel from '../part_one'

const testData: number[] = [12]

describe('totalFuel', () => {
  it('Calculates total fuel', () => {
    let result = totalFuel(testData)

    expect(result).toBe(2)
  })
})
