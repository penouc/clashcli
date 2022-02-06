const { ip, port } = require('./config.js');
const { spawnPromise } = require('./utils.js');

async function setProxyIpPort() {
  await spawnPromise('networksetup', ['-setwebproxy', 'Wi-Fi', ip, port]);
  await spawnPromise('networksetup', ['-setsecurewebproxy', 'Wi-Fi', ip, port]);
  await spawnPromise('networksetup', ['-setsocksfirewallproxy', 'Wi-Fi', ip, port]);
}

async function proxyOn() {
  await setProxyIpPort();
  await spawnPromise('networksetup', ['-setwebproxystate', 'Wi-Fi', 'on']);
  await spawnPromise('networksetup', ['-setsecurewebproxystate', 'Wi-Fi', 'on']);
  await spawnPromise('networksetup', ['-setsocksfirewallproxystate', 'Wi-Fi', 'on']);
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