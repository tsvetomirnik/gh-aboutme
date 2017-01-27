var exec = require('child_process').exec;

function Task(description, source) {
  this.description = description;
  this.source = source;
}

function runTasks(tasks) {
  var sequence = Promise.resolve();
  tasks.forEach(function (task) {
    sequence = sequence.then(function () {
      console.log('TASK: ' + task.description);
      return task.source();
    }, function (error) {
      // Fail
      console.log('ERROR: ' + error);
      process.exit(1);
    });
  });

  sequence.then(function () {
    // Success
    process.exit(0);
  });

  return sequence;
}

function runCommand(command) {
  return new Promise(function (resolve, reject) {
    exec(command, function (error, stdout, stderr) {
      if (error) {
        reject(stderr);
        return;
      }
      resolve(stdout);
    });
  });
}

module.exports = {
  Task: Task,
  runTasks: runTasks,
  runCommand: runCommand
}
