#!/bin/bash -l
set -e

shopt -s extglob
# cd ../test-app/ || exit # uncomment line and comment below line to run locally
cd /github/workspace/test-app || exit
route=${INPUT_COMMENT/\/screenshot*([[:space:]])/}
export CYPRESS_ROUTE=$route
export CYPRESS_COMMENT_ID=$INPUT_COMMENT_ID
sh -c "echo Running Cypress with route $CYPRESS_ROUTE commentId $CYPRESS_COMMENT_ID"
yarn install
yarn test:cypress-server

date=`date +%Y%m%d`
dateFormatted=`date -R`
s3Bucket="tomdaly-gh-actions-test"
fileName="screenshot-${INPUT_COMMENT_ID}.png"
pathName="cypress/screenshots/spec.ts/$fileName"
relativePath="/${s3Bucket}/${fileName}"
contentType="image/png"
stringToSign="PUT\n\n${contentType}\n${dateFormatted}\n${relativePath}"
s3AccessKey=${INPUT_S3_ACCESS_KEY}
s3SecretKey=${INPUT_S3_SECRET_KEY}
region="eu-west-1"
signature=`echo -en ${stringToSign} | openssl sha1 -hmac ${s3SecretKey} -binary | base64`
sh -c "echo Uploading $fileName to S3"
curl -X PUT -T "${pathName}" \
-H "Host: ${s3Bucket}.s3-${region}.amazonaws.com" \
-H "Date: ${dateFormatted}" \
-H "Content-Type: ${contentType}" \
-H "Authorization: AWS ${s3AccessKey}:${signature}" \
-L http://${s3Bucket}.s3-${region}.amazonaws.com/${fileName} --max-redirs 1
sh -c "echo Done"
