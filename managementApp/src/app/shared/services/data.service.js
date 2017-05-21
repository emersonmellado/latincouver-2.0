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

      errorMsg = "Error getting all " + apiEndpointName;

      return $http
      .get(url(apiEndpointName))
      .then(handleSuccess)
      .catch(handleError);
    }

    function remove(apiEndpointName, obj) {

      console.log('delete ' + url(apiEndpointName) + "/" + obj.id)

      errorMsg = "Error removing " + apiEndpointName;

      return $http
      .delete(url(apiEndpointName) + "/" + obj.id)
      .then(handleSuccess)
      .catch(handleError);

    }

    function update(apiEndpointName, obj) {

      errorMsg = "Error updating " + apiEndpointName;

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
      return res.data;
    }

    function handleError(error) {
      return {
        success: false,
        message: errorMsg
      };
    }

  }

})();