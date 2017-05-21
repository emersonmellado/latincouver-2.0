(function() {
  'use strict';

  function appInterceptor($q, $log, $injector, toastr) {
    return {
      request: function(config) {
        config.headers = config.headers || {};
        var AuthService = $injector.get('$auth');
        var token = AuthService.getToken();
        if (token) {
          config.headers.Authorization = token;
        }
        return config;
      },
      response: function(response) {
        return response || $q.when(response);
      },
      responseError: function(rejection) {
        if (rejection.status === 401) {
          toastr.error(rejection.statusText);
        }
        return false;
      }
    };
  }

  angular.module('lcv2').factory('appInterceptor', ['$q', '$log', '$injector', 'toastr', appInterceptor]);
})();


// angular.module('lcv2', ['myApp.services', 'myApp.directives'], function ($routeProvider, $locationProvider, $httpProvider, $location) {

//     var httpInterceptor = ['$rootScope', '$q', function (scope, $q) {

//         function success(response) {
//             return response;
//         }

//         function error(response) {
//             var status = response.status;

//             if (status == 401) {
//                 $location.url('/login');
//                 return;
//             }

//             return $q.reject(response);

//         }

//         return function (promise) {
//             return promise.then(success, error);
//         }

//     }];
//     $httpProvider.responseInterceptors.push(httpInterceptor);
// });
