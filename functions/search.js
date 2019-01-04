const IgdbProxy = require('../src/igdbproxy');

/**
* Searches for a game on IGDB
* @param {string} search the search string to search for
* @returns {object}
*/
module.exports = async (search, context) => {
  let result = null;
  if (search.trim() !== '') {
    const client = new IgdbProxy(process.env.API_KEY);
    result = await client.getGameByName(search);
  }
  return {
    result
  };
};
