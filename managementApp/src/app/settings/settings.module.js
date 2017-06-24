(function() {
  'use strict';

  angular
  .module('settings', [])
  .component('settings', {
    templateUrl: 'app/settings/settings.template.html',
    controller: SettingsController,
    controllerAs: 'vm'
  });

  SettingsController.$inject = ['$q', '$log', 'toastr', 'dataService', '$auth'];

  function SettingsController($q, $log, toastr, dataService, $auth) {

    //Change this vars for a new base service on Rails
    var apiEndpointName = "settings";
    //
    var errorMsg;
    var completeMsg;

    var vm = this;

    vm.form = {};
    vm.editing = false;

    vm.edit = edit;
    vm.cancel = cancel;
    vm.save = save;

    activate()

    function activate() {
      get()
    }

    function cancel() {
      vm.editing = false;
    }

    function edit() {
      vm.editing = true;
    }

    function get() {

      errorMsg = 'error accessing ' + apiEndpointName + '!';
      completeMsg = '';

      return dataService.GetAll(apiEndpointName)
        .then(getAllComplete)
        .catch(dataFailed);

      function getAllComplete(response) {
        if (response && response.data){
          vm.form = response.data[0];
          console.log(vm.form);
        } else {
          dataFailed(errorMsg);
        }
      }


    }

    function save() {

      errorMsg = 'error saving' + apiEndpointName;
      completeMsg = 'All data sucesfully saved!';

      return dataService.Update(apiEndpointName, form)
        .then(dataComplete)
        .catch(dataFailed);

      vm.editing = false;

      function dataComplete(response) {

        if(response.success && response.success == false) {
          dataFailed(response);
          return;
        }
        if (completeMsg) toastr.info(completeMsg);
        get();
      }

    }

    function dataFailed(error) {
      toastr.error(error.message);
    }
  }

})();
