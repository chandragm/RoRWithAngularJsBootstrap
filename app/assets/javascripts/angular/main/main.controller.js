/**
 * Controller which handles main app.
 */

 (function () {
  "use strict";

  angular
        .module('app')
        .controller('MainController', MainController);


        /* @ngInject */
        function MainController() {

          var vm = this;
          vm.welcome_message = "Weclome to my application awesomeness!"

        }
})();