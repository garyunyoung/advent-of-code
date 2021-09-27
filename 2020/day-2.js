const fs = require('fs')
const data = fs.readFileSync('day-2-input.txt',
  { encoding: 'utf8', flag: 'r' })

// PART ONE
function countValidPasswords(arr) {
  let validPasswordCount = 0

  for (const [[min, max], requiredChar, password] of arr) {
    let requiredCharCount = 0 

    for (const char of password) {
      if (char === requiredChar) {
        ++requiredCharCount
      }
    }

    if (requiredCharCount >= min && 
        requiredCharCount <= max) {
        ++validPasswordCount
    }
  }

  return validPasswordCount
}

// Regex version
function countValidPasswordsUsingRegex(arr) {
  let validPasswordCount = 0

  for (const [[min, max], requiredChar, password] of arr) {
    const regex = new RegExp(requiredChar, 'g')
    const requiredCharCount = (password.match(regex) || []).length

    if (requiredCharCount >= min && 
        requiredCharCount <= max) {
        ++validPasswordCount
    }
  }

  return validPasswordCount
}

// PART TWO
function recountValidPasswords() {
  let validPasswordCount = 0

  for (let [[i, j], requiredChar, password] of arr) {
    i = i - 1
    j = j - 1

    if (password[i] === requiredChar &&
      password[j] !== requiredChar) {
      ++validPasswordCount
    }

    if (password[j] === requiredChar &&
      password[i] !== requiredChar) {
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

console.log('PART ONE:', countValidPasswords(arr))
console.log('PART TWO', recountValidPasswords(arr))