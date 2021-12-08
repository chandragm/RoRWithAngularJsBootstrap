
/**
 * Routes configuration for Events.

 */
 (function() {
    'use strict';

    angular
        .module('app')
        .config(config);

    /* @ngInject */
    function config($stateProvider) {
        $stateProvider
            .state('/', {
                url: '/',
                templateUrl: 'angular/main/index.html',
                controller: 'MainController',
                controllerAs: 'vm'
                })
    }

})();
