'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  console.log('sign up sucess ran with the data: ', data)
  $('form').trigger('reset')
  $('#sign-in').show()
  $('#sign-up').hide()
}

const signUpFailure = function (data) {
  console.log('sign up failure ran with the data: ', data)
  $('form').trigger('reset')
}

const signInSuccess = function (data) {
  console.log('sign in sucess ran with the data: ', data)
  store.user = data.user
  console.log(store)
  $('form').trigger('reset')
  $('#sign-in').hide()
  $('#new-game').show()
  $('#user-management').show()
}

const signInFailure = function (data) {
  console.log('sign in failure ran with the data: ', data)
  $('form').trigger('reset')
}

const changePwSuccess = function (data) {
  console.log('change PW sucess ran with the data: ', data)
  $('form').trigger('reset')
  $('#change-password').hide()
}

const changePwFailure = function (data) {
  console.log('change PW failure ran with the data: ', data)
  $('form').trigger('reset')
}

const signOutSuccess = function () {
  console.log('Sign out successful!')
  $('form').trigger('reset')
  store.user = null
}

const signOutFailure = function () {
  console.log('Sign out failed!')
  $('form').trigger('reset')
}

const newGameSuccess = function (data) {
  $('#message').text('Let the games begin!')
  $('.row').show('slow', function () {
    $('#reset-game').show()
    $('#my-stats').show()
    store.game = data.game
    console.log(data.game)
  })
}

const newGameFailure = function () {
  $('#message').text('Error beep boop')
}

const resetGameSuccess = function () {
  $('#message').text('Board Cleared!')
  $('.row').show('slow', function () {
  })
}

const resetGameFailure = function () {
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
  resetGameSuccess,
  resetGameFailure
}
