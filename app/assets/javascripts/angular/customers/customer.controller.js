/**
 * Controller which handles Customers.
 */

 (function () {
  "use strict";

  angular
        .module('app.customer')
        .controller('CustomerController', CustomerController);


        /* @ngInject */
        function CustomerController(CustomerService) {

          var vm = this;
          vm.customers = [];

          function fetchCustomers() {
            return CustomerService.fetchCustomers().then(function(response) {
              vm.customers = response.data;
            });
          };

          //////////
          fetchCustomers();
        }
})();