(function() {
  'use strict';

  angular
  .module('lcv2')
  .service('dataService', DataService);

  DataService.$inject = ['$http', 'Api'];

  function DataService($http, Api) {

    var errorMsg;

    var service = {
      Create: create,
      GetAll: getAll,
      Remove: remove,
      Update: update
    };

    return service;

    function create(apiEndpointName, obj) {

      errorMsg = "Error creating " + apiEndpointName;

      return $http
      .post(url(apiEndpointName), obj)
      .then(handleSuccess)
      .catch(handleError);

    }

    function getAll(apiEndpointName) {

      return $http
      .get(url(apiEndpointName))
      .then(handleSuccess)
      .catch(handleError);
    }

    function remove(apiEndpointName, obj) {

      return $http
      .delete(url(apiEndpointName) + "/" + obj.id)
      .then(handleSuccess)
      .catch(handleError);
    }

    function update(apiEndpointName, obj) {

      return $http
      .put(url(apiEndpointName) + "/" + obj.id, obj)
      .then(handleSuccess)
      .catch(handleError);
    }

    // private functions
    function url(apiEndpointName) {
      return Api.URL_API + apiEndpointName;
    }

    function handleSuccess(res) {
      console.log(res);
      return res.data;
    }

    function handleError(error) {
      console.log(error);
      return {
        success: false,
        message: error
      };
    }

  }

})();
