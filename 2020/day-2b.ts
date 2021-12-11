import getData from '../utilities'

// Data
const data = getData('day-2')

const transformedData: [number[], string, string][] = data
  .trim()
  .split('\n')
  .map((entry) => {
    let [values, requiredChar, _password] = entry.split(' ')

    requiredChar = requiredChar[0]

    const transformedValues = values
      .split('-')
      .map((value) => Number(value))

    return [transformedValues, requiredChar, _password]
  })

// Solution
function recountValidPasswords(
  arr: [number[], string, string][]
) {
  let validPasswordCount = 0

  for (let [[i, j], requiredChar, password] of arr) {
    i = i - 1
    j = j - 1

    const isAtPos1 = password[i] === requiredChar
    const isAtPos2 = password[j] === requiredChar

    if (
      (isAtPos1 && !isAtPos2) ||
      (isAtPos2 && !isAtPos1)
    ) {
      ++validPasswordCount
    }
  }

  return validPasswordCount
}

console.log(
  'Answer',
  recountValidPasswords(transformedData)
)
