const axios = require('axios');

class IgdbProxy {

  static get BASE_URL() { return 'https://api-v3.igdb.com'; }

  /**
   * Constructor for IgdbProxy.
   * Previously in v2:
   * fields: [
        'id', 'name', 'slug', 'url', 'created_at', 'updated_at', 'summary', 'first_release_date',
        'release_dates', 'time_to_beat', 'cover', 'screenshots', 'videos', 'websites',
        'platforms.name', 'platforms.slug', 'platforms.url', 'platforms.logo',
        'platforms.created_at', 'platforms.updated_at', 'genres.name', 'genres.slug', 'genres.url',
        'genres.created_at', 'genres.updated_at'],
      expand: ['platforms', 'genres'],
   * @param {string} igdbApiKey the api key from idgb.com
   */
  constructor(igdbApiKey) {
    this.client = axios.create({
      queryMethod: 'url',
      method: 'post',
      baseURL: IgdbProxy.BASE_URL,
      headers: {
        Accept: 'application/json',
        'user-key': igdbApiKey,
        'Content-Type': 'text/plain'
      },
      responseType: 'json',
      timeout: 2000
    });
  }

  async getGameByName(name) {
    const response = await this.client.post('/games', `
            fields name,url,cover; 
            limit 5; 
            where name = "${name}";`);
    return response.data;
  }

}

module.exports = IgdbProxy;
