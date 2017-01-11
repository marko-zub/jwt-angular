(function() {
  'use strict';

  angular
    .module('jwtNg')
    .config(loginConfig)
    .controller('LoginController', LoginController);

  function loginConfig($stateProvider) {
    $stateProvider.state('login', {
      url: '/login',
      templateUrl: 'app/user/login/login.html',
      controller: 'LoginController',
      controllerAs: 'vm',
      bindToController: true,
      data: {
        bodyClass: 'full-height'
      }
    });
  }

  /** @ngInject */
  function LoginController(loginService, $q, Auth) {
    var vm = this;

    vm.login = login;
    vm.logout = logout;

    function login(email, password) {
      if (!email && !password) return;

      loginService.loginUser(email, password).then(function(resp) {
        if (resp.data.token && !Auth.isAuthorized()) {
          Auth.setToken(resp.data.token);
        }
      });
    }

    function logout() {
      Auth.setToken(null);
    }

  }
})();