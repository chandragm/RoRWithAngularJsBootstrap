/**
 * Controller which handles Customers.
 */

 (function () {
  "use strict";

  angular
        .module('app.customer')
        .controller('CustomersController', CustomersController);


        /* @ngInject */
        function CustomersController(CustomerService, $modal) {

          var vm = this;
          vm.customers = [];
          vm.newCustomer = {};
          vm.customer = {};
          vm.customerId = null;
          vm.query = null;

          vm.addCustomer = addCustomer;
          vm.createCustomer = createCustomer;
          vm.updateCustomer = updateCustomer;
          vm.editCustomer = editCustomer;
          vm.destroyCustomer = destroyCustomer;
          vm.filterCustomers = filterCustomers;

          function fetchCustomers() {
            return CustomerService.fetchCustomers().then(function(response) {
              vm.customers = response.data;
            });
          };

          function addCustomer() {
            createModal.$promise.then(createModal.show);
          };
        
          function createCustomer() {
            CustomerService.createCustomer(vm.newCustomer).then(function(response) {
              vm.customers.push(response.data);
              vm.newCustomer = {};
              createModal.hide();
            }, function(response) {
              alert('Something went wrong: ' + response.statusText + '. Code: ' + response.status);
            });
          };
        
          function editCustomer(customer, customerId) {
            editModal.$promise.then(editModal.show);
            vm.customer = angular.copy(customer);
            vm.customerId = customerId;
            console.log(vm.customer);
          };
        
          function updateCustomer() {
            CustomerService.updateCustomer(vm.customer).then(function(response) {
              debugger
              vm.customers[vm.customerId] = response.data;
              vm.customer = {};
              vm.customerId = null;
              editModal.dismiss();
            }, function(response) {
              alert('Something went wrong: ' + response.statusText + '. Code: ' + response.status);
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
        
          var createModal = $modal({
            scope: this.vm,
            templateUrl: 'angular/customers/add-customer-modal.html',
            controller: 'CustomersController',
            controllerAs: 'vm',
            show: false
          });
        
          var editModal = $modal({
            scope: this.vm,
            templateUrl: 'angular/customers/edit-customer-modal.html',
            controller: 'CustomersController',
            controllerAs: 'vm',
            show: false
          });

          //////////
          fetchCustomers();
        }
})();