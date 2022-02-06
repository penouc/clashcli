const {proxyOn, proxyOff} = require('./network.js');
const {spawnPromise} = require('./utils.js');

async function main() {
  const logs = await spawnPromise('./bin/clash');
  console.log('logs ====>', logs);
  await proxyOn();
}

main();

setInterval(
  async () => {
  }
, 1000)