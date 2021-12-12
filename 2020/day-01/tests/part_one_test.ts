import getTwoSums from '../part_one'

const testData: number[] = [1721, 979, 366, 299, 675, 1456]

describe('getTwoSums', () => {
  it('Calulates the sum', () => {
    let result = getTwoSums(testData, 2020)

    expect(result).toBe(514579)
  })
})
