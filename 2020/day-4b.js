const fs = require('fs')

// PART TWO
function readEntries() {
  const data = fs.readFileSync('day-4-input.txt',
    { encoding: 'utf8', flag: 'r' })

  return data
    .trim()
    .split('\n\n')
}

function parseEntry(str) {
  const entry = str.split(/\s/)
  let obj = {}

  for (const part of entry) {
    const [code, value] = part.split(':')
    obj[code] = value
  }

  return obj
}

const entries = readEntries()
const parsedParsports = entries.map(entry => parseEntry(entry))

// PART TWO
function countValidPassports(parsedParsports) {
  let validPassportCount = 0

  for (let passport of parsedParsports) {
    const isValid = validatePassports(passport)
    if (isValid) {
      ++validPassportCount
    }
  }

  return validPassportCount
}

function validatePassports(data) {
  return validBirthYear(data) &&
    validIssueYear(data) &&
    valiedExpirationYear(data) &&
    validHeight(data) &&
    validHairColour(data) &&
    validEyeColour(data) &&
    validPassportID(data)
}

// VALIDATIONS
function validRange(str, min, max) {
  if (str === undefined) {
    return false
  }

  const val = Number(str)
  return min <= val && val <= max
}

function validBirthYear(data) {
  return validRange(data.byr, 1920, 2002)
}

function validIssueYear(data) {
  return validRange(data.iyr, 2010, 2020)
}

function valiedExpirationYear(data) {
  return validRange(data.eyr, 2020, 2030)
}

function validHeight(data) {
  if (data.hgt === undefined) {
    return false
  }

  const unit = data.hgt.slice(-2)
  const val = parseInt(data.hgt)

  if (unit === 'cm') {
    return 150 <= val && val <= 193
  } else if (unit === 'in') {
    return 59 <= val && val <= 76
  } else {
    return false
  }
}

function validHairColour(data) {
  if (data.hcl === undefined) {
    return false
  }

  let regex = /^#([0-9a-f]{6})$/
  return data.hcl.match(regex) !== null
}

function validEyeColour(data) {
  if (data.ecl === undefined) {
    return false
  }

  const colours = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth']
  return colours.includes(data.ecl)
}

function validPassportID(data) {
  if (data.pid === undefined) {
    return false
  }

  return data.pid.length === 9
}

console.log('PART TWO:', countValidPassports(parsedParsports))