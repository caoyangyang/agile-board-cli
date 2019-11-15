#!/bin/sh
source "`dirname $0`/jira/issue.sh"
source "`dirname $0`/jira/status.sh"
source "`dirname $0`/common.sh"

moveDevDone(){
  cardNumber=`getCardNumberFromCommit`
  currentStatus=`getIssueStatus $cardNumber`
  inDevStatus=`getInDevStatus`
  if [ "$currentStatus" = "$inDevStatus" ]; then
    res=`moveIssueToDevDone $cardNumber`
    echo "move card $cardNumber to dev done"
  fi
}


moveDevDone