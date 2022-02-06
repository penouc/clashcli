const spawn = require('child_process').spawn;

// wrap spawn in a promise
function spawnPromise(command, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args);
    let stdout = '';
    let stderr = '';
    child.stdout.on('data', (data) => {
      stdout += data;
      resolve(stdout);
    });
    child.stderr.on('data', (data) => {
      reject(data);
    });
    child.on('close', (code) => {
      if (code === 0) {
        resolve(stdout);
      } else {
        reject(stderr);
      }
    });
  });
}

module.exports = {
  spawnPromise
}