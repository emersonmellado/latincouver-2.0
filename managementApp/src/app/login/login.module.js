(function() {
  'use strict';

  angular
       .module('login', [])
       .component('login', {
          templateUrl: 'app/login/login.template.html',
          controller: LoginController,
          controllerAs: 'vm'
       });

  LoginController.$inject = ['$rootScope', '$location'];

  function LoginController($rootScope, $location) {

    var vm = this;

    vm.loginForm;
    vm.login = login;

    function login() {

      vm.loginForm = {

      }

      $rootScope.logged = true;
      $location.path('#!/');
    }

  }

})();