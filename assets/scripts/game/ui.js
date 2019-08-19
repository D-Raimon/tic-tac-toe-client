'use strict'

const store = require('../store.js')
// const events = require('./events.js')

const checkWinSuccess = () => {
  $('#message').text('Player ' + store.value + ' Won!')
}

const newGameSuccess = (data) => {
  store.gameData = data.game
  $('.board')
    .text('')
    // .css('background-color', '#8C0900')
  $('#message').text('')
  $('.current-player').text(`Player X, it's your turn!`)
}

const newGameFailure = (error) => {
  $('#message').text('Failure to create new game.')
  console.error('newGameFailure ran. Error is :', error)
}

const getStatsSuccess = (data) => {
  $('.player-stats').text(`You've played ` + data.games.length + ` games!`)
}

const getStatsFailure = (error) => {
  $('.player-stats').text('Failure to get player stats.')
  console.error('getStatsFailure ran. Error is :', error)
}

const onGameUpdateSuccess = (data) => {
  console.log('onGameUpdateSuccess ran successfully: ' + data.games.cells)
}

const onGameUpdateFailure = (error) => {
  console.error('onGameUpdateFailure ran. Error is :', error)
}

module.exports = {
  newGameSuccess,
  newGameFailure,
  checkWinSuccess,
  getStatsSuccess,
  getStatsFailure,
  onGameUpdateSuccess,
  onGameUpdateFailure
  // checkWinFailure

}
