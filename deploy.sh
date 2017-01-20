#!/bin/bash

echo $TRAVIS_BRANCH;
if [ $TRAVIS_BRANCH == $SOURCE_BRANCH ]
then
  git checkout develop
  rm -rf dist || exit 0
  mkdir dist
  echo "Build starting."
  ng build --prod --aot

  echo "Pushing to GitHub."
  cd dist
  git init
  git config user.name "Travis-CI"
  git config user.email "travis@nodemeatspace.com"
  git add .
  git commit -m "Deployed"
  git push --force --quiet "https://${GITHUB_API_KEY}@${REPO_REF}" master > /dev/null 2>&1
fi
