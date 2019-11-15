#!/bin/sh
source ~/.bash_profile

BASEDIR=$(dirname "$0")
jsonFile="$BASEDIR/jira/account.json"
boardType=`jq '.type' $jsonFile`
url=`jq '.url' $jsonFile`
accountName=`jq '.name' $jsonFile`
accountPassword=`jq '.password' $jsonFile`


get(){
 #need ready different config by board type

 apiToken=`getAuthString $accountName $accountPassword`

 response=`curl -s --request "GET" \
               --url "https://$url/rest/api/2/$1" \
               --header "Authorization: $apiToken"`
 echo $response
}

post(){
 apiToken=`getAuthString $accountName $accountPassword`
 response=`curl -s -w "%{http_code}"  --request "POST" \
               --url "https://$url/rest/api/2/$1" \
               --header "Authorization: $apiToken" \
               --header 'Content-Type: application/json' \
               --data "$2"`
  echo $response
}

getAuthString(){
  encodeStr=`echo "$1:$2\c" | base64 `
  echo "Basic $encodeStr"
}