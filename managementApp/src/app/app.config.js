angular
   .module('lcv2')
   .config(config);

function config($locationProvider, $routeProvider) {

   $locationProvider.hashPrefix('!');

   $routeProvider
      .when('/', {
         resolve: {
            function($location, $rootScope) {
               if (!$rootScope.logged) {
                   $location.path('/login');
               }
            }
         },
         template: '<home></home>'
      })
      .when('/login', {
         resolve: {
            function($location, $rootScope) {
               if (!$rootScope.logged) {
                   $location.path('/login');
               }
            }
         },
         template: '<login></login>'
      })
      .when('/event', {
         resolve: {
            function($location, $rootScope) {
               if (!$rootScope.logged) {
                   $location.path('/login');
               }
            }
         },
         template: '<event></event>'
      })
      .when('/plaza', {
         resolve: {
            function($location, $rootScope) {
               if (!$rootScope.logged) {
                   $location.path('/login');
               }
            }
         },
         template: '<plaza></plaza>'
      })
      .when('/user', {
         resolve: {
            function($location, $rootScope) {
               if (!$rootScope.logged) {
                   $location.path('/login');
               }
            }
         },
         template: '<user></user>'
      })
      .otherwise('/');

   // configure html5 to get links working on jsfiddle
   //$locationProvider.html5Mode(true);

   function testLogged() {
      console.log('testing if logged');
   }

}
