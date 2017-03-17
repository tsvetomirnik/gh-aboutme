/* eslint-env node, es6 */
"use strict";

var runner = require('./task-runner');

// Args
var args = process.argv.slice(2);
var TRAVIS_PULL_REQUEST = undefined;
var TRAVIS_BRANCH = undefined;
var SOURCE_BRANCH = undefined;
var GITHUB_API_KEY = undefined;
var REPO_REF = undefined;

var tasks = [
  new runner.Task('Install yargs package globally', function () {
    return runner.runCommand('npm install -g yargs');
  }),
  new runner.Task('Get args', function () {
    var argv = require('yargs').argv;
    return new Promise(function (resolve, reject) {

      TRAVIS_PULL_REQUEST = argv.TRAVIS_PULL_REQUEST;
      if (typeof TRAVIS_PULL_REQUEST === 'undefined') {
        reject('TRAVIS_PULL_REQUEST argument is not set.');
        return;
      }

      TRAVIS_BRANCH = argv.TRAVIS_BRANCH;
      if (typeof TRAVIS_BRANCH === 'undefined') {
        reject('TRAVIS_BRANCH argument is not set.');
        return;
      }

      SOURCE_BRANCH = argv.SOURCE_BRANCH;
      if (typeof SOURCE_BRANCH === 'undefined') {
        reject('SOURCE_BRANCH argument is not set.');
        return;
      }

      GITHUB_API_KEY = argv.GITHUB_API_KEY;
      if (typeof GITHUB_API_KEY === 'undefined') {
        reject('GITHUB_API_KEY argument is not set.');
        return;
      }

      REPO_REF = argv.REPO_REF;
      if (typeof REPO_REF === 'undefined') {
        reject('REPO_REF argument is not set.');
        return;
      }

      resolve();
    });
  }),
  new runner.Task('Open App Root folder', function () {
    return runner.runCommand('cd ..');
  }),
  new runner.Task(`Checkout ${SOURCE_BRANCH} branch`, function () {
    return runner.runCommand(`git checkout ${SOURCE_BRANCH}`);
  }),
  new runner.Task('Build application', function () {
    return runner.runCommand('ng build --prod --aot');
  }),
  new runner.Task('Open Dist folder', function () {
    return runner.runCommand('cd dist');
  }),
  new runner.Task('Init Repository', function () {
    return runner.runCommand('git init');
  }),
  new runner.Task('Set Git Config', function () {
    // Subtask
    return runner.runTasks([
      new runner.Task('git config set name', function () {
        return runner.runCommand('git config user.name "Travis-CI"');
      }),
      new runner.Task('git config set email', function () {
        return runner.runCommand('git config user.email "travis@nodemeatspace.com"');
      }),
    ]);
  }),
  new runner.Task('Push to Repository', function () {
    // Subtask
    return runner.runTasks([
      new runner.Task('Stage changed files', function () {
        return runner.runCommand('git add .');
      }),
      new runner.Task('Make a commit', function () {
        return runner.runCommand('git commit -m "Deployed"');
      }),
      new runner.Task('Push to repository', function () {
        return runner.runCommand(`git push --force --quiet "https://${GITHUB_API_KEY}@${REPO_REF}" master`);
      }),
      new runner.Task('Push to repository', function () {
        return runner.runCommand(`git push --force --quiet "https://${GITHUB_API_KEY}@${REPO_REF}" gh-pages`);
      }),
    ]);
  }),
];

runner.runTasks(tasks).then(function () {
  // Success
  process.exit(0);
});
