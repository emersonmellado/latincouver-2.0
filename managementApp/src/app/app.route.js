angular
.module('lcv2')
.config(['$locationProvider', '$routeProvider', routes]);

function routes($locationProvider, $routeProvider) {
  'use strict';
  $locationProvider.hashPrefix('!');

  var _cssStyleWrapper = ['$q', 'dataService', function ($q, dataService) {
    var deferred = $q.defer();
    dataService.GetAll("css-styles").then(function (data) {
      deferred.resolve(data);
    }, function (notEnabled) {
      deferred.reject(notEnabled);
      $state.go('error.405');
    });
    return deferred.promise;
  }];

  $routeProvider
  .when('/', {
   template: '<home></home>'
 })
  .when('/login', {
    template: '<login></login>'
  })
  .when('/event', {
    template: '<event></event>',
    resolve : {
      style : ['$q', 'dataService', function ($q, dataService) {
        var deferred = $q.defer();
        dataService.GetAll("css-styles").then(function (data) {
          deferred.resolve(data);
        }, function (notEnabled) {
          deferred.reject(notEnabled);
          $state.go('error.405');
        });
        return deferred.promise;
      }]
    }
  })
  .when('/plaza', {
    template: '<plaza></plaza>'
  })
  .when('/user', {
   template: '<user></user>'
 })
  .otherwise('/');
}
