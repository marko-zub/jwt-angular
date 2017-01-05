(function() {
  'use strict';

  angular
      .module('public')
      .service('usersApi', usersApi);

  /** @ngInject */
  function usersApi($http) {

    var baseUrl = '';
    this.getUsers = getUsers;
    this.getProduct = getProduct;

    function getUsers() {
      var url = baseUrl + '/app/data/users.json';
      return $http.get(url);
    }

  }

})();