(function() {
    'use strict';

    function config($stateProvider, $urlRouterProvider) {
        var homeState = {
            name: 'home',
            url: '/',
            templateUrl: 'views/home.html'
        }
        var eventsState = {
            name: 'events',
            url: '/events',
            controller: 'EventsController',
            controllerAs: 'event',
            templateUrl: 'views/events.html'
        }
        $stateProvider.state(homeState);
        $stateProvider.state(eventsState);
        // $urlRouterProvider.when('/', '/home');
        $urlRouterProvider.otherwise('/');
    }
    angular.module('lcv2').config(['$stateProvider', '$urlRouterProvider', config]);
})();