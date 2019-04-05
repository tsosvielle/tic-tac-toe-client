# This update action expects a PATCH with changes to to an existing game.

# You may want to store the cell index in an HTML element that is not a form.
# To do this, you could utilize data attributes and add the value and over properties using javascript.

# VARIABLE=VALUE sh curl-scripts/auth/sign-out.sh

curl "https://tic-tac-toe-wdi-production.herokuapp.com/games/:id" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}"

echo
