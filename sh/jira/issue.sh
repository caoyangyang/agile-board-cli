#!/bin/sh
source "`dirname $0`/jira/request.sh"


isStatusBeforeInDev(){
  statusIndex=`findIndex "$1"`

  inDevStatusIndex=`findIndex "In Dev"`
  if [ $statusIndex -lt $inDevStatusIndex ]; then
    echo true
   else
    echo false
   fi
}

getIssueStatus(){
  get "issue/$1"|`dirname $0`/jq-osx-amd64  '.fields.status.name'
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
  get "issue/$1/transitions"|`dirname $0`/jq-osx-amd64 ".transitions|map(select(.name ==\"Ready for QA\"))[0]"
}

findInDevTransaction(){
  get "issue/$1/transitions"|`dirname $0`/jq-osx-amd64 ".transitions|map(select(.name ==\"In Dev\"))[0]"
}


findIndex(){
my_array=("To Do","Business Analysis","Blocked","In Progress","Ready For Dev","In Dev","Ready for QA","In QA","Ready for uat","In UAT","Done")
value=$1

for i in "${!my_array[@]}"; do
   if [[ "${my_array[$i]}" = "${value}" ]]; then
       echo "${i}";
   fi
done
}
