/**
 * Controller which handles Customers.
 */

 (function () {
  "use strict";

  angular
        .module('app.customer')
        .controller('CustomersController', CustomersController);

        /* @ngInject */
        function CustomersController(CustomerService, $uibModal) {

          var vm = this;
          vm.customers = [];
          vm.customerId = null;
          vm.query = null;

          vm.addCustomer = addCustomer;
          vm.editCustomer = editCustomer;
          vm.destroyCustomer = destroyCustomer;
          vm.filterCustomers = filterCustomers;

          function fetchCustomers() {
            return CustomerService.fetchCustomers().then(function(response) {
              vm.customers = response.data;
            });
          };

          function addCustomer() {
            var modalInstance = $uibModal.open({
              animation: true,
              size: 'lg',
              backdrop: 'static',
              templateUrl: 'angular/customers/add-customer-modal.html',
              controller: 'AddCustomerController as vm',
              show: false
            });

            modalInstance.result.then(function() {
              fetchCustomers();
            });
          };
        
          function editCustomer(customer) {
            var modalInstance = $uibModal.open({
              animation: true,
              templateUrl: 'angular/customers/edit-customer-modal.html',
              controller: 'EditCustomerController as vm',
              resolve: {
                customer: function() {
                    return angular.copy(customer);
                }
              }
            });

            modalInstance.result.then(function() {
              fetchCustomers();
            });
          };
        
          function destroyCustomer(customerId, index) {
            CustomerService.deleteCustomer(customerId).then(function(response) {
              vm.customers.splice(index, 1);
            }, function(response) {
              alert('Something went wrong: ' + response.statusText + '. Code: ' + response.status);
            });
          };
        
          function filterCustomers() {
            if(vm.query != '') {
              CustomerService.search(vm.query).then(function(response) {
                vm.customers = response.data;
              });
            } else {
              fetchCustomers();
            }
          };

          //////////
          fetchCustomers();
        }
})();