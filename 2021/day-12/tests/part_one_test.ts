import sumOfCavePaths from '../part_one'

const singleTestData = [
  ['start', 'A'],
  ['A', 'end']
]
// start, A, end

const doubleTestData = [
  ['start', 'A'],
  ['A', 'b'],
  ['A', 'end']
]

// start, A, end
// start, A, b, A, end

const smallTestData = [
  ['start', 'A'],
  ['start, b'],
  ['A', 'end'],
  ['b', 'end']
]

const bigTestData = [
  'start-A',
  'start-b',
  'A-c',
  'A-b',
  'b-d',
  'A-end',
  'b-end'
]

describe('sumOfCavePaths', () => {
  xit('sumOfCavePaths', () => {
    let result = sumOfCavePaths(singleTestData)

    expect(result).toBe(1)
  })

  xit('sumOfCavePaths', () => {
    let result = sumOfCavePaths(doubleTestData)

    expect(result).toBe(2)
  })

  xit('sumOfCavePaths', () => {
    let result = sumOfCavePaths(smallTestData)

    expect(result).toBe(2)
  })

  xit('sumOfCavePaths', () => {
    let result = sumOfCavePaths(bigTestData)

    expect(result).toBe(10)
  })
})
