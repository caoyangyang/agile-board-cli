#!/bin/sh
source "`dirname $0`/jira/issue.sh"
source "`dirname $0`/common.sh"


moveDevDone(){
  cardNumber=`getCardNumberFromCommit`
  currentStatus=`getIssueStatus $cardNumber`
  if [ "$currentStatus"="In Dev" ]; then
    res=`moveIssueToDevDone $cardNumber`
    echo $res
  fi
}

moveDevDone