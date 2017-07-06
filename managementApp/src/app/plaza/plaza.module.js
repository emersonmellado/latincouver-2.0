(function() {
  'use strict';

  angular
  .module('plaza', [])
  .component('plaza', {
    templateUrl: 'app/plaza/plaza.template.html',
    controller: PlazaController,
    controllerAs: 'vm'
  });

  PlazaController.$inject = ['$log', 'toastr', 'dataService', 'cssStyle', 'events'];

  function PlazaController($log, toastr, dataService, cssStyle, events) {

    //Change this vars for a new base service on Rails
    var singularName = "plaza";
    var pluralName = "plazas";
    var apiEndpointName = "plazas";
    var errorMsg;
    var completeMsg;
    //

    var vm = this;

    vm.editing = false;
    vm.error = false;
    vm.form;
    vm.data;
    vm.auth_token = 'auth_token';

    vm.title = "Plaza Management";
    vm.add = add;
    vm.cancel = cancel;
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

    cssStyle.loadDropDown().then(function(res){
      vm.cssStyle = [];
      angular.forEach(res.data, function(attributes){
        var opt = {
          css_style_id: attributes.id,
          value: attributes.attributes.name
        }
        vm.cssStyle.push(opt);
      });
    });

    events.loadDropDown().then(function(res){
      vm.events = [];
      angular.forEach(res.data, function(attributes){
        var opt = {
          event_id: attributes.id,
          value: attributes.attributes.name
        }
        vm.events.push(opt);
      });
    });

    activate();

    function activate() {

      vm.form = {};
      vm.editing = false;
      errorMsg = 'error accessing ' + pluralName + '!';
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
        type: 'plazas',
        attribute: {
          active: true,
          css_style_id: undefined,
          description: '',
          event_id: undefined,
          image_url: '',
          latitude: '',
          longitude: '',
          name: ''
        }
      };
      vm.editing = true;
    }

    function edit(obj, index) {
      vm.form = angular.copy(obj);
      vm.form.index = index;
      vm.editing = true;
    }

    function cancel(){
      vm.form = {};
      vm.editing = false;
    }

    function remove(obj) {

      // errorMsg = 'error removing event!';
      // completeMsg = 'Sucesfully removed!';

      // return dataService.Remove(apiEndpointName, obj)
      // .then(dataComplete)
      // .catch(dataFailed);

      vm.yesRemove = function() {
        dataService.Remove(apiEndpointName, obj)
        .then(dataComplete)
        .catch(dataFailed);
      }

      var html = "<br /><br /><button type='button' class='btn clear'>Yes</button> | <button type='button' class='btn clear'>No</button>";
      toastr.info(html, 'Please confirm before we complete the action.<br/><br/> Are you sure you want to delete ' + obj.attributes.name + '?', {
        timeOut: 50000,
        progressBar: false,
        extendedTimeOut: 100000,
        onShown: function(toast) {
          angular.element(toast.el[0]).find("button")[0].onclick = vm.yesRemove;
        }
      });
    }

    function save(obj) {

      errorMsg = 'error saving event!';
      completeMsg = 'All data sucesfully saved!';

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
