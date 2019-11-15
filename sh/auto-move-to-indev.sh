#!/bin/sh
source "`dirname $0`/jira/issue.sh"
source "`dirname $0`/common.sh"


autoMoveToInDev(){
  cardNumber=`getCardNumberFromCommit`
  currentStatus=`getIssueStatus $cardNumber`

  inDevStatus=`getInDevStatus`

  statusIndex=`findIndex "$currentStatus"`
  inDevStatusIndex=`findIndex "$inDevStatus"`

  if [[ ($statusIndex -lt $inDevStatusIndex) ]]; then
    res=`moveIssueToInDev $cardNumber`
    echo "auto move card $cardNumber to in dev"
  fi
}

autoMoveToInDev