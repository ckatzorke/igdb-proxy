const client = require('igdb-api-node').default();
/**
 * A simple search against igdb
 * @param {string} search what are you searching
 * @returns {object}
 */
module.exports = async (search, context) => {
  let result = null;
  if (search.trim() !== '') {
    result = await client.games({
      fields: '*',
      limit: 5,
      offset: 0,
      search: search
    });
  }
  return {
    "result": result
  };
};
