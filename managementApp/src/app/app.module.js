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
      'user'
    ])
    .controller('Lcv2Controller', Lcv2Controller);

  Lcv2Controller.$inject = ['$rootScope', '$location'];

  function Lcv2Controller($rootScope, $location) {

    var vm = this;

    vm.isLoaded = isLoaded;
    vm.isAuthenticated = isAuthenticated;
    vm.logout = logout;

    activate();

    function activate() {
      $rootScope.logged = true;
      $rootScope.loaded = true;
    }

    function isLoaded() {
      return $rootScope.loaded;
    }

    function isAuthenticated() {
      return $rootScope.logged;
    }

    function logout() {
      $rootScope.logged = false;
      $location.path('#!/login');
    }


  }

})();

