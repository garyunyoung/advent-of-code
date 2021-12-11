import * as fs from 'fs'

export default function getData() {
  return fs.readFileSync('input.txt', {
    encoding: 'utf8',
    flag: 'r'
  })
}
