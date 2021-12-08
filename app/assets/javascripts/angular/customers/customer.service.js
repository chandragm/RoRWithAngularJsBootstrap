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
            fetchCustomers: fetchCustomers
        };
        return service;

        function fetchCustomers() {
            return $http.get(base_url + '.json');
        }
    }
})();