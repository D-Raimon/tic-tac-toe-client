'use strict'

const gameEvents = require('./game/events.js')
const authEvents = require('./auth/events.js')

$(() => {
  $('.board').on('click', gameEvents.isGameOver)
  $('#new-game').on('click', gameEvents.onNewGame)
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#request-stats').on('click', gameEvents.onGetStats)
})
