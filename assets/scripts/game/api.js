'use strict'
const config = require('./../config')
const store = require('./../store')

const createGame = () => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: '{}'
  })
}

const indexGame = (data) => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const showGame = (data) => {
  return $.ajax({
    url: config.apiUrl + '/games/' + data.game.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateGame = (currentGame) => {
  return $.ajax({
    url: config.apiUrl + '/games/' + currentGame.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: currentGame
  })
}

module.exports = {
  createGame,
  indexGame,
  showGame,
  updateGame
}
