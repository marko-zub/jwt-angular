(function() {
  'use strict';

  angular
    .module('jwtNg')
    .service('usersApi', usersApi);

  /** @ngInject */
  function usersApi($http, CONFIG) {

    this.getRandomUser = getRandomUser;

    function getRandomUser() {
      var url = CONFIG.baseUrl + '/users/random';
      return $http.get(url);
    }
  }

})();