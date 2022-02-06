const { ip, port } = require('./config.js');
const { spawnPromise } = require('./utils.js');

async function proxyOn() {
  await spawnPromise('networksetup', ['-setwebproxystate', 'Wi-Fi', 'on', ip, port]);
  await spawnPromise('networksetup', ['-setsecurewebproxystate', 'Wi-Fi', 'on', ip, port]);
  await spawnPromise('networksetup', ['-setsocksfirewallproxystate', 'Wi-Fi', 'on', ip, port]);
}

async function proxyOff() {
  await spawnPromise('networksetup', ['-setwebproxystate', 'Wi-Fi', 'off']);
  await spawnPromise('networksetup', ['-setsecurewebproxystate', 'Wi-Fi', 'off']);
  await spawnPromise('networksetup', ['-setsocksfirewallproxystate', 'Wi-Fi', 'off']);
}


module.exports = {
  proxyOn,
  proxyOff
}