export const environment = {
  production: true,

 // apiURL:   'http://localhost:8080',
  apiURL:   'https://lideragro-api.herokuapp.com',

 // tokenWhitelistedDomains: [ new RegExp('localhost:8080') ],
  tokenWhitelistedDomains: [ new RegExp('lideragro-api.herokuapp.com') ],
  tokenBlacklistedRoutes: [ new RegExp('\/oauth\/token') ]
};
