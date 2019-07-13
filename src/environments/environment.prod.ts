export const environment = {
  production: true,

  apiURL:   'http://localhost:8080',//'https://lideragro-api.herokuapp.com',

  tokenWhitelistedDomains: [ new RegExp('localhost:8080') ],
  tokenBlacklistedRoutes: [ new RegExp('\/oauth\/token') ]
};
