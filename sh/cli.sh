#!/bin/sh

initAccount() {
   sh "`dirname $0`/init-account.sh"
}

moveCardInDev() {
   sh "`dirname $0`/auto-move-to-indev.sh"
}

moveCardDevDone() {
   sh "`dirname $0`/dev-done.sh"
}

addHook() {
    sh "`dirname $0`/add-commit-msg-hook.sh"
}

configCardStatus(){
  vi "`dirname $0`/jira/status.json"
}

displayUsage(){
  echo "you can run cli with parameters [init | inDev | devDone | addHook | configStatus]"
}


case "$1" in
    init)
        initAccount
        ;;
    inDev)
        moveCardInDev
        ;;
    devDone)
        moveCardDevDone
        ;;
    addHook)
        addHook
        ;;
    configStatus)
        configCardStatus
        ;;
    *)
        displayUsage
        exit -1
esac
