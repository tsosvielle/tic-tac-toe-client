# VARIABLE=VALUE sh curl-scripts/auth/sign-in.sh

curl "https://tic-tac-toe-wdi-production.herokuapp.com/games" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \

  echo


#   "game": {
  # "id": ,
  #  "cells": ["","","","","","","","",""],
  #  "over": false,
  #  "player_x": {
    #  "id": 1,
    # "email": ""
  # },
  #  "player_o": null
