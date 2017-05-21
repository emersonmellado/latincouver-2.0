(function() {
  'use strict';

  angular
  .module('event', [])
  .component('event', {
    templateUrl: 'app/event/event.template.html',
    controller: EventController,
    controllerAs: 'vm'
  });

  EventController.$inject = ['$log', 'toastr', 'dataService'];

  function EventController($log, toastr, dataService) {

    //Change this vars for a new base service on Rails
    var apiEndpointName = "events";
    //

    var errorMsg;
    var completeMsg;

    var vm = this;

    vm.editing = false;
    vm.error = false;
    vm.form;
    vm.data;
    vm.auth_token = 'auth_token';

    vm.title = "Event Management";
    vm.add = add;
    vm.remove = remove;
    vm.edit = edit;
    vm.save = save;
    vm.modelOptions = {
      updateOn: "blur default",
      debounce: {
        default: 300,
        blur: 0
      }
    }

    activate();

    function activate() {

      vm.form = {};
      vm.editing = false;
      errorMsg = 'error accessing ' + apiEndpointName + '!';
      completeMsg = '';

      return dataService.GetAll(apiEndpointName)
      .then(getAllComplete)
      .catch(dataFailed);

      function getAllComplete(response) {
        if(response.success === false) {
          dataFailed(response.message);
        } else {
          vm.data = response.data;
        }
      }

    }

    function add() {
      vm.form = {
        id: 0,
        cssStyleId: 0,
        name: '',
        date: new Date(),
        imageUrl: '',
        externalUrl: '',
        longitude: 0,
        latitude: 0,
        active: true
      };
      vm.editing = true;
    }

    function edit(obj, index) {
      vm.form = angular.copy(obj);
      vm.form.index = index;
      vm.editing = true;
    }

    function remove(obj) {

      errorMsg = 'error removing event!';
      completeMsg = 'Sucesfully removed!';

      return dataService.Remove(apiEndpointName, obj)
      .then(dataComplete)
      .catch(dataFailed);
    }

    function save(obj) {

      errorMsg = 'error saving' + apiEndpointName;
      completeMsg = 'All data sucesfully saved!';
      
      console.log("obj", obj);

      if (obj.id) {

        return dataService.Update(apiEndpointName, obj)
        .then(dataComplete)
        .catch(dataFailed);

      } else {

        return dataService.Create(apiEndpointName, obj)
        .then(dataComplete)
        .catch(dataFailed);

      }

    }

    function serializeAttributes(obj){
      var ret = obj.attributes.replace(/-/g, '_');
      console.log("ret", ret);
      return ret;
    }

    function dataComplete(response) {
      if(response.success === false) {
        dataFailed(response.message);
      } else {
        if (completeMsg) toastr.info(completeMsg);
        activate();
      }
    }

    function dataFailed(error) {
      console.log(error.message);
      $log.debug("error:" + error.message);
      toastr.error(errorMsg);
    }

  }

})();