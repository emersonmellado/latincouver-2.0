(function() {
  'use strict';

  angular
  .module('login', [])
  .component('login', {
    templateUrl: 'app/login/login.template.html',
    controller: LoginController,
    controllerAs: 'vm'
  });

  LoginController.$inject = ['$rootScope', 'toastr', '$location', '$auth', 'Api'];

  function LoginController($rootScope, toastr, $location, $auth, Api) {

    var vm = this;

    vm.loginForm;
    vm.login = login;

    function login() {

      var opts = {
        url: Api.URL_API + 'authenticate',
        method: 'POST'
      }

      $auth.login(vm.loginForm, opts).then(function(data) {
        console.log("data", data);
        if (angular.isUndefined(data)) {
          toastr.warning('Email or Password incorrect');
        }
        $rootScope.logged = true;
        $location.path('#!/');
      }).catch(function(error) {
        toastr.warning('Email or Password incorrect');
      });
    }

  }

})();
