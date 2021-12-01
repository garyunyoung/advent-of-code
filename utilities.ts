import * as fs from 'fs'

export default function getData(fileName: string) {
  const path = `inputs/${fileName}.txt`

  return fs.readFileSync(path, {
    encoding: 'utf8',
    flag: 'r'
  })
}
