(function() {
  'use strict';

  angular
    .module('jwtNg')
    .service('Auth', AuthFactory);

  /** @ngInject */
  function AuthFactory($window) {

    var localStore = $window.localStorage,
      localStoreKey = 'token';

    function setToken(token) {
      if (token !== null) {
        localStore.setItem(localStoreKey, token);
      } else if (token === null) {
        localStore.removeItem(localStoreKey);
      }
    }

    function getToken() {
      var data = localStore.getItem(localStoreKey);
      return data;
    }

    function isAuthorized() {
      var token = getToken(),
        isAuth;

      if (token) {
        isAuth = true;
      } else {
        isAuth = false;
      }
      return isAuth;
    }

    return {
      setToken: setToken,
      isAuthorized: isAuthorized,
      getToken: getToken
    }
  }

})();