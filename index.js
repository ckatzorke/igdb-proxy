const IgdbProxy = require('./src/igdbproxy');

// call: API_KEY=yourapikey node index.js "GAME name"

async function doIt() {
  const igdb = new IgdbProxy(process.env.API_KEY);
  const data = await igdb.getGameByName(process.argv[2]);
  console.log('DATA: ', data);
}

doIt();
