(function() {
  'use strict';

  angular
  .module('lcv2', [
    'ngRoute',
    'toastr',
    'satellizer',

    'event',
    'home',
    'login',
    'plaza',
    'settings',
    'trade',
    'tradeGroup',
    'tradeLink',
    'tradeProduct',
    'tradeType'
    ])
  .controller('Lcv2Controller', Lcv2Controller);

  Lcv2Controller.$inject = ['$rootScope', '$location', '$auth', 'toastr'];

  function Lcv2Controller($rootScope, $location, $auth, toastr) {

    var vm = this;

    vm.isAuthenticated = function() {
      return $auth.isAuthenticated();
    }

    vm.logout = function() {
      $auth.logout().then(function() {
        toastr.info('You have been logged out');
        $location.path('#!/login');
      });
    }

  }

})();

