angular
.module('lcv2')
.config(['$locationProvider', '$routeProvider', '$authProvider', '$httpProvider', 'Api', 'toastrConfig', config]);

function config($locationProvider, $routeProvider, $authProvider, $httpProvider, Api, toastrConfig) {

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

  // Set options third-party lib
  toastrConfig.allowHtml = true;
  toastrConfig.timeOut = 3000;
  toastrConfig.positionClass = 'toast-top-right';
  toastrConfig.preventDuplicates = false;
  toastrConfig.progressBar = true;

}
