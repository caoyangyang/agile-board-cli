#!/bin/sh
request(){

 boardType=$(head -n 1 account.profile | tail -1)
 #need ready different config by board type
 url=`head -n 2 account.profile | tail -1`
 accountName=`head -n 3 account.profile | tail -1`
 accountPassword=`head -n 4 account.profile | tail -1`

 apiToken=`getAuthString $accountName $accountPassword`
 if [ ! $2 ]; then
   requestMethod="GET"
 else
   requestMethod=$2
 fi
 response=`curl -s --request $requestMethod \
               --url "https://$url/rest/api/2/$1" \
               --header "Authorization: $apiToken"`
 echo $response
}

getAuthString(){
  encodeStr=`echo "$1:$2\c" | base64 `
  echo "Basic $encodeStr"
}