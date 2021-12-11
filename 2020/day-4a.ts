import getData from '../utilities'

// Data
const data = getData('day-4')
const transformedData: string[] = data.trim().split('\n\n')

const entries = transformedData
const allPassportsFieldCodes = entries.map((entry) =>
  getFieldCodes(entry)
)
const requiredFields = [
  'byr',
  'iyr',
  'eyr',
  'hgt',
  'hcl',
  'ecl',
  'pid'
]

function getFieldCodes(str: string) {
  const entry = str.split(/\s/)
  let allPassportsFieldCodes: [string, string] = ['', '']

  for (const part of entry) {
    const [code, _] = part.split(':')
    allPassportsFieldCodes.push(code)
  }

  return allPassportsFieldCodes
}

// Solution
function countValidPassports(
  allPassportsFieldCodes: [string, string][],
  requiredFields: string[]
) {
  let validPassportCount = 0

  for (let passportFieldCodes of allPassportsFieldCodes) {
    if (
      requiredFields.every((code) =>
        passportFieldCodes.includes(code)
      )
    ) {
      ++validPassportCount
    }
  }

  return validPassportCount
}

console.log(
  'Answer:',
  countValidPassports(
    allPassportsFieldCodes,
    requiredFields
  )
)
