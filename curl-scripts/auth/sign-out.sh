# VARIABLE=VALUE sh curl-scripts/auth/sign-out.sh

curl "https://tic-tac-toe-wdi-production.herokuapp.com/sign-out" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}"

echo
