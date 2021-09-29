const fs = require('fs')
const data = fs.readFileSync('day-2-input.txt',
  { encoding: 'utf8', flag: 'r' })

// PART TWO
function recountValidPasswords() {
  let validPasswordCount = 0

  for (let [[i, j], requiredChar, password] of arr) {
    i = i - 1
    j = j - 1

    const isAtPos1 = password[i] === requiredChar 
    const isAtPos2 = password[j] === requiredChar 

    if (isAtPos1 && !isAtPos2 || 
        isAtPos2 && !isAtPos1) {
        ++validPasswordCount
    }
  }

  return validPasswordCount
}

const arr = data
  .trim()
  .split('\n')
  .map(entry => {
    let [values, requiredChar, _password] = entry.split(' ')

    values = values
      .split('-')
      .map(value => Number(value))

    requiredChar = requiredChar[0]

    return [values, requiredChar, _password]
  })

console.log('PART TWO', recountValidPasswords(arr))