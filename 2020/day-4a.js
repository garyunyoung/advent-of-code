const fs = require('fs')

const entries = readEntries()
const allPassportsFieldCodes = entries.map(entry => getFieldCodes(entry))

const requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']

function countValidPassports(allPassportsFieldCodes, requiredFields) {
  let validPassportCount = 0

  for (let passportFieldCodes of allPassportsFieldCodes) {
    if (requiredFields.every(code => passportFieldCodes.includes(code))) {
      ++validPassportCount
    }
  }

  return validPassportCount
}

function readEntries() {
  const data = fs.readFileSync('day-4-input.txt',
    { encoding: 'utf8', flag: 'r' })

  return data
    .trim()
    .split('\n\n')
}

function getFieldCodes(str) {
  const entry = str.split(/\s/)
  let allPassportsFieldCodes = []

  for (const part of entry) {
    const [code, _] = part.split(':')
    allPassportsFieldCodes.push(code)
  }

  return allPassportsFieldCodes
}

console.log('PART ONE:', countValidPassports(allPassportsFieldCodes, requiredFields))