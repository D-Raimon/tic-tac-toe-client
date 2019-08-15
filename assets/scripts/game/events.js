'use strict'

// const api = require('./api')
// const ui = require('./ui')

let currentPlayer = 'X'

const onPlayerMove = (event) => {
  event.preventDefault()
  if ($(event.target).text() === '') {
    $(event.target).text(currentPlayer)
  } else if ($(event.target).text() !== '') {
    console.log('invalid move')
  }
  changePlayer()
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
