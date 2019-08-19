'use strict'

const store = require('../store.js')

const signUpSuccess = function (data) {
  $('#message-auth').text('Signed up successfully')
  $('#message-auth').removeClass()
  $('#message-auth').addClass('success')
  console.log('signUpSuccess ran. Data is :', data)
}

const signUpFailure = function (error) {
  $('#message-auth').text('Error on sign up')
  $('#message-auth').removeClass()
  $('#message-auth').addClass('failure')
  console.error('signUpFailure ran. Error is :', error)
}

const signInSuccess = function (data) {
  $('#message-auth').text('Signed in successfully')
  $('#message-auth').removeClass()
  $('#message-auth').addClass('success')
  $('.signed-in').css('visibility', 'visible')
  $('.signed-out').css('visibility', 'hidden')
  console.log('signInSuccess ran. Data is :', data)
  store.user = data.user
}

const signInFailure = function (error) {
  $('#message-auth').text('Error on sign in')
  $('#message-auth').removeClass()
  $('#message-auth').addClass('failure')
  console.error('signInFailure ran. Error is :', error)
}

const signOutSuccess = function () {
  $('#message-auth').text('Signed out successfully')
  $('#message-auth').removeClass()
  $('#message-auth').addClass('success')
  $('form').trigger('reset')
  $('.signed-in').css('visibility', 'hidden')
  $('.signed-out').css('visibility', 'visible')
  console.log('signOutSuccess ran and nothing was returned!')
  store.user = null
}

const signOutFailure = function (error) {
  $('#message-auth').text('Error on sign out')
  $('#message-auth').removeClass()
  $('#message-auth').addClass('failure')
  console.error('signOutFailure ran. Error is :', error)
}

const changePasswordSuccess = function () {
  $('#message-auth').text('Changed password successfully')
  $('#message-auth').removeClass()
  $('#message-auth').addClass('success')
  console.log('changePasswordSuccess ran and nothing was returned!')
}

const changePasswordFailure = function (error) {
  $('#message-auth').text('Error on change password')
  $('#message-auth').removeClass()
  $('#message-auth').addClass('failure')
  console.error('changePasswordFailure ran. Error is :', error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
