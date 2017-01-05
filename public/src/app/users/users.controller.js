(function() {
  'use strict';

  angular
    .module('public')
    .config(usersConfig)
    .controller('UsersController', UsersController);

  function usersConfig($stateProvider) {
    $stateProvider.state('users', {
      url: '/', //'/users',
      templateUrl: 'app/users/users.html',
      controller: 'UsersController',
      controllerAs: 'users',
    });
  }

  /** @ngInject */
  function UsersController(usersApi, $q, toastr) {
    var vm = this;

    vm.users = [];

  }
})();