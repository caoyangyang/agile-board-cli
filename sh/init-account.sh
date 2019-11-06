#!/bin/bash
echo "Start config your account"
read -p "type(jira/mingle): "  type
read -p "url: "  url
read -p "account name: "  name
read -p "password: "  password
echo  "$type\n$url\n$name\n$password" > ./account.profile
echo "Welcome $name! Now you can use abc"