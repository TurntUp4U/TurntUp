
module.exports = {
  TOKEN_SECRET: process.env.TOKEN_SECRET || 'A hard to guess string',
  MONGO_URI: process.env.MONGOLAB_URI || process.env.MONGO_URI || 'mongodb://localhost:27017/test',
  FACEBOOK_SECRET: process.env.FACEBOOK_SECRET || 'Facebook App Secret',
  FOURSQUARE_SECRET: process.env.FOURSQUARE_SECRET || 'Foursquare Client Secret',
  GOOGLE_SECRET: process.env.GOOGLE_SECRET || '7TNXN9ehsWqvYc1lXJaTQub0',
  GITHUB_SECRET: process.env.GITHUB_SECRET || 'GitHub Client Secret',
  LINKEDIN_SECRET: process.env.LINKEDIN_SECRET || 'LinkedIn Client Secret',
  WINDOWS_LIVE_SECRET: process.env.WINDOWS_LIVE_SECRET || 'Windows Live Secret',
  TWITTER_KEY: process.env.TWITTER_KEY || 'haDIT3g6K93wvEEM5rJ5mjU6p',
  TWITTER_SECRET: process.env.TWITTER_SECRET || 'aSFaNIblHF53k7idkrtMS4XEGyWZPVNBkMpPIEh8tSKYAvOlY0',
  TWITTER_CALLBACK: process.env.TWITTER_CALLBACK || 'http://127.0.0.1:3000',
  YAHOO_SECRET: process.env.YAHOO_SECRET || 'Yahoo Client Secret'
};
