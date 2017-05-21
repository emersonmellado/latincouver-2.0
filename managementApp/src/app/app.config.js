angular
.module('lcv2')
.config(['$locationProvider', '$routeProvider', '$authProvider', '$httpProvider', 'Api', config]);

function config($locationProvider, $routeProvider, $authProvider, $httpProvider, Api) {

  $authProvider.httpInterceptor = function() { return true; }
  $authProvider.withCredentials = false;
  $authProvider.tokenRoot = null;
  $authProvider.baseUrl = '/';
  $authProvider.loginUrl = Api.URL_API + '/authenticate';
  $authProvider.tokenName = 'auth_token';
  $authProvider.tokenPrefix = 'satellizer';
  $authProvider.tokenHeader = 'Authorization';
  $authProvider.tokenType = 'Bearer';
  $authProvider.storageType = 'localStorage';

  $httpProvider.interceptors.push('appInterceptor');

}
