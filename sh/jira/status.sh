#!/bin/sh
source ~/.bash_profile

BASEDIR=$(dirname "$0")
statusJsonFile="$BASEDIR/jira/status.json"

getStatusSequence(){
 jq -r '.statusSequence[]' $statusJsonFile
}

getInDevStatus(){
  echo `jq -r '.inDev' $statusJsonFile`
}

getDevDoneStatus(){
  echo `jq -r '.devDone' $statusJsonFile`
}