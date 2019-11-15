#!/bin/sh
source "`dirname $0`/jira/request.sh"
source ~/.bash_profile
isStatusBeforeInDev(){
  inDevStatus="In Dev"
  currentStatus=`echo "$1" | tr -d '"'`
  statusIndex=`findIndex "$currentStatus"`
  inDevStatusIndex=`findIndex "$inDevStatus"`

  if [ $statusIndex -lt $inDevStatusIndex ]; then
    echo 1
   else
    echo 0
   fi
}

getIssueStatus(){
  get "issue/$1"|jq '.fields.status.name'
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
  get "issue/$1/transitions"|jq ".transitions|map(select(.name ==\"Ready for QA\"))[0]"
}

findInDevTransaction(){
  get "issue/$1/transitions"|jq ".transitions|map(select(.name ==\"In Dev\"))[0]"
}


findIndex(){
my_array=("To Do" "Business Analysis" "Blocked" "In Progress" "Ready For Dev" "In Dev" "Ready for QA" "In QA" "Ready for uat" "In UAT" "Done")
value=$1

for i in "${!my_array[@]}"; do
   if [[ "${my_array[$i]}" = "${value}" ]]; then
       echo "${i}";
   fi
done
}
