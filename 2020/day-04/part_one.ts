import getData from '../../utilities'

if (!module.parent) {
  const transformedData: string[] = getData()
    .trim()
    .split('\n\n')

  console.log(transformedData)

  const requiredFields: string[] = [
    'byr',
    'iyr',
    'eyr',
    'hgt',
    'hcl',
    'ecl',
    'pid'
  ]

  console.log(
    'Answer:',
    countValidPassports(
      allPassportsFieldCodes(transformedData),
      requiredFields
    )
  )
}

function allPassportsFieldCodes(
  transformedData: string[]
): [string, string][] {
  return transformedData.map((entry: string) =>
    getFieldCodes(entry)
  )
}

function getFieldCodes(str: string): [string, string] {
  const entry = str.split(/\s/)
  let allPassportsFieldCodes: [string, string] = ['', '']

  for (const part of entry) {
    const [code, _] = part.split(':')
    allPassportsFieldCodes.push(code)
  }

  return allPassportsFieldCodes
}

function countValidPassports(
  allPassportsFieldCodes: [string, string][],
  requiredFields: string[]
): number {
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

export { allPassportsFieldCodes, countValidPassports }
