(function() {
    "use strict";

    function EventController(EventService, $log, toastr, $auth, Api) {
        var Service = EventService;
        var vm = this;
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

        function activate() {
            vm.form = {};
            Service.GetAll().then(function(data) {
                vm.data = data;
                console.log("data", data);
            }, function(error) {
                $log.debug("error:" + error);
            });
        }
        activate();

        function add(obj) {
            Service.Create(obj).then(function(data) {
                vm.auth_token = data[0].attributes.auth_token;
                activate();
                toastr.success("User added!");
            }, function(error) {
                $log.debug("error:" + error);
                vm.error = error;
            });
        }

        function remove(obj) {
            var filterDeleted = function(el) {
                return obj.id !== el.id;
            }
            if (!obj.id) {
                vm.data = vm.data.filter(filterDeleted);
                return;
            }
            vm.yesRemoveData = function() {
                Service.Remove(obj.id).then(function() {
                    vm.data = vm.data.filter(filterDeleted);
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
                    angular.element(toast.el[0]).find("button")[0].onclick = vm.yesRemoveData;
                }
            });
        }

        function edit(obj, index) {
            vm.form = angular.copy(obj);
            vm.form.index = index;
            vm.editing = true;
        }

        function save(obj) {
            Service.Update(obj).then(function(data) {
                activate();
                toastr.info('All data sucesfully saved!');
            }, function(error) {
                $log.debug("error:" + error);
            });
            vm.editing = false;
        }
    }
    angular.module("lcv2").controller("EventController", EventController);
})();