(function() {
    "use strict";

    function EventsController(EventsService, $log, toastr, $auth, Api) {
        var Service = EventsService;
        var vm = this;
        vm.title = "Event Management";
        vm.add = add;
        vm.remove = remove;
        vm.edit = edit;
        vm.save = save;
        vm.prepareAdd = prepareAdd;
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
            }, function(error) {
                $log.debug("error:" + error);
            });
        }
        activate();

        function add(obj) {
            Service.Create(obj).then(function(data) {
                // vm.auth_token = data[0].attributes.auth_token;
                activate();
                toastr.success("Event added!");
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

        function prepareAdd() {
            // vm.form = angular.copy(obj);
            // vm.form.index = index;
            vm.adding = true;
            vm.viewForm = true;
        }        

        function edit(obj, index) {
            vm.form = angular.copy(obj);
            vm.form.index = index;
            vm.viewForm = true;
            vm.adding = false;
        }

        function save(obj) {
            if (vm.adding){
                add(obj);
            }else{
                Service.Update(obj).then(function(data) {
                    activate();
                    toastr.info('All data sucesfully saved!');
                }, function(error) {
                    $log.debug("error:" + error);
                });
            }
            vm.viewForm = false;
        }
    }
    angular.module("lcv2").controller("EventsController", EventsController);
})();