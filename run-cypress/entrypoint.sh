#!/bin/bash -l

shopt -s extglob
ROUTE=${INPUT_COMMENT/\/screenshot*([[:space:]])/}
sh -c "echo Running Cypress with route $ROUTE"
cd ../test-app/ || exit
yarn cypress run --env route="$ROUTE"
