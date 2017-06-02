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
  .when('/trade', {
    template: '<trade></trade>'
  })
  .when('/trade-link', {
    template: '<trade-link></trade-link>'
  })
  .when('/trade-group', {
    template: '<trade-group></trade-group>'
  })
  .when('/trade-product', {
    template: '<trade-product></trade-product>'
  })
  .when('/trade-type', {
    template: '<trade-type></trade-type>'
  })
  .when('/user', {
   template: '<user></user>'
 })
  .otherwise('/');
}
