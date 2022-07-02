require('dotenv').config();
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  const mySetUsername = process.env.USER_NAME;
  console.log(`My favorite food is ${mySetUsername}`);
  while(true) {
    console.log('Containers rule!');
    await sleep(5000);
  }
}
main();
