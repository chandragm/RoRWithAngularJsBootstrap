
/**
 * Routes configuration for Customers.

 */
 (function() {
    'use strict';

    angular
        .module('app.customer')
        .config(config);

    /* @ngInject */
    function config($stateProvider) {
        $stateProvider
            .state('/customers', {
                url: '/customers',
                templateUrl: 'angular/customers/index.html',
                controller: 'CustomersController',
                controllerAs: 'vm'
            })
            .state('/customer', {
                url: '/customers/:customerId',
                templateUrl: 'angular/customers/show.html',
                controller: 'CustomerController',
                controllerAs: 'vm'
            });
    }

})();
