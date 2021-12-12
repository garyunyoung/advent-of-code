import countValidPasswords from '../part_one'

const testData: [number[], string, string][] = [
  [[1, 3], 'a', 'abcde'],
  [[1, 3], 'b', 'cdefg'],
  [[2, 9], 'c', 'ccccccccc']
]

describe('countValidPasswords', () => {
  it('Calulates amount of valid passports', () => {
    let result = countValidPasswords(testData)

    expect(result).toBe(2)
  })
})
