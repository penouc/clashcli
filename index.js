const {proxyOn, proxyOff} = require('./network.js');
const {spawnPromise} = require('./utils.js');

async function main() {
  const logs = await spawnPromise('./bin/clash', ['']);
  console.log('logs:', logs);
  await proxyOn();
  process.stdout.write('proxy on\r');
  process.stdout.write('\r');
  process.stdout.write('\r\n');
}

main();

let flag = 0;
setInterval(
  async () => {

    if(flag === 0) {
      process.stdout.write('\r\x1b[K');
      process.stdout.write('\/');
      flag = 1
    } else if(flag === 1) {
      process.stdout.write('\r\x1b[K');
      process.stdout.write('-');
      flag = 2
    } else {
      process.stdout.write('\r\x1b[K');
      process.stdout.write('\\');
      flag = 0
    }
  }
, 120)
