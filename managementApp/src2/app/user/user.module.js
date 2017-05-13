(function() {
  'use strict';

  angular
    .module('user', [])
    .component('user', {
      templateUrl: 'app/user/user.template.html',
      controller: UserController,
      controllerAs: 'vm'
    });

  UserController.$inject = ['$log', 'toastr', 'dataService'];

  function UserController($log, toastr, dataService) {

    //Change this vars for a new base service on Rails
    var singularName = "user";
    var pluralName = "users";
    var apiEndpointName = "users";
    var errorMsg;
    var completeMsg;
    //

    var vm = this;

    vm.editing = false;
    vm.error = false;
    vm.form;
    vm.data;
    vm.auth_token = 'auth_token';

    vm.title = "User Management";
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
        email: '',
        password: '',
        active: true
      }
      vm.editing = true;
    }

    function edit(obj, index) {
      vm.form = angular.copy(obj);
      vm.form.index = index;
      vm.editing = true;
    }

    function remove(obj) {

      errorMsg = 'error removing user!';
      completeMsg = 'Sucesfully removed!';

      return dataService.Remove(apiEndpointName, obj)
        .then(dataComplete)
        .catch(dataFailed);

      // var filterDeleted = function(el) {
      //     return obj.id !== el.id;
      // }
      // if (!obj.id) {
      //     vm.data = vm.data.filter(filterDeleted);
      //     return;
      // }
      //vm.yesRemoveData = function() {
      // Service.Remove(obj.id).then(function() {
      //     vm.data = vm.data.filter(filterDeleted);
      //     toastr.info("User removed!");
      // }, function(error) {
      //     $log.debug("error:" + error);
      // });
      //}
      // var html = "<br /><br /><button type='button' class='btn clear'>Yes</button> | <button type='button' class='btn clear'>No</button>";
      // toastr.info(html, 'Please confirm before we complete the action.<br/><br/> Are you sure you want to delete ' + obj.id + '?', {
      //     timeOut: 50000,
      //     progressBar: false,
      //     extendedTimeOut: 100000,
      //     onShown: function(toast) {
      //         angular.element(toast.el[0]).find("button")[0].onclick = vm.yesRemoveData;
      //     }
      // });

    }

    function save(obj) {

      errorMsg = 'error saving user!';
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