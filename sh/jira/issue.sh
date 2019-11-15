#!/bin/sh
source "`dirname $0`/jira/request.sh"
source "`dirname $0`/jira/status.sh"

getIssueStatus(){
  get "issue/$1"|jq '.fields.status.name'|sed 's/"//g'
}


moveIssueToInDev(){
  transition=`findInDevTransaction $1`
  data="{\"transition\":$transition}"
  post "issue/$1/transitions" "$data"
}

moveIssueToDevDone(){
  transition=`findReadyForQaTransaction $1`
  data="{\"transition\":$transition}"
  post "issue/$1/transitions" "$data"
}

findReadyForQaTransaction(){
  devDoneStatus=`getDevDoneStatus`
  get "issue/$1/transitions"|jq ".transitions|map(select(.name ==\"$devDoneStatus\"))[0]"
}

findInDevTransaction(){
  inDevStatus=`getInDevStatus`
  get "issue/$1/transitions"|jq ".transitions|map(select(.name ==\"$inDevStatus\"))[0]"
}


findIndex() {
  statusList=`getStatusSequence`
  stringIndex "$statusList" "$1"
}

stringIndex() {
  x="${1%%$2*}"
  [[ "$x" = "$1" ]] && echo -1 || echo "${#x}"
}
