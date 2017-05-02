(function() {
  'use strict';

  angular
  .module('lcv2')
  .service('eventsmockService', eventsmockService);

  eventsmockService.$inject = ['$rootScope', '$q'];

  function eventsmockService($rootScope, $q) {

    var service = {
      GetAll: getAll,
      Remove: remove,
      Update: update
    };

    return service;

    function getAll() {

      testList();
      return $q.when($rootScope.eventList);

    }

    function update(obj) {

      var item = $rootScope.eventList.find(x => x.id === obj.id);
      angular.copy(obj, item);
      return $q.when(true);
    }

    function remove(id) {

      var list = $rootScope.eventList;
      list.splice(list.findIndex(x => x.id === id), 1);
      return $q.when(true);
    }

    function testList() {

      if (!$rootScope.eventList) {

        $rootScope.eventList = [
          {
            id: 1,
            name: 'name',
            image_url: 'image_url',
            external_url: 'external_url',
            latitude: 'latitude',
            longitude: 'longitude',
            active: true
          },
          {
            id: 2,
            name: 'name2',
            image_url: 'image_url2',
            external_url: 'external_url2',
            latitude: 'latitude2',
            longitude: 'longitude2',
            active: true
          }
        ];
      }
    }

  }

})();