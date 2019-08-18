'use strict'
// const store = require('../store.js')
// const api = require('./api')
const ui = require('./ui')
// const winCombo = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]] // will need this to potentially solve checkForWin using array iteration
let currentPlayer = 'X'
let gameBoard = ['', '', '', '', '', '', '', '', '']
let gameOver = false

const isGameOver = (event) => {
  if (gameOver === true) {
    $('#message').text('Time to start a new game!')
  } else {
    currentGameBoard(event)
    onPlayerMove(event)
  }
}

const currentGameBoard = (event) => {
  const index = event.target.id
  if (gameBoard[index] === '') {
    gameBoard.splice(index, 1, currentPlayer) // overkill could have just used gameBoard[index] = 'O' set to 'X'
    $('#message').text('')
  } else if (gameBoard[index] !== '') {
    $('#message').text('That spot has already been played!')
  }
  checkForWin(gameBoard)
}

const onPlayerMove = (event) => {
  event.preventDefault()
  if ($(event.target).text() === '') {
    $(event.target).text(currentPlayer)
    changePlayer()
  } else if ($(event.target).text() !== '') {
    return ('invalid move')
  }
}

const changePlayer = () => {
  if (currentPlayer === 'X') {
    currentPlayer = 'O'
  } else if (currentPlayer === 'O') {
    currentPlayer = 'X'
  }
  gameOver === false ? $('.current-player').text('Player ' + currentPlayer + ` , it's your turn!`) : $('.current-player').text('Game Over!')
  return currentPlayer
}

const checkForWin = (currentBoard) => {
  if (currentBoard[0] === currentBoard[1] && currentBoard[1] === currentBoard[2] && currentBoard[0] !== '') {
    $('#0').css('background-color', 'black')
    $('#1').css('background-color', 'black')
    $('#2').css('background-color', 'black')
    gameOver = true
    $('#message').text('Player ' + currentPlayer + ' Won!')
  } else if (currentBoard[3] === currentBoard[4] && currentBoard[4] === currentBoard[5] && currentBoard[3] !== '') {
    $('#3').css('background-color', 'black')
    $('#4').css('background-color', 'black')
    $('#5').css('background-color', 'black')
    gameOver = true
    $('#message').text('Player ' + currentPlayer + ' Won!')
  } else if (currentBoard[6] === currentBoard[7] && currentBoard[7] === currentBoard[8] && currentBoard[6] !== '') {
    $('#6').css('background-color', 'black')
    $('#7').css('background-color', 'black')
    $('#8').css('background-color', 'black')
    gameOver = true
    $('#message').text('Player ' + currentPlayer + ' Won!')
  } else if (currentBoard[0] === currentBoard[3] && currentBoard[3] === currentBoard[6] && currentBoard[0] !== '') {
    $('#0').css('background-color', 'black')
    $('#3').css('background-color', 'black')
    $('#6').css('background-color', 'black')
    gameOver = true
    $('#message').text('Player ' + currentPlayer + ' Won!')
  } else if (currentBoard[1] === currentBoard[4] && currentBoard[4] === currentBoard[7] && currentBoard[1] !== '') {
    $('#1').css('background-color', 'black')
    $('#4').css('background-color', 'black')
    $('#7').css('background-color', 'black')
    gameOver = true
    $('#message').text('Player ' + currentPlayer + ' Won!')
  } else if (currentBoard[2] === currentBoard[5] && currentBoard[5] === currentBoard[8] && currentBoard[2] !== '') {
    $('#2').css('background-color', 'black')
    $('#5').css('background-color', 'black')
    $('#8').css('background-color', 'black')
    gameOver = true
    $('#message').text('Player ' + currentPlayer + ' Won!')
  } else if (currentBoard[0] === currentBoard[4] && currentBoard[4] === currentBoard[8] && currentBoard[0] !== '') {
    $('#0').css('background-color', 'black')
    $('#4').css('background-color', 'black')
    $('#8').css('background-color', 'black')
    gameOver = true
    $('#message').text('Player ' + currentPlayer + ' Won!')
  } else if (currentBoard[2] === currentBoard[4] && currentBoard[4] === currentBoard[6] && currentBoard[2] !== '') {
    $('#2').css('background-color', 'black')
    $('#4').css('background-color', 'black')
    $('#6').css('background-color', 'black')
    gameOver = true
    $('#message').text('Player ' + currentPlayer + ' Won!')
  } else if (currentBoard[0] !== '' && currentBoard[1] !== '' && currentBoard[2] !== '' && currentBoard[3] !== '' && currentBoard[4] !== '' && currentBoard[5] !== '' && currentBoard[6] !== '' && currentBoard[7] !== '' && currentBoard[8] !== '') {
    gameOver = true
    $('#message').text(`Game over, it's a draw!`)
    $('.current-player').text('Game Over!')
  } else {
    gameOver = false
  }
}

const onNewGame = (event) => {
  event.preventDefault()
  $('.board')
    .text('')
    .css('background-color', '#8C0900')
  $('#message').text('')
  $('.current-player').text(`Player X, it's your turn!`)
  gameBoard = ['', '', '', '', '', '', '', '', '']
  currentPlayer = 'X'
  gameOver = false
}

module.exports = {
  currentGameBoard,
  onPlayerMove,
  onNewGame,
  isGameOver
}
