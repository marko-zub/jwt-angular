(function() {
  'use strict';

  angular
    .module('public')
    .service('Auth', AuthFactory);

  /** @ngInject */
  function AuthFactory($window) {

    var localStore = $window.localStorage,
      localStoreKey = 'token';
      
    function setToken(token) {
      if (token !== null) {
        localStore.setItem(localStoreKey, token);
      } else if (token === null) {
        localStore.removItem(localStoreKey);
      }
    }

    function getToken() {
      var data = localStore.getItem(localStoreKey);
      return data;
    }

    return {
      setToken: setToken,
      getToken: getToken
    }
  }

})();