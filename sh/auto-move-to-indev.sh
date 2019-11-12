#!/bin/sh
source "`dirname $0`/jira/issue.sh"
source "`dirname $0`/common.sh"


autoMoveToInDev(){
#  cardNumber=`getCardNumberFromCommit`
  cardNumber="WEB-1220"
  currentStatus=`getIssueStatus $cardNumber`
  isBeforeInDev=`isStatusBeforeInDev "$currentStatus"`
  echo $isBeforeInDev
  if [[ ("$currentStatus"!="In Dev") &&  ($isBeforeInDev -eq 1) ]]; then
    res=`moveIssueToInDev $cardNumber`
  fi
}

autoMoveToInDev