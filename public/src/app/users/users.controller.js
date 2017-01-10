(function() {
  'use strict';

  angular
    .module('jwtNg')
    .config(usersConfig)
    .controller('UsersController', UsersController);

  function usersConfig($stateProvider) {
    $stateProvider.state('users', {
      url: '/', //'/users',
      templateUrl: 'app/users/users.html',
      controller: 'UsersController',
      controllerAs: 'vm',
      bindToController: true
    });
  }

  /** @ngInject */
  function UsersController(usersApi, $q, toastr) {
    var vm = this;

    vm.getRandomUserCall = getRandomUserCall;
    vm.randomUser = [];

    function getRandomUserCall() {
      usersApi.getRandomUser().then(function(resp) {
        vm.randomUser = resp.data;
      }, function(resp) {
        toastr.error(resp.status + ': ' + resp.statusText);
      });

      return vm.randomUser;
    }
    getRandomUserCall();
  }
})();