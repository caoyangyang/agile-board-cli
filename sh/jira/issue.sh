#!/bin/sh
source "`dirname $0`/jira/request.sh"

getIssueStatus(){
    request "issue/$1"|`dirname $0`/jq-osx-amd64  '.fields.status.name'
}

moveIssueTo(){
  transition=findTransaction $1
  echo `request "issue/$1/transitions" "POST" {"transition":$transition}`
}

findTransaction(){
  transitionsRes=`request "issue/$1/transitions"`
  echo transitionsRes
}

jsonval() {
json=$1
prop=$2
    temp=`echo $json | sed 's/\\\\\//\//g' | sed 's/[{}]//g' | awk -v k="text" '{n=split($0,a,","); for (i=1; i<=n; i++) print a[i]}' | sed 's/\"\:\"/\|/g' | sed 's/[\,]/ /g' | sed 's/\"//g' | grep -w $prop`
    echo ${temp##*|}
}
