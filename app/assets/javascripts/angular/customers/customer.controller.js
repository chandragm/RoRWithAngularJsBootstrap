/**
 * Controller which handles Customers.
 */

 (function () {
  "use strict";

  angular
        .module('app.customer')
        .controller('CustomerController', CustomerController);


        /* @ngInject */
        function CustomerController(CustomerService, $stateParams) {

          var vm = this;
          vm.customer = {};

          function fetchCustomer() {
            return CustomerService.fetchCustomer($stateParams.customerId).then(function(response) {
              vm.customer = response.data;
            });
          }

          //////////
          fetchCustomer();
        }
})();