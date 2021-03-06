import finalScore from '../part_one'

const testData = [
  [
    7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16, 13, 6,
    15, 25, 12, 22, 18, 20, 8, 19, 3, 26, 1
  ],
  [
    [14, 21, 17, 24, 4],
    [10, 16, 15, 9, 19],
    [18, 8, 23, 26, 20],
    [22, 11, 13, 6, 5],
    [2, 0, 12, 3, 7]
  ],
  [
    [3, 15, 0, 2, 22],
    [9, 18, 13, 17, 5],
    [19, 8, 7, 25, 23],
    [20, 11, 19, 24, 4],
    [14, 21, 16, 12, 6]
  ]
]

describe('finalScore', () => {
  it('Calculates the final Bingo score', () => {
    let result = finalScore(testData)

    expect(result).toBe(4512)
  })
})
