/**
 * Controller which handles editing Customer.
 */

 (function () {
  "use strict";

  angular
        .module('app.customer')
        .controller('EditCustomerController', EditCustomerController);

        /* @ngInject */
        function EditCustomerController($uibModalInstance, CustomerService, customer) {

          var vm = this;
          vm.customer = customer;
          vm.updateCustomer = updateCustomer;
          vm.cancel = cancel;

          function updateCustomer() {
            CustomerService.updateCustomer(vm.customer).then(function(data) {
              $uibModalInstance.close({response: data});
            }, function(response) {
              alert('Something went wrong: ' + response.statusText + '. Code: ' + response.status);
              cancel();
            });
          }

          function cancel() {
            $uibModalInstance.dismiss('cancel');
          }

        }
})();