#!/bin/sh
source "`dirname $0`/jira/issue.sh"
source "`dirname $0`/common.sh"


autoMoveDevDone(){
#  cardNumber=`getCardNumberFromCommit`
  cardNumber="WEB-1220"
  currentStatus=`getIssueStatus $cardNumber`
  if [ "$currentStatus"="In Dev" ]; then
    res=`moveIssueToDevDone $cardNumber`
    echo $res
  fi
}

autoMoveDevDone