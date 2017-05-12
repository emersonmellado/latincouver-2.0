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

      return dataService.GetAll(apiEndpointName)
        .then(dataComplete)
        .catch(dataFailed);

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

    function remove(obj) {

      return dataService.Remove(apiEndpointName, obj)
        .then(removeComplete)
        .catch(dataFailed);

      function removeComplete(response) {
        if(response.success === false) {
          dataFailed(response.message);
        } else {
          activate();
          toastr.info('Sucesfully removed!');
        }
      }


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

    function edit(obj, index) {
      console.log(obj);
      vm.form = angular.copy(obj);
      vm.form.index = index;
      vm.editing = true;
    }

    function save(obj) {

      if (obj.id) {

        return dataService.Update(apiEndpointName, obj)
          .then(saveComplete)
          .catch(dataFailed);

      } else {

        return dataService.Create(apiEndpointName, obj)
          .then(saveComplete)
          .catch(dataFailed);

      }

      function saveComplete(response) {
        if(response.success === false) {
          dataFailed(response.message);
        } else {
          activate();
          toastr.info('All data sucesfully saved!');
        }
      }

    }

    function dataComplete(response) {
      if(response.success === false) {
        dataFailed(response.message);
      } else {
        vm.data = response.data;
      }
    }

    function dataFailed(error) {
      console.log(error);
      $log.debug("error:" + error);
      toastr.error("error accessing data!");
    }

  }

})();