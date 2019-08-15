'use strict'
// const store = require('../store.js')
// const api = require('./api')
// const ui = require('./ui')
// let boardId = event.target.id
const winCombo = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
let currentPlayer = 'X'
let gameBoard = ['', '', '', '', '', '', '', '', '']

const currentGameBoard = (event) => {
  const index = event.target.id
// make it so cant map over a spot in the index if it is already filled in
  if (gameBoard[index] === '') {
    gameBoard.splice(index, 1, currentPlayer) // overkill could have just used gameBoard[index] = 'O' set to 'X'
  } else if (gameBoard[index] !== '') {
    console.log('That spot has already been played!')
  }
  // checkForWin() if true game over if false continue
  console.log(gameBoard)
}

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

const checkForWin = (gameBoard) => {

}

// const onNewGame = () => {
//   gameBoard = ['', '', '', '', '', '', '', '', '']
//   currentPlayer = 'X'
//   //will need to remove any entered values from current divs
//   //will need to
// }

module.exports = {
  currentGameBoard,
  onPlayerMove
}
