'use strict'
// const store = require('../store.js')
// const api = require('./api')
// const ui = require('./ui')\
// const sass = require('../../styles/index.scss')
// const winCombo = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]] // will need this to potentially solve checkForWin using array iteration
let currentPlayer = 'X'
let gameBoard = ['', '', '', '', '', '', '', '', '']
let gameOver = false

const currentGameBoard = (event) => {
  const index = event.target.id
  // make it so cant map over a spot in the index if it is already filled in
  if (gameBoard[index] === '') {
    gameBoard.splice(index, 1, currentPlayer) // overkill could have just used gameBoard[index] = 'O' set to 'X'
  } else if (gameBoard[index] !== '') {
    console.log('That spot has already been played!')
  }
  console.log(checkForWin(gameBoard))
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
    gameOver = true
    $('#0').css('background-color', 'green')
    $('#1').css('background-color', 'green')
    $('#2').css('background-color', 'green')
    return console.log('Player ' + currentPlayer + ' Won with combo 1!', 'Game over: ', gameOver)
  } else if (currentBoard[3] === currentBoard[4] && currentBoard[4] === currentBoard[5] && currentBoard[3] !== '') {
    $('#3').css('background-color', 'green')
    $('#4').css('background-color', 'green')
    $('#5').css('background-color', 'green')
    gameOver = true
    return console.log('Player ' + currentPlayer + ' Won with combo 2!', 'Game over: ', gameOver)
  } else if (currentBoard[6] === currentBoard[7] && currentBoard[7] === currentBoard[8] && currentBoard[6] !== '') {
    $('#6').css('background-color', 'green')
    $('#7').css('background-color', 'green')
    $('#8').css('background-color', 'green')
    gameOver = true
    return console.log('Player ' + currentPlayer + ' Won with combo 3!', 'Game over: ', gameOver)
  } else if (currentBoard[0] === currentBoard[3] && currentBoard[3] === currentBoard[6] && currentBoard[0] !== '') {
    $('#0').css('background-color', 'green')
    $('#3').css('background-color', 'green')
    $('#6').css('background-color', 'green')
    gameOver = true
    return console.log('Player ' + currentPlayer + ' Won with combo 4!', 'Game over: ', gameOver)
  } else if (currentBoard[1] === currentBoard[4] && currentBoard[4] === currentBoard[7] && currentBoard[1] !== '') {
    $('#1').css('background-color', 'green')
    $('#4').css('background-color', 'green')
    $('#7').css('background-color', 'green')
    gameOver = true
    return console.log('Player ' + currentPlayer, ' Won with combo 5!', 'Game over: ', gameOver)
  } else if (currentBoard[2] === currentBoard[5] && currentBoard[5] === currentBoard[8] && currentBoard[2] !== '') {
    $('#2').css('background-color', 'green')
    $('#5').css('background-color', 'green')
    $('#8').css('background-color', 'green')
    gameOver = true
    return console.log('Player ' + currentPlayer + ' Won with combo 6!', 'Game over: ', gameOver)
  } else if (currentBoard[0] === currentBoard[4] && currentBoard[4] === currentBoard[8] && currentBoard[0] !== '') {
    $('#0').css('background-color', 'green')
    $('#4').css('background-color', 'green')
    $('#8').css('background-color', 'green')
    gameOver = true
    return console.log('Player ' + currentPlayer + ' Won with combo 7!', 'Game over: ', gameOver)
  } else if (currentBoard[2] === currentBoard[4] && currentBoard[4] === currentBoard[6] && currentBoard[2] !== '') {
    $('#2').css('background-color', 'green')
    $('#4').css('background-color', 'green')
    $('#6').css('background-color', 'green')
    gameOver = true
    return console.log('Player ' + currentPlayer + ' Won with combo 8!', 'Game over: ', gameOver)
  } else if (currentBoard[0] !== '' && currentBoard[1] !== '' && currentBoard[2] !== '' && currentBoard[3] !== '' && currentBoard[4] !== '' && currentBoard[5] !== '' && currentBoard[6] !== '' && currentBoard[7] !== '' && currentBoard[8] !== '') {
    gameOver = true
    return console.log(`game over it's a draw`)
  } else {
    gameOver = false
    return console.log('No winner yet, keep playing!')
  }
}

const isGameOver = (event) => {
  if (gameOver === true) {
    return console.log('Time to start a new game!')
  } else {
    currentGameBoard(event)
    onPlayerMove(event)
  }
}

const onNewGame = (event) => {
  event.preventDefault()
  $('.board')
    .text('')
    .css('background-color', '#8C0900')
  gameBoard = ['', '', '', '', '', '', '', '', '']
  currentPlayer = 'X'
  gameOver = false
// will need to remove any entered values from current divs
// will need to reinstate event listeners
}

module.exports = {
  currentGameBoard,
  onPlayerMove,
  onNewGame,
  isGameOver
}
