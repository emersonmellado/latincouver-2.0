(function() {
  'use strict';

  angular
  .module('trade', [])
  .component('trade', {
    templateUrl: 'app/trade/trade.template.html',
    controller: TradeController,
    controllerAs: 'vm'
  });

  TradeController.$inject = ['$q', '$log', 'toastr', 'dataService', '$auth'];

  function TradeController($q, $log, toastr, dataService, $auth) {

    //Change this vars for a new base service on Rails
    var apiEndpointName = "trades";
    //

    var errorMsg;
    var completeMsg;

    var vm = this;

    vm.editing = false;
    vm.error = false;
    vm.form;
    vm.data;
    vm.tradetypes;
    vm.tradegroups;

    vm.title = "Trade Management";
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

      getAllTrades();

    }

    function getAllTrades() {

      dataService.GetAll('trade-types')
        .then(getAllTradeTypesComplete)
        .catch(dataFailed);

      dataService.GetAll('trade-groups')
        .then(getAllTradeGroupsComplete)
        .catch(dataFailed);

      dataService.GetAll(apiEndpointName)
        .then(getAllComplete)
        .catch(dataFailed);

      function getAllTradeTypesComplete(response) {
        if (response && response.data){
          vm.tradetypes = response.data;       
        } else {
          dataFailed({message: 'Error reading types'});
        }
      }

      function getAllTradeGroupsComplete(response) {
        if (response && response.data){
          vm.tradegroups = response.data;    
        } else {
          dataFailed({message: 'Error reading groups'});
        }
      }

      function getAllComplete(response) {
        if (response && response.data){
          vm.data = response.data;
        } else {
          dataFailed({message: 'Error reading trades'});
        }
      }

    }

    function add() {

      vm.form = {
        id: 0,
        attributes: {
          active: true,
          description: '',
          image_url: '',
          name: '',
          order: null,
          short_description: '',
          trade_type: '',
          trade_group: ''
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

      if(!response.success || response.success == false) {
        dataFailed(response);
        return;
      }
      if (completeMsg) toastr.info(completeMsg);
      getAllTrades();
    }

    function dataFailed(error) {
      var msg = error.message ? error.message : 'Error';
      toastr.error(msg);
    }

  }

})();
