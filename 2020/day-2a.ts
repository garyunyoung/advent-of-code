import getData from '../utilities'

// Data
const data = getData('day-2')

const transformedData: [number[], string, string][] = data
  .trim()
  .split('\n')
  .map((entry) => {
    let [values, requiredChar, _password] = entry.split(' ')

    const transformedValues = values
      .split('-')
      .map((value) => Number(value))

    requiredChar = requiredChar[0]
    console.log([
      transformedValues,
      requiredChar,
      _password
    ])

    return [transformedValues, requiredChar, _password]
  })

// Solution
function countValidPasswords(
  arr: [number[], string, string][]
) {
  let validPasswordCount = 0

  for (const [[min, max], requiredChar, password] of arr) {
    let requiredCharCount = 0

    for (const char of password) {
      if (char === requiredChar) {
        ++requiredCharCount
      }
    }

    if (
      requiredCharCount >= min &&
      requiredCharCount <= max
    ) {
      ++validPasswordCount
    }
  }

  return validPasswordCount
}

// Alternative Solution - Regex
function countValidPasswordsUsingRegex(
  arr: [number[], string, string][]
) {
  let validPasswordCount = 0

  for (const [[min, max], requiredChar, password] of arr) {
    const regex = new RegExp(requiredChar, 'g')
    const requiredCharCount = (password.match(regex) || [])
      .length

    if (
      requiredCharCount >= min &&
      requiredCharCount <= max
    ) {
      ++validPasswordCount
    }
  }

  return validPasswordCount
}

console.log('Answer:', countValidPasswords(transformedData))