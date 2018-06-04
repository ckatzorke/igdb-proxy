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
      fields: [
        'id', 'name', 'slug', 'url', 'created_at', 'updated_at', 'summary', 'first_release_date', 'release_dates', 'time_to_beat', 'cover', 'screenshots', 'videos', 'websites', 
        'platforms.name', 'platforms.slug', 'platforms.url', 'platforms.logo', 'platforms.created_at', 'platforms.updated_at',
        'genres.name', 'genres.slug', 'genres.url', 'genres.created_at', 'genres.updated_at'],
      expand: ['platforms', 'genres'],
      limit: 10,
      offset: 0,
      search: search
    });
  }
  return {
    "result": result
  };
};
