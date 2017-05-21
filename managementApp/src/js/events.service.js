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
            return $http.post(url(), serializeObj_toSave(obj)).then(handleSuccess, handleError("Error creating " + singularName));
        }

        function update(obj) {
            return $http.put(url() + "/" + obj.id, serializeObj(obj)).then(handleSuccess, handleError("Error updating " + singularName));
        }

        function remove(id) {
            return $http.delete(url() + "/" + id).then(handleSuccess, handleError("Error deleting " + singularName));
        }
        // var values = {name: 'misko', gender: 'male'};
        // expect(log).toEqual(['name: misko', 'gender: male']);        
        // private functions 
        function serializeObj(obj) {
            var log = [];
            angular.forEach(obj.attributes, function(value, key) {
                this.push(key + ': ' + value);
            }, log);

            var objSerialized = {
                "event": {
                    "name": obj.attributes.name,
                    "image_url": obj.attributes['image-url'],
                    "external_url": obj.attributes['external-url'],
                    "longitude": obj.attributes.longitude,
                    "latitude": obj.attributes.latitude,
                    "active": obj.attributes.active,
                    "css-style-id": obj.attributes["css-style-id"],
                    "user-id": obj.attributes["user-id"]
                }
            };
            return objSerialized;
        }
        function serializeObj_toSave(obj) {
            var objSerialized = {
                "event": {
                    "name": obj.attributes.name,
                    "image_url": obj.attributes['image-url'],
                    "external_url": obj.attributes['external-url'],
                    "longitude": obj.attributes.longitude,
                    "latitude": obj.attributes.latitude,
                    "active": obj.attributes.active,
                    "css_style_id": obj.attributes["css-style-id"],
                    "user_id": obj.attributes["user-id"]
                }
            };
            return objSerialized;
        }        

        function url() {
            return Api.URL_API + apiEndpointName;
        }

        function handleSuccess(res) {
            console.log("res", res.data);
            return res.data.data;
        }

        function handleError(error) {
            console.log("error", error);
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