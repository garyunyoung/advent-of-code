import powerConsumption from '../part_one'

const testData = [
  '00100',
  '11110',
  '10110',
  '10111',
  '10101',
  '01111',
  '00111',
  '11100',
  '10000',
  '11001',
  '00010',
  '01010'
]

describe('powerConsumption', () => {
  it('Calculates the power consumtion', () => {
    let result = powerConsumption(testData)

    expect(result).toBe(198)
  })
})
