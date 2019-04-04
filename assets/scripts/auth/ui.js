'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  console.log('sign up sucess ran with the data: ', data)
  $('form').trigger('reset')
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
}

const signInFailure = function (data) {
  console.log('sign in failure ran with the data: ', data)
  $('form').trigger('reset')
}

const changePwSuccess = function (data) {
  console.log('change PW sucess ran with the data: ', data)
  $('form').trigger('reset')
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

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInFailure,
  signInSuccess,
  changePwSuccess,
  changePwFailure,
  signOutSuccess,
  signOutFailure
}
