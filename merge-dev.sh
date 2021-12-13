#!/bin/bash

branch=`git rev-parse --abbrev-ref HEAD`
if [ $branch != 'dev' ] && [ $branch != 'master' ]; then
git checkout dev && git pull && git merge ${branch} --no-edit && git push && git checkout $branch
fi
