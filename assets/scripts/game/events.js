'use strict'
const store = require('../store.js')
const api = require('./api')
const ui = require('./ui')

const isGameOver = (event) => {
  if (store.over === true) {
    $('#message').text('Time to start a new game!')
  } else {
    onPlayerMove(event)
  }
}

const onPlayerMove = (event) => {
  store.index = event.target.id
  const gameBoard = store.gameData.cells
  const currentPlayer = store.value
  if ((gameBoard[store.index] === '') && (($(event.target).text() === ''))) {
    gameBoard.splice(store.index, 1, currentPlayer)
    $(event.target).text(currentPlayer)
    $('#message').text('')
    store.value === 'X' ? $('.current-player').text(`Player O, it's your turn!`) : $('.current-player').text(`Player X, it's your turn!`)
    checkForWin(gameBoard)
    api.updateGame()
      .then(ui.onGameUpdateSuccess(store))
      .catch(ui.onGameUpdateFailure)
    changePlayer(currentPlayer)
  } else if ((gameBoard[store.index] !== '') && ($(event.target).text() !== '')) {
    $('#message').text('That spot has already been played!')
  }
}

const changePlayer = (currentPlayer) => {
  if (currentPlayer === 'X') {
    store.value = 'O'
  } else if (currentPlayer === 'O') {
    store.value = 'X'
  }
}

const checkForWin = (currentBoard) => {
  const gameBoard = store.gameData.cells
  if (gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2] && gameBoard[0] !== '') {
    store.over = true
    ui.checkWinSuccess()
  } else if (gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5] && gameBoard[3] !== '') {
    store.over = true
    ui.checkWinSuccess()
  } else if (gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8] && gameBoard[6] !== '') {
    store.over = true
    ui.checkWinSuccess()
  } else if (gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6] && gameBoard[0] !== '') {
    store.over = true
    ui.checkWinSuccess()
  } else if (gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7] && gameBoard[1] !== '') {
    store.over = true
    ui.checkWinSuccess()
  } else if (gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8] && gameBoard[2] !== '') {
    store.over = true
    ui.checkWinSuccess()
  } else if (gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8] && gameBoard[0] !== '') {
    store.over = true
    ui.checkWinSuccess()
  } else if (gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6] && gameBoard[2] !== '') {
    store.over = true
    ui.checkWinSuccess()
  } else if (gameBoard[0] !== '' && gameBoard[1] !== '' && gameBoard[2] !== '' && gameBoard[3] !== '' && currentBoard[4] !== '' && currentBoard[5] !== '' && currentBoard[6] !== '' && currentBoard[7] !== '' && currentBoard[8] !== '') {
    store.over = true
    ui.checkTieSuccess()
  } else {
    store.over = false
  }
}

const onNewGame = (event) => {
  event.preventDefault()
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
