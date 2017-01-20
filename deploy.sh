#!/bin/bash
set -e # Exit with nonzero exit code if anything fails

function doPush {
  echo "Pushing to GitHub."
  cd dist
  git init
  git config user.name "Travis-CI"
  git config user.email "travis@nodemeatspace.com"
  git add .
  git commit -m "Deployed"
  git push --force --quiet "https://${GITHUB_API_KEY}@${REPO_REF}" master > /dev/null 2>&1
}

if [[ $TRAVIS_BRANCH == $SOURCE_BRANCH ]]
  git checkout develop
  rm -rf dist || exit 0
  mkdir dist
  echo "Build starting."
  ng build --prod --aot

  doPush
  exit 0
fi

