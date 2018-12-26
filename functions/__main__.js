const IgdbProxy = require('../src/igdbproxy');
/**
 * A simple fetch of a game against igdb by gameName
 * @param {string} game the name of the game
 * @returns {object}
 */
module.exports = async (game, context) => {
  let result = null;
  if (game.trim() !== '') {
    const client = new IgdbProxy(process.env.API_KEY);
    result = await client.getGameByName(game);
  }
  return {
    result
  };
};
