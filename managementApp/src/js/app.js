(function() {
  "use strict";

  function UsersController(UserService, $log, toastr, $auth, Api) {
    var vm = this;
    vm.title = "User Management";

    vm.add = add;
    vm.remove = remove;
    vm.edit = edit;
    vm.save = save;
    vm.getCurrent = getCurrent;
    vm.getNext = getNext;
    vm.loginForm = {};

    vm.modelOptions = {
      updateOn: "blur default",
      debounce: {
        default: 300,
        blur: 0
      }
    }

    function activate() {
      vm.form = {};
      UserService.GetAll().then(function(data) {
        vm.users = data;
      }, function(error) {
        $log.debug("error:" + error);
      });
    }

    activate();

    function add(user) {
      UserService
        .Create(user)
        .then(function(data) {
          vm.auth_token = data[0].attributes.auth_token;
          activate();
          toastr.success("User added!");
        }, function(error) {
          $log.debug("error:" + error);
          vm.error = error;
        });
    }

    function remove(user) {

      var filterDeleted = function(el) {
        return user.id !== el.id;
      }

      if (!user.id) {
        vm.users = vm.users.filter(filterDeleted);
        return;
      }

      vm.yesRemoveUser = function() {
        UserService
          .Remove(user.id)
          .then(function() {
            vm.users = vm.users.filter(filterDeleted);
            toastr.info("User removed!");
          }, function(error) {
            $log.debug("error:" + error);
          });
      }

      var html = "<br /><br /><button type='button' class='btn clear'>Yes</button> | <button type='button' class='btn clear'>No</button>";
      toastr.info(html, 'Please confirm before we complete the action.<br/><br/> Are you sure you want to delete ' + user.attributes.email + '?', {
        timeOut: 50000,
        progressBar: false,
        extendedTimeOut: 100000,
        onShown: function(toast) {
          angular.element(toast.el[0]).find("button")[0].onclick = vm.yesRemoveUser;
        }
      });
    }

    function edit(user, index) {
      vm.form = angular.copy(user);
      vm.form.index = index;
      vm.editing = true;
    }

    function getCurrent(user) {
      UserService
        .GetCurrent(user)
        .then(function(data) {
          toastr.info('The current value is: ' + data.attributes.integer);
        }, function(error) {
          $log.debug("error:" + error);
        });
    }

    function getNext(user) {
      UserService
        .GetNext(user)
        .then(function(data) {
          activate();
          toastr.info('The next value is: ' + data.attributes.integer);
        }, function(error) {
          $log.debug("error:" + error);
        });
    }

    function save(user) {
      UserService
        .Update(user)
        .then(function(data) {
          activate();
          toastr.info('User sucesfully saved!');
        }, function(error) {
          $log.debug("error:" + error);
        });
      vm.editing = false;
    }

    vm.logout = function() {
      if (!$auth.isAuthenticated()) {
        return;
      }
      $auth.logout().then(function() {
        toastr.info('You have been logged out');
      });
    }

    vm.login = function() {
      var opts = {
        url: Api.URL_API + '/authenticate',
        method: 'POST'
      }
      $auth.login(vm.loginForm, opts).then(function(data) {
        if (angular.isUndefined(data)) {
          toastr.warning('Email or Password incorrect');
        }
      }).catch(function(error) {
        toastr.warning('Email or Password incorrect');
      });
    };

    vm.isAuthenticated = function() {
      return $auth.isAuthenticated();
    }
  }

  angular.module("lcv2").controller("UsersController", UsersController);
})();