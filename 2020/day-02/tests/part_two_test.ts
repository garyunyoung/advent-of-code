import recountValidPasswords from '../part_two'

const testData: [number[], string, string][] = [
  [[1, 3], 'a', 'abcde'],
  [[1, 3], 'b', 'cdefg'],
  [[2, 9], 'c', 'ccccccccc']
]

describe('recountValidPasswords', () => {
  it('Calulates amount of valid passports', () => {
    let result = recountValidPasswords(testData)

    expect(result).toBe(1)
  })
})
