export const environment = {
  production: true,

  apiURL:  'https://lideragro-api.herokuapp.com',

  tokenWhitelistedDomains: [ new RegExp('lideragro-api.herokuapp.com') ],
  tokenBlacklistedRoutes: [ new RegExp('\/oauth\/token') ]
};
