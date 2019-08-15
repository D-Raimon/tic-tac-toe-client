'use strict'

// const api = require('./api')
// const ui = require('./ui')

const onPlayerMove = (event) => {
  event.preventDefault()
  if ($(event.target).text() === '') { // can make into a ternary later on to clean up code?
    $(event.target).text('X')
  }
  // const boardSpot = event.target
  // console.log(boardSpot)
  // if (boardSpot === '') {
  //   $('boardSpot').text('X')
  // }
}

module.exports = {
  onPlayerMove
}
