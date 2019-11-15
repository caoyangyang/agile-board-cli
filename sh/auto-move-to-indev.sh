#!/bin/sh
source "`dirname $0`/jira/issue.sh"
source "`dirname $0`/common.sh"


autoMoveToInDev(){
  cardNumber=`getCardNumberFromCommit`
  currentStatus=`getIssueStatus $cardNumber`

  inDevStatus=`getInDevStatus`

  statusIndex=`findIndex "$currentStatus"`
  inDevStatusIndex=`findIndex "$inDevStatus"`

  if [[ ("$currentStatus"!="$inDevStatus")  ]]; then
    res=`moveIssueToInDev $cardNumber`
  fi
}

autoMoveToInDev