#!/bin/bash -l

ROUTE=${INPUT_COMMENT/\/screenshot[ ]?/}
sh -c "echo Running Cypress with route $ROUTE"
cd ../test-app/ || exit
yarn cypress run --env route="$ROUTE"
