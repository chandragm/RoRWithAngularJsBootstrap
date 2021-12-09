/**
 * App module defination file
 */
 (function () {
    'use strict';

    angular
        .module('app', [
            'templates', 
            'ui.router',
            'ngAnimate',
            'ui.bootstrap',
            'app.customer'
        ]);
})();