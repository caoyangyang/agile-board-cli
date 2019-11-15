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


findIndex(){
  #my_array=("To Do" "Business Analysis" "Blocked" "In Progress" "Ready For Dev" "In Dev" "Ready for QA" "In QA" "Ready for uat" "In UAT" "Done")
  statusString=`getStatusSequence`
  value=$1
  for i in "${!my_array[@]}"; do
     echo $i ${my_array[$i]}
     if [[ "${my_array[$i]}" = "${value}" ]]; then
       echo "${i}";
     fi
  done
}
