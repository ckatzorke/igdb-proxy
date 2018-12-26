# igdb-proxy

A simple proxy specific igdb operations.

## Usage

You need to provide your api key to run the main index.js. To get one, visit https://api.igdb.com/.

```bash
API_KEY=your-api-key node index.js "Your game name"
```

## Deploy

### DEV

Changes on master will be deployed on dev environment (stdlib@dev).

## RELEASE

When done, use `npm version patch` and `git push --tags`to deploy this version to stdlib@release.
