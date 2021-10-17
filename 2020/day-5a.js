const fs = require('fs')

function readData() {
  const data = fs.readFileSync('inputs/day-5.txt',
    { encoding: 'utf8', flag: 'r' })

  return data
    .trim()
}


console.log(readData())