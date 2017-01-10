(function() {
  'use strict';

  angular
    .module('jwtNg')
    .service('loginService', loginService);

  /** @ngInject */
  function loginService($http, CONFIG) {

    this.loginUser = loginUser;

    function loginUser(username, password) {
      var url = CONFIG.baseUrl + '/user/login',
        data = {
          username: username,
          password: password
        };

      return $http.post(url, data);
    }
  }

})();