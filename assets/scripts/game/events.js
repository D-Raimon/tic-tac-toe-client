'use strict'

// const api = require('./api')
// const ui = require('./ui')

const onPlayerMove = (event) => {
  event.preventDefault()
  console.log(event.target)
  // $('').text('X')
}

module.exports = {
  onPlayerMove
}
