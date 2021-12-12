import getThreeSums from '../part_two'

const testData: number[] = [1721, 979, 366, 299, 675, 1456]

describe('getThreeSums', () => {
  it('Calulates the sum', () => {
    let result = getThreeSums(testData, 2020)

    expect(result).toBe(241861950)
  })
})
