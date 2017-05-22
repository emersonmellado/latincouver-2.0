angular
.module('lcv2')
.config(['$locationProvider', '$routeProvider', routes]);

function routes($locationProvider, $routeProvider) {
  'use strict';
  $locationProvider.hashPrefix('!');

  $routeProvider
  .when('/', {
   template: '<home></home>'
 })
  .when('/login', {
    template: '<login></login>'
  })
  .when('/event', {
    template: '<event></event>'
  })
  .when('/plaza', {
    template: '<plaza></plaza>'
  })
  .when('/user', {
   template: '<user></user>'
 })
  .otherwise('/');
}
