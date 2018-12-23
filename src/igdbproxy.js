const axios = require('axios');

class IgdbProxy {

  static get BASE_URL() { return 'https://api-v3.igdb.com'; }

  /**
   * Constructor for IgdbProxy.
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
      timeout: 1000
    });
  }

  async getGameByName(name) {
    const response = await this.client.post('/games', `
            fields name,url; 
            limit 5; 
            where name = "${name}";`);
    return response.data;
  }

}

module.exports = IgdbProxy;
