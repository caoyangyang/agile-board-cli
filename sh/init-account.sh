#!/bin/sh
BASEDIR=$(dirname "$0")
export PATH=$PATH:$BASEDIR/bin/jq
echo "\n export PATH=\$PATH:$BASEDIR/bin/jq" >>  ~/.bash_profile
echo "\n alias jq='$BASEDIR/bin/jq'" >>  ~/.bash_profile
source ~/.bash_profile
echo "Start config your account"
read -p "type(jira/mingle): "  type
read -p "url: "  url
read -p "account name: "  name
read -p "password: "  password
echo  "{\n\"type\":\"$type\",\n\"url\":\"$url\",\n\"name\":\"$name\",\n\"password\":\"$password\"\n}" > $BASEDIR/jira/account.json
echo "Welcome $name! Now you can use abc（agile-board-cli）"