(function() {
  'use strict';

  angular
    .module('lcv2')
    .service('dataService', DataService);

  DataService.$inject = ['$http', 'Api'];

  function DataService($http, Api) {

    //Change this vars for a new base service on Rails
    var singularName = "event";
    var pluralName = "events";
    var apiEndpointName = "events";
    //

    var errorMsg;

    var service = {
      Create: create,
      GetAll: getAll,
      Remove: remove,
      Update: update
    };

    return service;

    function create(apiEndpointName, obj) {

      errorMsg = "Error creating " + singularName;

      return $http
        .post(url(apiEndpointName), obj)
        .then(handleSuccess)
        .catch(handleError);

    }

    function getAll(apiEndpointName) {

      errorMsg = "Error getting all " + pluralName;

      return $http
        .get(url(apiEndpointName))
        .then(handleSuccess)
        .catch(handleError);
    }

    function remove(apiEndpointName, obj) {

      console.log('delete ' + url(apiEndpointName) + "/" + obj.id)

      errorMsg = "Error removing " + singularName;

      return $http
        .delete(url(apiEndpointName) + "/" + obj.id)
        .then(handleSuccess)
        .catch(handleError);

    }

    function update(apiEndpointName, obj) {

      errorMsg = "Error updating " + singularName;

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