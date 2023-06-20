#!/bin/bash

echo -e "\033[0;32mDeploying updates to laomai...\033[0m"
msg="rebuilding site `TZ=UTC-8 date +%Y-%m-%d" "%H:%M:%S`"
if [ $# -eq 1 ]
then msg="$1"
fi

cd /home/nas/laomai/laomaiorg
git fetch --all
git reset --hard nas/main

rm -rf /home/nas/laomai/laomaiorg/content/diary
rm -rf /home/nas/laomai/laomaiorg/content/post

cp -r /home/nas/laomai/obtohugo/diary /home/nas/laomai/laomaiorg/content
cp -r /home/nas/laomai/obtohugo/post /home/nas/laomai/laomaiorg/content

git add .
git commit -m "$msg"
git push -u --force github main
