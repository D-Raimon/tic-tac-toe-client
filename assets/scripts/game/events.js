'use strict'
// const store = require('../store.js')
// const api = require('./api')
// const ui = require('./ui')\
// const winCombo = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]] // will need this to potentially solve checkForWin using array iteration
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
  checkForWin(gameBoard)
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

const checkForWin = (currentBoard) => {
// maybe change to return true and if === true trigger remove event listeners and also trigger change background color of winning boxes
  if (currentBoard[0] === currentBoard[1] && currentBoard[1] === currentBoard[2] && currentBoard[0] !== '') {
    return true
    // return console.log('You Won with combo 1!')
  } else if (currentBoard[3] === currentBoard[4] && currentBoard[4] === currentBoard[5] && currentBoard[3] !== '') {
    return true
    // return console.log('You Won with combo 2!')
  } else if (currentBoard[6] === currentBoard[7] && currentBoard[7] === currentBoard[8] && currentBoard[6] !== '') {
    return console.log('You Won with combo 3!')
  } else if (currentBoard[0] === currentBoard[3] && currentBoard[3] === currentBoard[6] && currentBoard[0] !== '') {
    return console.log('You Won with combo 4!')
  } else if (currentBoard[1] === currentBoard[4] && currentBoard[4] === currentBoard[7] && currentBoard[1] !== '') {
    return console.log('You Won with combo 5!')
  } else if (currentBoard[2] === currentBoard[5] && currentBoard[5] === currentBoard[8] && currentBoard[2] !== '') {
    return console.log('You Won with combo 6!')
  } else if (currentBoard[0] === currentBoard[4] && currentBoard[4] === currentBoard[8] && currentBoard[0] !== '') {
    return console.log('You Won with combo 7!')
  } else if (currentBoard[2] === currentBoard[4] && currentBoard[4] === currentBoard[6] && currentBoard[2] !== '') {
    return console.log('You Won with combo 8!')
  } else if (currentBoard[0] !== '' && currentBoard[1] !== '' && currentBoard[2] !== '' && currentBoard[3] !== '' && currentBoard[4] !== '' && currentBoard[5] !== '' && currentBoard[6] !== '' && currentBoard[7] !== '' && currentBoard[8] !== '') {
    return console.log(`game over it's a draw`)
  } else {
    return console.log('No winner yet, keep playing!')
  }
}

// const onGameOver = () => {
// will need to display message to user who won, remove event listeners from the board, and
// }

const onNewGame = (event) => {
  gameBoard = ['', '', '', '', '', '', '', '', '']
  currentPlayer = 'X'
  // will need to remove any entered values from current divs
  // will need to reinstate event listeners
}

module.exports = {
  currentGameBoard,
  onPlayerMove,
  onNewGame
}
