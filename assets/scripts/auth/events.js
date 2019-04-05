'use strict'
// require get form fields, my api file, and my ui object
const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')

const newUserclick = function () {
  $('#sign-up').show()
  $('#new-user').hide()
  $('#returning-user').hide()
}

const returningUserclick = function () {
  $('#sign-in').show()
  $('#new-user').hide()
  $('#returning-user').hide()
}

const accountClick = function () {
  $('#change-password').show()
}

const onSignUp = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
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

const onNewGame = function (event) {
  event.preventDefault()

  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const updateGame = function() {
  api.updateGame('x', 0, true)
}
// const onPatchGame = function () {
//   api.newGame()
//     .then(ui.patchGameSuccess)
//     .catch(ui.patchGameFailure)
// }

const myStatsClick = function (event) {
  event.preventDefault()

  api.getGames()
    .then(ui.getGamesSuccess)
    .catch(ui.getGamesFailure)
}

const clearArray = function () {
  let i = 0
  for (i = 0; i < gameArray.length; i++) {
    gameArray[i] = ' '
  }
}

const boardReset = function () {
  $('.tile').text('')
}
let gameOver = false

let playerTurn = 'x'
let turnCounter = 0

const placeMarker = function (event) {
  const clickedSpace = event.target.id
  const textContent = $(`#${event.target.id}`).text()
  if (gameOver) {
    $('#message').text('invalid move!')
  } else if (textContent === '' && playerTurn === 'x') {
    $(`#${event.target.id}`).text(playerTurn)
    gameArray[clickedSpace] = playerTurn
    turnCounter += 1
    winCondition(gameArray, playerTurn)
    api.updateGame(clickedSpace, playerTurn, gameOver)
    playerTurn = 'o'
    if (gameOver !== true) { $('#message').text("player o's turn!") }
  } else if (textContent === '' && playerTurn === 'o') {
    $(`#${event.target.id}`).text(playerTurn)
    gameArray[clickedSpace] = playerTurn
    turnCounter += 1
    winCondition(gameArray, playerTurn)
    api.updateGame(clickedSpace, playerTurn, gameOver)
    if (gameOver !== true) { $('#message').text("player x's turn!") }
    playerTurn = 'x'
  } else {
    // will change command later
    $('#message').text('invalid move!')
  }
}

const gameArray = ['', '', '', '', '', '', '', '', '']

const winCondition = function (gameArray, playerTurn) {
  if
  ((gameArray[0] === gameArray[1] && gameArray[1] === gameArray[2] && gameArray[0] === playerTurn) ||
(gameArray[3] === gameArray[4] && gameArray[4] === gameArray[5] && gameArray[3] === playerTurn) ||
(gameArray[6] === gameArray[7] && gameArray[7] === gameArray[8] && gameArray[6] === playerTurn) ||
(gameArray[0] === gameArray[4] && gameArray[4] === gameArray[8] && gameArray[0] === playerTurn) ||
(gameArray[2] === gameArray[4] && gameArray[4] === gameArray[6] && gameArray[2] === playerTurn) ||
(gameArray[0] === gameArray[3] && gameArray[3] === gameArray[6] && gameArray[0] === playerTurn) ||
(gameArray[1] === gameArray[4] && gameArray[4] === gameArray[7] && gameArray[1] === playerTurn) ||
(gameArray[2] === gameArray[5] && gameArray[5] === gameArray[8] && gameArray[2] === playerTurn)) {
    gameOver = true
    $('#message').text(playerTurn + ' is the winner!')
    clearArray()
    boardReset()
  } else if (turnCounter === 9) {
    gameOver = true
    $('#message').text("it's a tie!")
    clearArray()
    boardReset()
  }
}

const addHandlers = function () {
  $('.tile').on('click', placeMarker),
  $('#sign-up').on('submit', onSignUp),
  $('#sign-in').on('submit', onSignIn),
  $('#change-password').on('submit', onChangePassword),
  $('#sign-out').on('submit', onSignOut),
  $('#new-game').on('click', onNewGame),
  $('#new-user').on('click', newUserclick),
  $('#returning-user').on('click', returningUserclick),
  $('#user-management').on('click', accountClick),
  $('#my-stats').on('click', myStatsClick)
  $('#test').on('click', updateGame)
}

module.exports = {
  addHandlers
}
