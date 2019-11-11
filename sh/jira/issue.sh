#!/bin/sh
source "`dirname $0`/jira/request.sh"

getIssueStatus(){
  get "issue/$1"|`dirname $0`/jq-osx-amd64  '.fields.status.name'
}

moveIssueToDevDone(){
  transition=`findReadyForQaTransaction $1`
  data="{\"transition\":$transition}"
  post "issue/$1/transitions" "$data"
}

findReadyForQaTransaction(){
  get "issue/$1/transitions"|`dirname $0`/jq-osx-amd64 ".transitions|map(select(.name ==\"Ready for QA\"))[0]"
}
