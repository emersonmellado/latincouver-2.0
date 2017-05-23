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

(function() {
  'use strict';

  function cssStyle($q, dataService) {
    return {
      loadDropDown: function () {
        var deferred = $q.defer();
        dataService.GetAll("css-styles").then(function (data) {
          deferred.resolve(data);
        });
        return deferred.promise;
      }
    };
  }

  angular.module('lcv2').factory('cssStyle', ['$q', 'dataService', cssStyle]);
})();

(function() {
  'use strict';

  function events($q, dataService) {
    return {
      loadDropDown: function () {
        var deferred = $q.defer();
        dataService.GetAll("events").then(function (data) {
          deferred.resolve(data);
        });
        return deferred.promise;
      }
    };
  }

  angular.module('lcv2').factory('events', ['$q', 'dataService', events]);
})();
