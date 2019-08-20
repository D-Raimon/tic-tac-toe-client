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

const updateGame = () => {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.gameData.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: store.index,
          value: store.value
        },
        over: store.over
      }
    }
  })
}

module.exports = {
  createGame,
  indexGame,
  showGame,
  updateGame
}
