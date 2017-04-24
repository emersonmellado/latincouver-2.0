(function() {
    "use strict";

    function EventsService($http, Api) {
        //Change this vars for a new base service
        var singularName = "event";
        var pluralName = "events";
        var apiEndpointName = "events";
        //      
        var service = {};
        service.GetAll = getAll;
        service.Create = create;
        service.Update = update;
        service.Remove = remove;
        return service;

        function getAll() {
            console.log("url()", url());
            return $http.get(url()).then(handleSuccess, handleError("Error getting all " + pluralName));
        }

        function create(obj) {
            return $http.post(url(), obj).then(handleSuccess, handleError("Error creating " + singularName));
        }

        function update(obj) {
            return $http.put(url() + "/" + obj.id, obj).then(handleSuccess, handleError("Error updating " + singularName));
        }

        function remove(id) {
            return $http.delete(url() + "/" + id).then(handleSuccess, handleError("Error deleting " + singularName));
        }
        // private functions 
        function url() {
            return Api.URL_API + apiEndpointName;
        }

        function handleSuccess(res) {
            return res.data;
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
    angular.module("lcv2").factory("EventsService", EventsService);
})();