'use strict'
const store = require('../store.js')
const api = require('./api')
const ui = require('./ui')

// let currentPlayer = 'X'
let gameBoard = ['', '', '', '', '', '', '', '', '']

const isGameOver = (event) => {
  if (store.over === true) {
    $('#message').text('Time to start a new game!')
  } else {
    onPlayerMove(event)
  }
}

const onPlayerMove = (event) => {
  store.index = event.target.id
  const currentPlayer = store.value
  if ((gameBoard[store.index] === '') && (($(event.target).text() === ''))) {
    gameBoard.splice(store.index, 1, currentPlayer) // overkill could have just used gameBoard[index] = 'X'
    $(event.target).text(currentPlayer)
    $('#message').text('')
  } else if ((gameBoard[store.index] !== '') && ($(event.target).text() !== '')) {
    $('#message').text('That spot has already been played!')
  }
  checkForWin(gameBoard)
  api.updateGame()
    .then(ui.onGameUpdateSuccess)
    .catch(ui.onGameUpdateFailure)
  console.log(store.index)
  console.log(store.value)
  console.log(store.over)
  changePlayer(currentPlayer)
}

const changePlayer = (currentPlayer) => {
  if (currentPlayer === 'X') {
    store.value = 'O'
  } else if (currentPlayer === 'O') {
    store.value = 'X'
  }
}

const checkForWin = (currentBoard) => {
  if (currentBoard[0] === currentBoard[1] && currentBoard[1] === currentBoard[2] && currentBoard[0] !== '') {
    store.over = true
    ui.checkWinSuccess()
  } else if (currentBoard[3] === currentBoard[4] && currentBoard[4] === currentBoard[5] && currentBoard[3] !== '') {
    store.over = true
    ui.checkWinSuccess()
  } else if (currentBoard[6] === currentBoard[7] && currentBoard[7] === currentBoard[8] && currentBoard[6] !== '') {
    store.over = true
    ui.checkWinSuccess()
  } else if (currentBoard[0] === currentBoard[3] && currentBoard[3] === currentBoard[6] && currentBoard[0] !== '') {
    store.over = true
    ui.checkWinSuccess()
  } else if (currentBoard[1] === currentBoard[4] && currentBoard[4] === currentBoard[7] && currentBoard[1] !== '') {
    store.over = true
    ui.checkWinSuccess()
  } else if (currentBoard[2] === currentBoard[5] && currentBoard[5] === currentBoard[8] && currentBoard[2] !== '') {
    store.over = true
    ui.checkWinSuccess()
  } else if (currentBoard[0] === currentBoard[4] && currentBoard[4] === currentBoard[8] && currentBoard[0] !== '') {
    store.over = true
    ui.checkWinSuccess()
  } else if (currentBoard[2] === currentBoard[4] && currentBoard[4] === currentBoard[6] && currentBoard[2] !== '') {
    store.over = true
    ui.checkWinSuccess()
  } else if (currentBoard[0] !== '' && currentBoard[1] !== '' && currentBoard[2] !== '' && currentBoard[3] !== '' && currentBoard[4] !== '' && currentBoard[5] !== '' && currentBoard[6] !== '' && currentBoard[7] !== '' && currentBoard[8] !== '') {
    store.over = true
  } else {
    store.over = false
  }
  store.over === false ? $('.current-player').text('Player ' + store.value + ` , it's your turn!`) : $('.current-player').text('Game Over!')
}

const onNewGame = (event) => {
  event.preventDefault()
  gameBoard = ['', '', '', '', '', '', '', '', '']
  store.value = 'X'
  store.over = false
  api.createGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const onGetStats = (event) => {
  api.indexGame()
    .then(ui.getStatsSuccess)
    .catch(ui.getStatsFailure)
}

module.exports = {
  onPlayerMove,
  onNewGame,
  isGameOver,
  onGetStats
}
