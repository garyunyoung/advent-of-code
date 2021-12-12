import countTreesEncountered from '../part_one'

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

describe('countTreesEncountered', () => {
  it('Calulates trees encountered', () => {
    let result = countTreesEncountered(testData, 1, 3)

    expect(result).toBe(7)
  })
})
