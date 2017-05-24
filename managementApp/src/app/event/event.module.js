(function() {
  'use strict';

  angular
  .module('event', [])
  .component('event', {
    templateUrl: 'app/event/event.template.html',
    controller: EventController,
    controllerAs: 'vm'
  });

  EventController.$inject = ['$q', '$log', 'toastr', 'dataService', '$auth', 'cssStyle'];

  function EventController($q, $log, toastr, dataService, $auth, cssStyle) {

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

    vm.title = "Event Management";
    vm.add = add;
    vm.remove = remove;
    vm.edit = edit;
    vm.save = save;
    vm.cancel = cancel;

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
      console.log("vm.cssStyle", vm.cssStyle);
    });

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
        if (response && response.data){
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
      console.log("vm.form", vm.form);
      vm.form.index = index;
      vm.editing = true;
    }

    function cancel(){
      vm.form = {};
      vm.editing = false;
    }

    function remove(obj) {

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

      errorMsg = 'error saving' + apiEndpointName;
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

    function serializeAttributes(obj){
      var ret = obj.attributes.replace(/-/g, '_');
      console.log("ret", ret);
      return ret;
    }

    function dataComplete(response) {
      if(response.success && response.success == false) {
        dataFailed(response);
        return;
      }
      if (completeMsg) toastr.info(completeMsg);
      activate();
    }

    function dataFailed(error) {
      toastr.error(error.message);
    }

  }

})();
