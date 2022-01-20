import getData from '../../utilities'

// Preconditions: numbers are same lengths

if (!module.parent) {
  const [drawData, ...boardsData] = getData()
    .trim()
    .split('\n\n')

  const transformedDrawData = drawData
    .split(',')
    .map((str: string) => Number(str))

  const transformedBoardsData = boardsData.map((str) =>
    str
      .split('\n')
      .map((innerStr) =>
        innerStr
          .split(/\s+/)
          .map((str: string) => Number(str))
      )
  )

  console.log(
    'Answer:',
    finalScore(transformedDrawData, transformedBoardsData)
  )
}

export default function finalScore(
  draw: number[],
  boards: number[][][]
) {
  let currDraw = draw.splice(0, 4)
  let bingoBoard

  for (let i = 0; i < draw.length; i++) {
    currDraw.push(draw[i])

    if (getBingoBoard(boards, currDraw)) {
      bingoBoard = getBingoBoard(boards, currDraw)
      break
    }
  }

  return getScore(bingoBoard, currDraw)
}

function getBingoBoard(boards: any, currDraw: number[]) {
  for (const board of boards) {
    for (let i = 0; i < board.length; i++) {
      const row = board[i]
      let column = []

      for (let j = 0; j < board.length; j++) {
        column.push(board[j][i])
      }

      if (
        isBingo(row, currDraw) ||
        isBingo(column, currDraw)
      ) {
        return board
      }
    }
  }
}

function isBingo(
  rowOrColumn: number[],
  currDraw: number[]
): boolean {
  return rowOrColumn.every((num) => currDraw.includes(num))
}

function getScore(
  bingoBoard: number[][],
  currDraw: number[]
) {
  let score = 0

  let flattenedBingoBoard = bingoBoard.reduce(
    (acc, curr) => acc.concat(curr),
    []
  )

  for (let boardNumber of flattenedBingoBoard) {
    if (!currDraw.includes(boardNumber)) {
      score += boardNumber
    }
  }

  return score * currDraw[currDraw.length - 1]
}
