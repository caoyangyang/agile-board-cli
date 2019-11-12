#!/bin/sh

getCardNumberFromCommit(){
 commitMessage=`git log -1 --pretty=format:"%s" && git rev-parse --abbrev-ref HEAD  && git tag --contains HEAD`
  local REGEX='WEB-[0-9]*'
#  commitMessage="[WEB-1212]:feat init"
  if [[ ! $commitMessage =~ $REGEX ]]; then
    echo "Aborting commit. Your commit message is missing card info"
    exit 1
  fi
   cardNumber=`echo "$commitMessage" | grep "$REGEX" -o`
  echo $cardNumber
}