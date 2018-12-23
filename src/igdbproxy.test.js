const nock = require('nock');
const IgdbProxy = require('./igdbproxy');

function preflight(path) {
  nock(IgdbProxy.BASE_URL).options(path).reply(200, null, {
    'content-type': 'application/json',
    'access-control-allow-origin': '*',
    'access-control-allow-methods': 'POST, GET',
    'access-control-allow-credentials': 'true',
    'access-control-allow-headers': 'user-key'
  });
}

describe('Test good path', () => {
  test('Search for "Dark Souls: Remastered" returns game with id 81085', async () => {
    // setup
    preflight('/games');
    nock(IgdbProxy.BASE_URL).post('/games').reply(200, [{
      id: 81085,
      name: 'Dark Souls: Remastered',
      url: 'https://www.igdb.com/games/dark-souls-remastered'
    }]);
    // when looking for a specific game
    const igdb = new IgdbProxy('apikey');
    const result = await igdb.getGameByName('Dark Souls: Remastered');
    // the result should match
    expect(result[0].id).toBe(81085);
  });
});


