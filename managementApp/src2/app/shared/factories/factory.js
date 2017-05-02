(function() {
  'use strict';

  function appInterceptor($q, $log, $injector) {
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
        $log.debug('Error', rejection);
      }
    };
  }

  angular.module('lcv2').factory('appInterceptor', ['$q', '$log', '$injector', appInterceptor]);
})();