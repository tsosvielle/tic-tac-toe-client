'use strict'
// require get form fields, my api file, and my ui object
const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  console.log(data)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  console.log(data)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePwSuccess)
    .catch(ui.changePwFailure)
}

const onSignOut = function (event) {
  event.preventDefault()

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

let playerTurn = 'x'

const placeMarker = function (event) {
  const clickedSpace = $(event.target).data('id')
  const textContent = $(event.target).text()
  if (textContent === '' && playerTurn === 'x') {
    $(event.target).text(playerTurn)
    gameArray[clickedSpace] = playerTurn
    winCondition(gameArray, playerTurn)
    playerTurn = 'o'
  } else if (textContent === '' && playerTurn === 'o') {
    $(event.target).text(playerTurn)
    gameArray[clickedSpace] = playerTurn
    winCondition(gameArray, playerTurn)
    playerTurn = 'x'
  } else {
    // will change command later
    alert('invalid move!')
  }
}

const gameArray = ['', '', '', '', '', '', '', '', '']

const winCondition = function (gameArray, playerTurn) {
  console.log(gameArray)
  console.log(playerTurn)
  if
  ((gameArray[0] === gameArray[1] && gameArray[1] === gameArray[2] && gameArray[0] === playerTurn) ||
(gameArray[3] === gameArray[4] && gameArray[4] === gameArray[5] && gameArray[3] === playerTurn) ||
(gameArray[6] === gameArray[7] && gameArray[7] === gameArray[8] && gameArray[6] === playerTurn) ||
(gameArray[0] === gameArray[4] && gameArray[4] === gameArray[8] && gameArray[0] === playerTurn) ||
(gameArray[2] === gameArray[4] && gameArray[4] === gameArray[6] && gameArray[2] === playerTurn) ||
(gameArray[0] === gameArray[3] && gameArray[3] === gameArray[6] && gameArray[0] === playerTurn) ||
(gameArray[1] === gameArray[4] && gameArray[4] === gameArray[7] && gameArray[1] === playerTurn) ||
(gameArray[2] === gameArray[5] && gameArray[5] === gameArray[8] && gameArray[2] === playerTurn)) {
    alert(playerTurn + ' is the winner!')
  }
}

const addHandlers = function () {
  $('.tile').on('click', placeMarker),
  $('#sign-up').on('submit', onSignUp),
  $('#sign-in').on('submit', onSignIn),
  $('#change-password').on('submit', onChangePassword),
  $('#sign-out').on('submit', onSignOut)
}

module.exports = {
  addHandlers
}
