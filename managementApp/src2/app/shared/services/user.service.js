(function() {
  "use strict";

  function UserService($http, Api) {

    var service = {};

    service.GetAll = getAll;
    service.Create = create;
    service.Update = update;
    service.Remove = remove;
    service.GetCurrent = getCurrent;
    service.GetNext = getNext;

    return service;

    function getAll() {
      return $http.get(url()).then(handleSuccess, handleError("Error getting all users"));
    }

    function getCurrent() {
      return $http.get(urlApi() + "/current").then(handleSuccess, handleError("Error getting current integer"));
    }

    function getNext() {
      return $http.get(urlApi() + "/next").then(handleSuccess, handleError("Error getting next integer"));
    }

    function create(user) {
      return $http.post(url(), serializeUser(user)).then(handleSuccess, handleError("Error creating user"));
    }

    function update(user) {
      return $http.put(url() + "/" + user.id, serializeUser(user)).then(handleSuccess, handleError("Error updating user"));
    }

    function remove(id) {
      return $http.delete(url() + "/" + id).then(handleSuccess, handleError("Error deleting user"));
    }

    // private functions
    function serializeUser(user) {
      var obj = {
        "user": {
          "email": user.attributes.email,
          "integer": user.attributes.integer,
          "password": user.attributes.password
        }
      };
      return obj;
    }

    function urlApi() {
      return Api.URL_API;
    }

    function url() {
      return Api.URL_API + '/users';
    }

    function handleSuccess(res) {
      return res.data.data;
    }

    function handleError(error) {
      return function() {
        return {
          success: false,
          message: error
        };
      };
    }
  }

  angular.module("lcv2").factory("UserService", UserService);
})();