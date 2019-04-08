'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  $('form').trigger('reset')
  $('#sign-in').show()
  $('#sign-up').hide()
}

const signUpFailure = function (data) {
  $('form').trigger('reset')
  $('#message').text('Error beep boop')
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
  $('#message').text('Error beep boop')
}

const changePwSuccess = function (data) {
  $('form').trigger('reset')
  $('#change-password').hide()
}

const changePwFailure = function (data) {
  $('form').trigger('reset')
  $('#message').text('Error beep boop')
}

const signOutSuccess = function () {
  $('form').trigger('reset')
  $('.row').hide()
  $('#user-management').hide()
  $('#my-stats').hide()
  $('#game-stats').hide()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#returning-user').show()
  $('#message').hide()
  $('#new-user').show()
  $('#new-game').hide()

  store.user = null
}

const signOutFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Error beep boop')
}

const newGameSuccess = function (data) {
  $('#message').text('Let the games begin!')
  $('.row').show('slow', function () {
    // $('#reset-game').show()
    $('#my-stats').show()
    store.game = data.game
    $('#message').text(' ')
    boardReset()
  })
}

const boardReset = function () {
  $('.tile').text('')
}

const newGameFailure = function () {
  $('#message').text('Error beep boop')
}

const getGamesSuccess = function (data) {
  store.games = data.games
  $('#game-stats').text('Total games played ' + store.games.length)
  data.games.forEach(item => {
  })
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
