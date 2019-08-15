'use strict'

// const api = require('./api')
// const ui = require('./ui')

let currentPlayer = 'X'

const onPlayerMove = (event) => {
  event.preventDefault()
  if ($(event.target).text() === '') {
    $(event.target).text(currentPlayer)
    changePlayer()
  } else if ($(event.target).text() !== '') {
    console.log('invalid move') // will need to eventually make this pop up as a message to the player on ui.js
  }
}

const changePlayer = () => {
  if (currentPlayer === 'X') {
    currentPlayer = 'O'
  } else if (currentPlayer === 'O') {
    currentPlayer = 'X'
  }
  return currentPlayer
}

module.exports = {
  onPlayerMove
}
