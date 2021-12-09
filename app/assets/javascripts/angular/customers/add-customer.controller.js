/**
 * Controller which handles adding Customer.
 */

 (function () {
  "use strict";

  angular
        .module('app.customer')
        .controller('AddCustomerController', AddCustomerController);

        /* @ngInject */
        function AddCustomerController($uibModalInstance, CustomerService) {

          var vm = this;
          vm.customer = {};
          vm.createCustomer = createCustomer;
          vm.cancel = cancel;

          function createCustomer() {
            CustomerService.createCustomer(vm.customer).then(function(data) {
              vm.customer = {};
              $uibModalInstance.close({customer: data});
            }, function(error) {
              alert('Something went wrong: ' + error.statusText + '. Code: ' + error.status);
              cancel();
            });
          }

          function cancel() {
            $uibModalInstance.dismiss('cancel');
          }

        }
})();