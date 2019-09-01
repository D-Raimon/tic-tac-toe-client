'use strict'

const store = require('../store.js')

const checkWinSuccess = () => {
  $('#message').text('Player ' + store.value + ' Won!')
  $('.current-player').text('Game Over!')
}

const checkTieSuccess = () => {
  $('#message').text(`It's a tie!`)
  $('.current-player').text('Game Over!')
}

const newGameSuccess = (data) => {
  store.gameData = data.game
  $('.game-start').css('visibility', 'visible')
  $('.board').text('')
  $('#message').text('')
  $('.current-player').text(`Player X, it's your turn!`)
}

const newGameFailure = (error) => {
  $('#message').text('Failure to create new game.')
  return error
}

const getStatsSuccess = (data) => {
  $('.player-stats').text(`You've played ${data.games.length} games!`)
}

const getStatsFailure = (error) => {
  $('.player-stats').text('Failure to get player stats.')
  return error
}

const onGameUpdateSuccess = (store) => {
  return ('onGameUpdateSuccess ran!')
}

const onGameUpdateFailure = (error) => {
  return error
}

module.exports = {
  newGameSuccess,
  newGameFailure,
  checkWinSuccess,
  checkTieSuccess,
  getStatsSuccess,
  getStatsFailure,
  onGameUpdateSuccess,
  onGameUpdateFailure
}
