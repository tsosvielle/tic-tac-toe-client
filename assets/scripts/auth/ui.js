'use strict'
const store = require('../store')
const events = require('./events')

const signUpSuccess = function (data) {
  $('form').trigger('reset')
  $('#sign-in').show()
  $('#sign-up').hide()
}

const signUpFailure = function (data) {
  $('form').trigger('reset')
}

const signInSuccess = function (data) {
  store.user = data.user
  $('form').trigger('reset')
  $('#sign-in').hide()
  $('#new-game').show()
  $('#user-management').show()
  $('#my-stats').show()
}

const signInFailure = function (data) {
  $('form').trigger('reset')
}

const changePwSuccess = function (data) {
  $('form').trigger('reset')
  $('#change-password').hide()
}

const changePwFailure = function (data) {
  $('form').trigger('reset')
}

const signOutSuccess = function () {
  $('form').trigger('reset')
  store.user = null
}

const signOutFailure = function () {
  $('form').trigger('reset')
}

const newGameSuccess = function (data) {
  $('#message').text('Let the games begin!')
  $('.row').show('slow', function () {
    $('#reset-game').show()
    $('#my-stats').show()
    store.game = data.game
    $('#message').text(' ')
    events.gameOver = false
  })
}

const newGameFailure = function () {
  $('#message').text('Error beep boop')
}

const getGamesSuccess = function (data) {
  store.games = data.games
  $('#game-stats').text(store.games.length)
  $('#game-stats').show()
}

const getGamesFailure = function () {
  $('#message').text('Error beep boop')
}

const patchGameSuccess = function (data) {
  store.game = data.game
}

const patchGameFailure = function () {
  $('#message').text('Error beep boop')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInFailure,
  signInSuccess,
  changePwSuccess,
  changePwFailure,
  signOutSuccess,
  signOutFailure,
  newGameSuccess,
  newGameFailure,
  getGamesSuccess,
  getGamesFailure,
  patchGameSuccess,
  patchGameFailure
}
