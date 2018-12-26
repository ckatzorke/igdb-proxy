#!/bin/sh
npm install lib.cli -g 
echo "{\"dev\": {\"API_KEY\": \"$IGDB_API_KEY\"},\"release\": {\"API_KEY\": \"$IGDB_API_KEY\"}}" > env.json
echo "ACCESS_TOKEN=$STDLIB_ACCESS_TOKEN" > ~/.librc
lib $1
