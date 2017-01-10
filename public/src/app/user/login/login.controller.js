(function() {
  'use strict';

  angular
    .module('public')
    .config(loginConfig)
    .controller('LoginController', LoginController);

  function loginConfig($stateProvider) {
    $stateProvider.state('login', {
      url: '/login',
      templateUrl: 'app/user/login/login.html',
      controller: 'LoginController',
      controllerAs: 'vm',
      bindToController: true
    });
  }

  /** @ngInject */
  function LoginController(loginService, $q, Auth) {
    var vm = this;

    vm.login = login;

    function login(username, password) {
      if (!username && !password) return;

      loginService.loginUser(username, password).then(function(data) {
        Auth.setToken(data.token);
      });

    }
  }
})();