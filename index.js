const chalk = require('chalk')
const bols = require('./bols.js')

function symbols(bol, col) {
  let validate = bol in bols
  let color = col || (validate ? bols[bol].color : 'blue')
  let cont = validate ? bols[bol].bol : bol
  return chalk[color](cont)
}

module.exports = symbols