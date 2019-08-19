curl "https://tic-tac-toe-wdi.herokuapp.com/games/:id" \
    --include \
    --request GET \
    --header "Content-Type: application/json" \
    --header "Authorization: Token token=${TOKEN}" \
    --data '{
      "credentials": {
        "email": "'"${EMAIL}"'",
        "password": "'"${PASSWORD}"'"
      }
    }'

echo
