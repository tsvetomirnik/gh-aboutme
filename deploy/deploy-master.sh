#!/bin/bash
git checkout develop
rm -rf dist || exit 0
mkdir dist
ng build --prod --aot
(
  cd dist
  git init
  git config user.name "Travis-CI"
  git config user.email "travis@nodemeatspace.com"
  git add .
  git commit -m "Deployed"
  git push --force --quiet "https://${GITHUB_API_KEY}@${REPO_REF}" master > /dev/null 2>&1
)