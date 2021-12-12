import getData from '../../utilities'

if (!module.parent) {
  const transformedData: string[] = getData()
    .trim()
    .split('\n\n')

  const parsedParsports: string[] = transformedData.map(
    (entry: string) => parseEntry(entry)
  )

  const parseEntry = (str: string) => {
    const entry = str.split(/\s/)
    let obj: any = {}

    for (const part of entry) {
      const [code, value] = part.split(':')
      obj[code] = value
    }

    return obj
  }

  console.log(
    'Answer:',
    countValidPassports(parsedParsports)
  )
}

export default function countValidPassports(
  parsedParsports: string[]
): number {
  let validPassportCount = 0

  for (let passport of parsedParsports) {
    const isValid = validatePassports(passport)
    if (isValid) {
      ++validPassportCount
    }
  }

  return validPassportCount
}

function validatePassports(data: any): boolean {
  return (
    validBirthYear(data) &&
    validIssueYear(data) &&
    valiedExpirationYear(data) &&
    validHeight(data) &&
    validHairColour(data) &&
    validEyeColour(data) &&
    validPassportID(data)
  )
}

// Validations
function validRange(str: string, min: number, max: number) {
  if (str === undefined) {
    return false
  }

  const val = Number(str)
  return min <= val && val <= max
}

function validBirthYear(data: any) {
  return validRange(data.byr, 1920, 2002)
}

function validIssueYear(data: any) {
  return validRange(data.iyr, 2010, 2020)
}

function valiedExpirationYear(data: any) {
  return validRange(data.eyr, 2020, 2030)
}

function validHeight(data: any) {
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

function validHairColour(data: any) {
  if (data.hcl === undefined) {
    return false
  }

  let regex = /^#([0-9a-f]{6})$/
  return data.hcl.match(regex) !== null
}

function validEyeColour(data: any) {
  if (data.ecl === undefined) {
    return false
  }

  const colours = [
    'amb',
    'blu',
    'brn',
    'gry',
    'grn',
    'hzl',
    'oth'
  ]
  return colours.includes(data.ecl)
}

function validPassportID(data: any) {
  if (data.pid === undefined) {
    return false
  }

  return data.pid.length === 9
}
