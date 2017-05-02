(function() {
  'use strict';

  angular
    .module('home', [])
    .component('home', {
      templateUrl: 'app/home/home.template.html',
      controller: HomeController,
      controllerAs: 'vm'
    });

  HomeController.$inject = ['$rootScope', 'Api'];

  function HomeController($rootScope) {

    var vm = this;

  }

})();