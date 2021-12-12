import sumAllTreesEncountered from '../part_two'

const testData: string[] = [
  '..##.......',
  '#...#...#..',
  '.#....#..#.',
  '..#.#...#.#',
  '.#...##..#.',
  '..#.##.....',
  '.#.#.#....#',
  '.#........#',
  '#.##...#...',
  '#...##....#',
  '.#..#...#.#'
]

const moves = [
  [1, 1],
  [1, 3],
  [1, 5],
  [1, 7],
  [2, 1]
]

describe('sumAllTreesEncountered', () => {
  it('Calulates sum of trees encountered', () => {
    let result = sumAllTreesEncountered(testData, moves)

    expect(result).toBe(336)
  })
})
