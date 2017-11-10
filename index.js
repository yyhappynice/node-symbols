const chalk = require('chalk')
const figures = require('figures')

function symbols(bol, col) {
  let color = col || 'blue'
  let cont = figures[bol]
  return chalk[color](cont)
}

module.exports = symbols