const IgdbProxy = require('../src/igdbproxy');

/**
* Searches for a game on IGDB
* @param {string} search the search string to search for
* @param {number} limit the number of max results, default is 5
* @returns {object}
*/
module.exports = async (search, limit = 5, context) => {
  let result = null;
  if (search.trim() !== '') {
    const client = new IgdbProxy(process.env.API_KEY);
    result = await client.searchGame(search, limit);
  }
  return {
    result
  };
};
