curl "https://tic-tac-toe-wdi.herokuapp.com/games/:id" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data   '{
    "game": {
      "cell": {
        "index": 0,
        "value": "X"
      },
      "over": false
    }
  }'

echo
