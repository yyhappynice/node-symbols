const chalk = require('chalk')
const figures = require('figures')

function symbols(bol, col, style) {
  let color = col || 'blue'
  let cont = figures[bol] || bol
  return style ? chalk[color][style](cont) : chalk[color](cont)
}

module.exports = symbols