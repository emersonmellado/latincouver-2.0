(function() {
  'use strict';

  angular
  .module('tradeLink', [])
  .component('tradeLink', {
    templateUrl: 'app/trade/trade-link.template.html',
    controller: TradeLinkController,
    controllerAs: 'vm'
  });

  TradeLinkController.$inject = ['$q', '$log', 'toastr', 'dataService', '$auth', 'cssStyle'];

  function TradeLinkController($q, $log, toastr, dataService, $auth, cssStyle) {

    //Change this vars for a new base service on Rails
    var apiEndpointName = "trade-links";
    //

    var errorMsg;
    var completeMsg;

    var vm = this;

    vm.editing = false;
    vm.error = false;
    vm.form;
    vm.data;
    vm.trades;

    vm.title = "Trade-link Management";
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

    activate();

    function activate() {

      vm.form = {};
      vm.editing = false;
      errorMsg = 'error accessing ' + apiEndpointName + '!';
      completeMsg = '';

      if (!vm.trades) {

        dataService.GetAll('trades')
          .then(getAllCompleteTrades)
          .catch(dataFailed);

        function getAllCompleteTrades(response) {
          if (response && response.data){
            vm.trades = [];
            var list = response.data;
            var len = list.length;
            for (var i = 0; i < len; i++) {
              if ((list[i].id * 1) > 0) {
                vm.trades.push({id: list[i].id, name: (list[i].id + ' - ' + list[i].attributes.name)});
              }
            }
          }
          console.log(vm.trades);
        }

      }

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
        attributes: {
          trade_id: '',
          active: true,
          href: '',
          name: ''
          },
        id: 0
      };

      vm.editing = true;
    }

    function edit(obj, index) {
      vm.form = angular.copy(obj);
      if (!vm.form.attributes.trade_id) vm.form.attributes.trade_id = '';
      vm.form.index = index;
      vm.editing = true;
    }

    function cancel() {
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

        console.log(obj);

        return dataService.Create(apiEndpointName, obj)
          .then(dataComplete)
          .catch(dataFailed);

      }

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
