#!/bin/bash
output=$(node deploy/deploy.js --$TRAVIS_PULL_REQUEST="${TRAVIS_PULL_REQUEST}" --TRAVIS_BRANCH="${TRAVIS_BRANCH}" --SOURCE_BRANCH="${SOURCE_BRANCH}" --GITHUB_API_KEY="${GITHUB_API_KEY}" --REPO_REF="${REPO_REF}");
echo "$output";
