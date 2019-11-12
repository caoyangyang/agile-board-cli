#!/bin/sh
source "`dirname $0`/jira/issue.sh"
source "`dirname $0`/common.sh"


autoMoveToInDev(){
  cardNumber=`getCardNumberFromCommit`
  currentStatus=`getIssueStatus $cardNumber`
  isBeforeInDev=`isStatusBeforeInDev "$currentStatus"`
  echo $isBeforeInDev

  if [[ ("$currentStatus"!="In Dev") &&  ($isBeforeInDev -eq 1) ]]; then
    res=`moveIssueToInDev $cardNumber`
  fi
}

autoMoveToInDev