GIT_REPO_DIR=`git rev-parse --show-toplevel`
HOOK_SHELL_FILE_PATH=`dirname $0`/auto-move-to-indev.sh
echo $HOOK_SHELL_FILE_PATH
FILE=$GIT_REPO_DIR/.git/hooks/commit-msg

if [ -f "$FILE" ]; then
   if grep -q "sh $HOOK_SHELL_FILE_PATH" $FILE; [ $? -eq 0 ]; then
     echo "current hook already existed"
   else
     echo "current hook not existed, add it"
     echo "sh $HOOK_SHELL_FILE_PATH" >> $FILE
   fi
else
   echo "sh $HOOK_SHELL_FILE_PATH" >> $FILE
   echo "commit-msg hook does not exist, will create new commit hook"
fi

