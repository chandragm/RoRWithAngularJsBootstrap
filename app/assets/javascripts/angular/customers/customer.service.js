/**
 * Customer service, responsible for CRUD operations on customers.
 *
 */
 (function() {
    'use strict';

    var base_url = '/customers'
  
    angular
        .module('app.customer')
        .factory('CustomerService', CustomerService);
  
        /* @ngInject */
      function CustomerService($http) {
  
        var service = {
            fetchCustomers: fetchCustomers,
            fetchCustomer: fetchCustomer,
            createCustomer: createCustomer,
            updateCustomer: updateCustomer,
            deleteCustomer: deleteCustomer,
            search: search
        };
        return service;

        function fetchCustomers() {
            return $http.get(base_url + '.json');
        }

        function fetchCustomer(customerId) {
            return $http.get(base_url + '/'+ customerId +'.json');
        }

        function createCustomer(customer) {
            return $http.post(base_url + '.json', {
                customer: customer
              });
        }

        function updateCustomer(customer) {
            return $http.put(base_url + '/' + customer.id + '.json', {
                customer: customer
              });
        }

        function deleteCustomer(customerId) {
            return $http.delete(base_url + '/' + customerId + '.json')
        }
       
        function search(query) {
            return $http.get(base_url + '/search.json', {
                params: {
                  query: query
                }
            });
        }
         
    }
})();