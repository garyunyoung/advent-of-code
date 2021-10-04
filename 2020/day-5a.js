const fs = require('fs')

function readData() {
  const data = fs.readFileSync('day-5-input.txt',
    { encoding: 'utf8', flag: 'r' })

  return data
    .trim()
}


console.log(readData())